import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { tags } from "../../utils/tags";

export default function Tags({ API_URL }) {
  const [tag, setTag] = useState("");
  // const [tags, setTags] = useState([]);

  const onCreate = async () => {
    const res = await fetch(`${API_URL}/tags`, {
      method: "POST",
      body: JSON.stringify({ tag }),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!res.ok) {
      toast.error("Error to create tag!");
      throw new Error("Error to create tag!");
    }

    getAllTags();
  };

  const getAllTags = async () => {
    const res = await fetch(`${API_URL}/tags`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
    setTags(res.tags);
  };

  const removeTag = async (activeTag) => {
    const res = await fetch(`${API_URL}/tags`, {
      method: "DELETE",
      body: JSON.stringify({ tag: activeTag }),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!res.ok) {
      toast.error("Error to delete tag!");
      throw new Error("Error to delete tag!");
    }

    getAllTags();
  }

  useEffect(() => {
    // getAllTags();
  }, []);

  return (
    <section>
      <div className="mt-10">
        <div className="">
          <label
            htmlFor="tag"
            className="block text-sm/6 font-medium text-gray-900 mb-2"
          >
            Tags
          </label>
          <div className="hidden w-full gap-4">
            <div className="flex-1">
              <input
                type="text"
                name="tag"
                id="tag"
                value={tag}
                onChange={(e) => {
                  setTag(e.target.value);
                }}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>

            <button
              onClick={onCreate}
              disabled={tag.length === 0}
              className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Tag
            </button>
          </div>
        </div>
        <div className="mt-4">
          {tags.map((currentTag) => (
            <span
              key={currentTag}
              id="badge-dismiss-default"
              className="inline-flex items-center px-2 py-1 me-2 mb-2 text-sm font-medium text-blue-800 bg-blue-100 rounded"
            >
              {currentTag}
              <button
                type="button"
                className="hidden items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900"
                data-dismiss-target="#badge-dismiss-default"
                aria-label="Remove"
                onClick={() => removeTag(currentTag)}
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
                <span className="sr-only">Remove Tag</span>
              </button>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
