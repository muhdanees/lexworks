import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { useForm, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
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

export default function EditPost({ slug, API_URL }) {
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [options, setOptions] = useState([]);

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
  const onSubmit = (dataSubmit) => {
    setLoading(true);
    fetch(`${API_URL}/posts/${data.postId}/${data.slug}`, {
      method: "PATCH",
      body: JSON.stringify({
        content: dataSubmit.content,
        title: dataSubmit.title,
        status: "published",
        categories: dataSubmit.selectedOption.map((option) => option.value),
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
          <button onClick={onCopy} className="absolute right-2 inset-y-0 flex justify-center items-center pt-3">
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
      </form>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleSubmit(onSubmit)}
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
