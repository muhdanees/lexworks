import { API_URL } from "astro:env/client";

export async function GET() {
  const siteUrl = "https://lexworks.co.in";
  const pages = import.meta.glob("../pages/**/*.astro", { eager: true });

  const urls = Object.keys(pages)
    .map((path) => {
      const urlPath = path
        .replace("../pages", "")
        .replace(".astro", "")
        .replace(".", "");
      return `${siteUrl}${urlPath === "/index" ? "/" : urlPath}`;
    })
    .filter((path) => !path.includes("admin") || !path.includes("posts"));

  const res = await fetch(`${API_URL}/posts/latest-slugs`).then((res) =>
    res.json()
  );

  const posts = res.posts.map(
    (post: { slug: string }) => `${siteUrl}/posts/${post.slug}`
  );

  const date = `${new Date().getFullYear()}-${`0${
    new Date().getMonth() + 1
  }`.slice(0, 2)}-${`0${new Date().getDate()}`.slice(0, 2)}`;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) =>
            `<url><loc>${url}</loc><lastmod>${date}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`
        )
        .join("")}
      ${posts
        .map(
          (url: string) =>
            `<url><loc>${url}</loc><lastmod>${date}</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>`
        )
        .join("")}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
