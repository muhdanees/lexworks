import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { useForm, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { ToastContainer, toast } from "react-toastify";
import { TrashIcon,  } from "@heroicons/react/24/solid";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import LoadingIcon from "./icons/LoadingIcon";

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
  const [options, setOptions] = useState([]);
  const [deleting, setDeleting] = useState(false);

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
    },
  });
  const optionsWatch = watch("selectedOption");
  const watchedFile = watch("file");
  const onSubmit = async (dataSubmit) => {
    setLoading(true);
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
        throw new Error("Error uploading image");
      }
      imageJSON = await resimage.json();
    }
    fetch(`${API_URL}/posts/${data.postId}/${data.slug}`, {
      method: "PATCH",
      body: JSON.stringify({
        content: dataSubmit.content,
        title: dataSubmit.title,
        status: "published",
        categories: dataSubmit.selectedOption.map((option) => option.value),
        image: imageJSON.url,
      }),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
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

  const onDeleteImage = async (e) => {
    e.preventDefault();
    setDeleting(true);
    const res = await fetch(`${API_URL}/images?=key=${encodeURIComponent(preview)}`, {
      method: "DELETE"
    });
    if (!res.ok) {
      toast.error("Unable to delete image.")
      throw new Error("Unable to delete image.");
    }
    setPreview("");
    setDeleting(false);
  }

  const handleCreate = (inputValue) => {
    const newOption = { value: inputValue, label: inputValue };
    const newOptions = [...options, newOption];
    setOptions(newOptions);
    setValue("selectedOption", newOptions);
  };

  const onCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(data.slug).then(() => {
      toast.success(`Copied: ${data.slug}`);
    });
  };

  const loadData = async () => {
    const res = await fetch(`${API_URL}/posts/${slug}`).then((res) =>
      res.json()
    );
    setData(res);
    console.log("res", res);
    const delta = quillRef.current.clipboard.convert({ html: res.content });
    quillRef.current.setContents(delta);
    const newOptions = res.categories.map((categorie) => ({
      value: categorie,
      label: categorie,
    }));
    setOptions(newOptions);
    setValue("selectedOption", newOptions);
    setValue("title", res.title);
    setValue("slug", res.slug);
    setValue("content", res.content);
    setPreview(res.image);
  };

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill("#" + editorRef.current.id, {
        theme: "snow",
        modules: {
          toolbar: toolbarOptions,
        },
      });
      quillRef.current.on("text-change", () => {
        const html = quillRef.current.root.innerHTML;
        setValue("content", html);
      });
    }
    loadData();
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
          <span className="bg-gray-300 rounded-full text-xs py-1 px-2.5">
            {data?.authorId}
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
        <div className="mt-2 pb-4">
          <div id="editor" ref={editorRef} className="min-h-48">
            <p>Loading Data...</p>
          </div>
        </div>
        <div className="pb-4 block">
          <span className="block mb-2">Tags</span>
          <div className="mb-2">
            {optionsWatch?.map((option) => (
              <span
                className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded"
                key={option.value}
              >
                {option.value}
              </span>
            ))}
          </div>
          <Controller
            name="selectedOption"
            control={control}
            render={({ field }) => (
              <CreatableSelect
                {...field}
                options={options}
                onChange={(selected) => field.onChange(selected)}
                isMulti
                onCreateOption={handleCreate}
                placeholder="Select or create an option"
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
            <button onClick={onDeleteImage} className="absolute top-0 right-0 p-2 z-10 scale-75 group-hover:scale-100 delay-500 hidden group-hover:block bg-red-200 rounded transition-all">
              {deleting ? <LoadingIcon className="inline w-4 h-4 text-white animate-spin" /> : <TrashIcon className="w-4 text-red-600" />}
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
