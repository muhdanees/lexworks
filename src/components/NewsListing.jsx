import React from "react";
import timeAgo from "../utils/timeago";
import { stripHtml } from "string-strip-html";

const Pagination = ({ totalPosts, limit, page = 1 }) => {
  const totalPages = Math.ceil(totalPosts / limit);
  const maxPagesToShow = 5; // Maximum number of page links to display
  const pageNumbers = [];

  if (totalPages <= maxPagesToShow) {
    pageNumbers.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
  } else {
    if (page <= 3) {
      pageNumbers.push(1, 2, 3, "...", totalPages);
    } else if (page >= totalPages - 2) {
      pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNumbers.push(1, "...", page - 1, page, page + 1, "...", totalPages);
    }
  }

  if (pageNumbers.length === 0) return null;

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-end">
        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
          <a className="page-link" href={`?page=${page - 1}`}>
            Previous
          </a>
        </li>
        {pageNumbers.map((num, index) => (
          <li
            key={index}
            className={`page-item ${page === num ? "active" : ""}`}
          >
            {num === "..." ? (
              <span className="page-link">...</span>
            ) : (
              <a className="page-link" href={`?page=${num}`}>
                {num}
              </a>
            )}
          </li>
        ))}
        <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
          <a className="page-link" href={`?page=${page + 1}`}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

function Tags({ jsonTagRes }) {
  return (
    <div>
      {jsonTagRes?.tags?.map((tag) => (
        <a href={`/tags/${tag.slug}`} key={tag._id} className="tags">
          #{tag.name}
        </a>
      ))}
    </div>
  );
}

export default function NewsListing({ data, page, jsonTagRes }) {
  return (
    <>
      <div className="container-fluid py-sm-0 py-5 watermark">
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-xl-8 listingRow wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <h5 className="sub-title mb-4 pe-3">Latest</h5>
              {data?.posts?.map((post) => (
                <a
                  href={`/posts/${post.slug}`}
                  className="card mb-3"
                  key={post._id}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="imageCover">
                        <img
                          src={post?.image || "/img/lexworks-default.png"}
                          className="img-fluid rounded-start"
                          alt={post.title}
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title headtingTruncate">
                          {post.title}
                        </h5>
                        <p className="card-text multiText-truncate">
                          {stripHtml(post.content).result?.slice(0, 200)}
                        </p>
                        <p className="card-text">
                          <small className="text-dark">
                            {/* {timeAgo(new Date(post.createdAt))} */}
                            Uploaded on{" "}
                            {new Date(post.createdAt).toDateString()}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}

              {data?.posts.length === 0 ? <p>No Latest Posts!</p> : null}
              <Pagination
                totalPosts={data.total}
                limit={data.limit}
                page={page}
              />
            </div>

            <div className="col-xl-4 wow fadeInRight" data-wow-delay="0.3s">
              <h5 className="sub-title mb-4 pe-3">Tags</h5>
              <Tags jsonTagRes={jsonTagRes} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
