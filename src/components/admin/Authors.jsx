import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Authors({ API_URL }) {
  const [author, setAuthor] = useState("");
  const [designation, setDesignation] = useState("");
  const [authors, setAuthors] = useState([]);

  const onCreate = async () => {
    try {
      await axios.post(
        `${API_URL}/authors`,
        {
          name: author,
          designation: designation,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setAuthor("");
      setDesignation("");
      getAllAuthors();
    } catch (error) {
      toast.error("Error to create author!");
      console.error(error);
    }
  };

  const getAllAuthors = async () => {
    const res = await axios.get(`${API_URL}/authors`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setAuthors(res.data.authors);
  };

  const removeAuthor = async (activeAuthor) => {
    try {
      await axios.request({
        method: "DELETE",
        url: `${API_URL}/authors`,
        data: { _id: activeAuthor._id },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      toast.error("Error to delete author!");
      console.error(error);
    }
    getAllAuthors();
  };

  useEffect(() => {
    getAllAuthors();
  }, []);

  return (
    <section>
      <div className="mt-10">
        <div className="">
          <label
            htmlFor="tag"
            className="block text-sm/6 font-medium text-gray-900 mb-2"
          >
            Add Author
          </label>
          <div className="flex w-full gap-4">
            <div className="flex-1 flex gap-4">
              <input
                type="text"
                name="authorName"
                id="authorName"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
                placeholder="Name"
                className="block w-1/2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              <input
                type="text"
                name="designation"
                id="designation"
                value={designation}
                onChange={(e) => {
                  setDesignation(e.target.value);
                }}
                placeholder="designation"
                className="block w-1/2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>

            <button
              onClick={onCreate}
              disabled={author.length === 0}
              className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Author
            </button>
          </div>
        </div>
        <div className="mt-4 space-x-2 space-y-2">
          {authors.map((author) => (
            <span
              key={author._id}
              id="badge-dismiss-default"
              className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded"
            >
              {author.name}, {author.designation}
              <button
                type="button"
                className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900"
                data-dismiss-target="#badge-dismiss-default"
                aria-label="Remove"
                onClick={() => removeAuthor(author)}
              >
                <svg
                  className="w-2 h-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Remove Author</span>
              </button>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
