import React from "react";
import timeAgo from "../utils/timeago";

export default function LatestNews({ posts }) {
  return (
    <>
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.1s">
              {posts?.slice(0, 2)?.map((post) => (
                <a
                  href={`/posts/${post?.slug}`}
                  className="card bg-white mb-3"
                  key={post.postId}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="imageCover">
                        <img
                          src={post?.image || "/img/lexworks-default.png"}
                          className="img-fluid rounded-start"
                          alt={post?.title}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title headtingTruncate">
                          {post?.title}...
                        </h5>
                        <p className="card-text multiText-truncate">
                          {post?.content}...
                        </p>
                        <p className="card-text bottomAlign">
                          <small className="text-muted">
                            {timeAgo(new Date(post.updatedAt))}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.3s">
              {posts?.slice(2)?.map((post) => (
                <a
                  href={`/posts/${post?.slug}`}
                  className="card bg-white mb-3"
                  key={post.postId}
                >
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="imageCover">
                        <img
                          src={post?.image || "/img/lexworks-default.png"}
                          className="img-fluid rounded-start"
                          alt={post?.title}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title  headtingTruncate">{post?.title}</h5>
                        <p className="card-text multiText-truncate">{post?.content}</p>
                        <p className="card-text bottomAlign">
                          <small className="text-muted">
                            {timeAgo(new Date(post.updatedAt))}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
