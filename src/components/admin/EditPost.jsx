import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import { TrashIcon } from "@heroicons/react/24/solid";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import LoadingIcon from "./icons/LoadingIcon";
import axios from "axios";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video"],
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ align: [] }],
];

export default function EditPost({ slug, API_URL }) {
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [preview, setPreview] = useState(null);
  const [imageData, setImageData] = useState({});
  const [authors, setAuthors] = useState([]);
  const [deleting, setDeleting] = useState(false);
  const [tags, setTags] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      selectedOption: {},
      slug: "",
      title: "",
      content: "",
    },
  });
  const watchedFile = watch("file");
  const onSubmit = async (dataSubmit) => {
    setLoading(true);
    axios
      .patch(
        `${API_URL}/posts/${data.post._id}`,
        {
          title: dataSubmit.title,
          slug: dataSubmit.slug,
          author: dataSubmit.selectedOptionAuthor.value,
          tags: dataSubmit.selectedOption.map((tag) => tag.value) || [],
          content: dataSubmit.content,
          image: imageData.url,
          status: "published",
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "content-type": "application/json",
          },
        }
      )
      .then(() => {
        toast.success("Post updated!");
      })
      .catch(() => {
        toast.error("Unable to update post. Please try again!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getAllTags = async () => {
    try {
      const res = await axios.get(`${API_URL}/tags`);
      const newTags = res.data.tags?.map((tag) => ({
        label: tag.name,
        value: tag.slug,
        other: tag,
      }));
      setTags(newTags);
      return Promise.resolve(newTags);
    } catch {
      return Promise.resolve([]);
    }
  };

  const getAllAuthors = async () => {
    try {
      const res = await axios.get(`${API_URL}/authors`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const authors = res.data.authors.map((author) => ({
        label: author.name,
        value: author.slug,
        other: author,
      }));
      setAuthors(authors);
      return Promise.resolve(authors);
    } catch {
      return Promise.resolve([]);
    }
  };

  const onDeleteImage = async (e) => {
    e.preventDefault();
    setDeleting(true);
    const resImage = await fetch(
      `${API_URL}/posts/update-image/${data.post._id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          image: "",
        }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "content-type": "application/json",
        },
      }
    );
    if (!resImage.ok) {
      toast.error("Unable to update image.");
      throw new Error("Unable to update image.");
    }
    setPreview("");
    setImageData({ url: ""});
  };

  const onCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(data.slug).then(() => {
      toast.success(`Copied: ${data.slug}`);
    });
  };

  const loadData = async (newTags, newAuthors) => {
    const result = await axios(`${API_URL}/posts/${slug}`);
    const res = result.data;
    setData(res);
    const delta = quillRef.current.clipboard.convert({
      html: res.post.content,
    });
    quillRef.current.setContents(delta);
    setValue(
      "selectedOption",
      res.post.tags.map((tag) => newTags.find((t) => t.value === tag))
    );
    setValue(
      "selectedOptionAuthor",
      newAuthors.find((author) => author.value === res.post.author)
    );
    setValue("title", res.post.title);
    setValue("slug", res.post.slug);
    setValue("content", res.post.content);
    setPreview(res.post.image);
  };

  const uploadToS3 = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const resimage = await fetch(`${API_URL}/images`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const imageJSON = await resimage.json();
    return imageJSON;
  };

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        try {
          const imageUrl = await uploadToS3(file);
          const range = quillRef.current.getSelection();
          quillRef.current.insertEmbed(range.index, "image", imageUrl.url);
        } catch (err) {
          console.error("Image upload failed", err);
        }
      }
    };
  };

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill("#" + editorRef.current.id, {
        theme: "snow",
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              image: imageHandler,
            },
          },
        },
      });
      quillRef.current.on("text-change", () => {
        const html = quillRef.current.root.innerHTML;
        setValue("content", html);
      });
    }
    (async () => {
      const newTags = await getAllTags();
      const newAuthors = await getAllAuthors();
      await loadData(newTags, newAuthors);
    })();
  }, [editorRef.current, slug]);

  useEffect(() => {
    if (watchedFile && watchedFile[0]) {
      setPreview(URL.createObjectURL(watchedFile[0]));
      uploadToS3(watchedFile[0]).then((res) => {
        console.log(res);
        setImageData(res);
      });
    } else {
      setPreview(null);
    }
  }, [watchedFile]);

  return (
    <div className="py-4 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-2">
          <span className="text-sm">Author</span>{" "}
          <span className="py-1 px-2.5">
            <Controller
              name="selectedOptionAuthor"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={authors}
                  onChange={(selected) => field.onChange(selected)}
                  placeholder="Select an author"
                />
              )}
            />
          </span>
        </label>
        <label className="pb-4 block">
          <span className="block mb-2">Title</span>
          <input
            type="text"
            {...register("title")}
            className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-2"
          />
        </label>
        <label className="pb-4 block relative">
          <span className="block mb-2">Slug</span>
          <input
            type="text"
            disabled
            readOnly
            {...register("slug")}
            className="bg-white disabled:bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-2"
          />
          <button
            onClick={onCopy}
            className="absolute right-2 inset-y-0 flex justify-center items-center pt-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
          </button>
        </label>
        <div className="mt-2 pb-4 [&>.ql-toolbar.ql-snow]:sticky [&>.ql-toolbar.ql-snow]:top-0 [&>.ql-toolbar.ql-snow]:bg-white [&>.ql-toolbar.ql-snow]:z-10">
          <div id="editor" ref={editorRef} className="min-h-48">
            <p>Loading Data...</p>
          </div>
        </div>
        <div className="pb-4 block">
          <span className="block mb-2">Tags</span>
          <Controller
            name="selectedOption"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={tags}
                isMulti
                isSearchable
                placeholder="Select Tag"
              />
            )}
          />
        </div>
        <span className="block mb-2">Image</span>
        {preview && (
          <div className="my-4 relative inline-block group">
            <img
              src={preview}
              alt="File Preview"
              className="w-48 h-48 object-cover border rounded-lg"
            />
            <button
              onClick={onDeleteImage}
              className="absolute top-0 right-0 p-2 z-10 scale-75 group-hover:scale-100 delay-500 hidden group-hover:block bg-red-200 rounded transition-all"
            >
              {deleting ? (
                <LoadingIcon className="inline w-4 h-4 text-white animate-spin" />
              ) : (
                <TrashIcon className="w-4 text-red-600" />
              )}
            </button>
          </div>
        )}
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 ">
                <span className="font-semibold">Click to upload</span>
              </p>
              <p className="text-xs text-gray-500 ">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              {...register("file")}
            />
          </label>
        </div>
        {errors.file && (
          <p className="text-red-500 text-sm">{errors.file.message}</p>
        )}
      </form>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleSubmit(onSubmit)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-base px-10 py-2.5 focus:outline-none"
        >
          {loading ? (
            <span>
              <LoadingIcon className="inline w-4 h-4 me-3 text-white animate-spin" />
              Publishing...
            </span>
          ) : (
            "Publish"
          )}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
