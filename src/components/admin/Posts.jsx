import { API_URL } from "astro:env/client";
import { useEffect, useState } from "react";
import LoadingIcon from "./icons/LoadingIcon";
import { TrashIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import axios from "axios";

export default function Posts({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [nextPage, setNextPage] = useState(1);
  const limits = 10;

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(`${API_URL}/posts/latest?limit=${limits}`);
    const json = await res.json();
    setData(json.posts);
    const hasPage = json.page < json.totalPages;
    setNextPage(hasPage ? json.page + 1 : 1);
    setLoading(false);
  };

  const getMore = async () => {
    setLoadingMore(true);
    const res = await fetch(
      `${API_URL}/posts/latest?limit=${limits}&page=${nextPage}`
    );
    const json = await res.json();
    setData([...data, ...json.posts]);
    const hasPage = json.page < json.totalPages;
    setNextPage(hasPage ? json.page + 1 : 1);
    setLoadingMore(false);
  };

  const deletePost = async (post) => {
    try {
      await axios.request({
        url: `${API_URL}/posts/`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          _id: post._id
        }
      })
    } catch (error) {
      toast.error("Unable to delete Post!");
      console.error(error);
    }
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-center">
          <LoadingIcon className="inline w-4 h-4 text-black animate-spin" />
        </div>
      ) : null}
      {data?.map((post) => (
        <div
          key={post.slug}
          className="flex group mb-3 border border-gray-200 p-4 rounded-lg"
        >
          <a
            href={`/admin/dashboard/posts/${post.slug}`}
            className="block flex-1"
          >
            <span>{post.title}</span>
            <span className="block mt-1 text-sm text-gray-500">
              Updated: {new Date(post.createdAt).toDateString()}
            </span>
          </a>
          <div className="flex justify-center items-center">
            <div>
              <button className="px-2" onClick={() => deletePost(post)}>
                <TrashIcon className="size-4 text-red-500" />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="text-center">
        {nextPage > 1 ? (
          <button
            onClick={getMore}
            disabled={loadingMore}
            className="px-10 py-2 text-sm inline-flex gap-2 items-center justify-center font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            {loadingMore ? (
              <>
                <LoadingIcon className="inline w-4 h-4 text-white animate-spin" />
                Loading...
              </>
            ) : (
              "Load More"
            )}
          </button>
        ) : null}
      </div>
    </div>
  );
}
