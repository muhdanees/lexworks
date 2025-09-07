import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";

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

export default function CreatePost({ slug, API_URL }) {
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const saveType = useRef("draft"); // "draft" | "published" | "archived"
  const [preview, setPreview] = useState(null);
  const [data, setData] = useState({});
  const [authors, setAuthors] = useState([]);
  const [tags, setTags] = useState([]);

  const getAllTags = async () => {
    const res = await fetch(`${API_URL}/tags`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
    console.log("res", res);
    setTags(res.tags?.map(({ tag }) => ({ label: tag, value: tag })));
  };

  const getAllAuthors = async () => {
    const res = await fetch(`${API_URL}/authors`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
    const authors = res.authors.map(({ author }) => author);
    setAuthors([
      ...authors.filter((author) => !authors.includes(author)),
      ...res.authors?.map(({ author }) => ({ label: author, value: author })),
    ]);
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      selectedOption: [],
      slug: "",
      title: "",
      content: "",
      authorId: "user-123",
    },
  });
  const optionsWatch = watch("selectedOption");
  const watchedFile = watch("file");
  const onSubmit = async (dataSubmit) => {
    if (saveType.current === "draft") {
      setSaving(true);
    } else {
      setLoading(true);
    }
    const image = dataSubmit.file[0];
    let imageJSON = { url: "" };
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      const resimage = await fetch(`${API_URL}/images`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!resimage.ok) {
        toast.error("Error uploading image. Please try again!");
        setLoading(false);
        setSaving(false);
        throw new Error("Error uploading image");
      }
      imageJSON = await resimage.json();
    }
    fetch(`${API_URL}/posts`, {
      method: "POST",
      body: JSON.stringify({
        content: dataSubmit.content,
        title: dataSubmit.title,
        status: saveType.current,
        categories: dataSubmit.selectedOption.value.toLowerCase() || "",
        slug: dataSubmit.slug,
        authorId: dataSubmit.selectedOptionAuthor.value,
        image: imageJSON.url,
      }),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Post created!");
        setTimeout(() => {
          window.location.href = "/admin/dashboard/posts";
        }, 2000);
      })
      .catch(() => {
        toast.error("Unable to create post. Please try again!");
      })
      .finally(() => {
        if (saveType.current === "draft") {
          setSaving(false);
        } else {
          setLoading(false);
        }
      });
  };

  const onPublish = () => {
    saveType.current = "published";
    handleSubmit(onSubmit)();
  };

  const onSave = () => {
    saveType.current = "draft";
    handleSubmit(onSubmit)();
  };

  const onCopy = (e) => {
    e.preventDefault();
    if (data.slug) {
      navigator.clipboard.writeText(data.slug).then(() => {
        toast.success(`Copied: ${data.slug}`);
      });
    } else {
      toast.error("Empty Slug");
    }
  };

  const uploadToS3 = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const resimage = await fetch(`${API_URL}/images`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const imageJSON = await resimage.json();
    return imageJSON.url;
  }

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        try {
          const imageUrl = await uploadToS3(file);
          const range = quillRef.current.getSelection();
          quillRef.current.insertEmbed(range.index, 'image', imageUrl);
        } catch (err) {
          console.error('Image upload failed', err);
        }
      }
    };
  }

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill("#" + editorRef.current.id, {
        theme: "snow",
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              image: imageHandler
            }
          },
        },
        placeholder: "Add new content",
      });
      quillRef.current.on("text-change", () => {
        const html = quillRef.current.root.innerHTML;
        setValue("content", html);
      });
    }
    getAllTags();
    getAllAuthors();
  }, [editorRef.current, slug]);

  useEffect(() => {
    if (watchedFile && watchedFile[0]) {
      setPreview(URL.createObjectURL(watchedFile[0]));
    } else {
      setPreview(null);
    }
  }, [watchedFile]);

  return (
    <div className="py-4 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-2">
          <span className="text-sm">Author</span>{" "}
          <span className=" py-1 px-2.5">
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
            {...register("title", {
              onChange: (e) => {
                const generateSlug = e.target.value
                  .toLowerCase()
                  .trim()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-+|-+$/g, "");
                setValue("slug", generateSlug);
                setData((prev) => ({ ...prev, slug: generateSlug }));
              },
            })}
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
          <div id="editor" ref={editorRef} className="min-h-48"></div>
        </div>
        <div className="pb-4 block">
          <span className="block mb-2">Tags</span>
          <div className="mb-2">
          {optionsWatch?.value?.length > 0 ? (
              <span className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded">
                {optionsWatch.value}
              </span>
            ) : null}
          </div>
          <Controller
            name="selectedOption"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={tags}
                onChange={(selected) => field.onChange(selected)}
                // isMulti
                isSearchable
                // onCreateOption={handleCreate}
                placeholder="Select or create an option"
              />
            )}
          />
        </div>
        <span className="block mb-2">Image</span>
        {preview && (
          <div className="my-4">
            <img
              src={preview}
              alt="File Preview"
              className="w-48 h-48 object-cover border rounded-lg"
            />
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
                <span className="font-semibold">Click to upload</span> or drag
                and drop
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
      <div className="flex justify-end mt-4 gap-4">
        <button
          onClick={onSave}
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium text-base px-10 py-2.5 focus:outline-none"
        >
          {saving ? (
            <span>
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Saving...
            </span>
          ) : (
            "Save"
          )}
        </button>
        <button
          onClick={onPublish}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-base px-10 py-2.5 focus:outline-none"
        >
          {loading ? (
            <span>
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
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
