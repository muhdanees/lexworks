import { API_URL } from "astro:env/client";
import { useEffect, useState } from "react";
import LoadingIcon from "./icons/LoadingIcon";
import { TrashIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

export default function Posts({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [nextKey, setNextKey] = useState(null);
  const limits = 10;

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(`${API_URL}/posts/latest?limits=${limits}`);
    const json = await res.json();
    setData(json.posts);
    setNextKey(json.nextKey);
    setLoading(false);
  };

  const getMore = async () => {
    setLoadingMore(true);
    const res = await fetch(
      `${API_URL}/posts/latest?limits=${limits}&nextKey=${nextKey}`
    );
    const json = await res.json();
    setData([...data, ...json.posts]);
    setNextKey(json.nextKey);
    setLoadingMore(false);
  };

  const deletePost = async (post) => {
    const res = await fetch(`${API_URL}/posts/${post.postId}/${post.slug}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!res.ok) {
      toast.error("Unable to delete Post!");
      throw new Error("Unable to delete Post!");
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
        {nextKey ? (
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
