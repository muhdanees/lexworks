import { API_URL } from "astro:env/client";
import { useEffect, useState } from "react";

export default function Posts({ url }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`${API_URL}/posts/latest`);
    const json = await res.json();
    setData(json.posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data?.map((post) => (
        <a
          href={`/admin/dashboard/posts/${post.slug}`}
          key={post.slug}
          className="block mb-3 border border-gray-200 p-4 rounded-lg"
        >
          <span>{post.title}</span>
          <span className="block mt-1 text-sm text-gray-500">Updated: {new Date(post.updatedAt).toDateString()}</span>
        </a>
      ))}
    </div>
  );
}
