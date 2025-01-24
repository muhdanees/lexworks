import React from "react";
import { tags } from "../utils/tags";

export default function NewsDetail({ data }) {
  console.log("data", data);
  return (
    <>
      <div className="container-fluid py-sm-0 py-5 watermark">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-8 wow fadeInLeft" data-wow-delay="0.1s">
              <h5 className="sub-title mb-4 pe-3">Update Details</h5>

              <h2 className="customs-heading">{data.title}</h2>
              <div className="stripes mb-3">
                <span className="authorText">
                  <strong>Author:</strong> {data.authorId}
                </span>
                <span className="authorText">
                  <strong>Updated on:</strong>{" "}
                  {new Date(data?.updatedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>
                  <strong>Tags:</strong>{" "}
                  {data?.categories?.map((category) => (
                    <a key={category} href={`/tags/${category}`}>
                      #{category?.[0].toUpperCase()}
                      {category.slice(1)}
                    </a>
                  ))}
                </span>
              </div>
              <div
                className="nesDetails"
                dangerouslySetInnerHTML={{
                  __html: data?.content?.replace(/style="[^"]*"/g, ""),
                }}
              ></div>
            </div>
            <div className="col-xl-4 wow fadeInRight" data-wow-delay="0.3s">
              <h5 className="sub-title mb-4 pe-3">Related</h5>

              {/* <h3 className="customs-heading mb-4">Related to your Interest</h3> */}

              {/* <p>
                At <strong>Lex Works</strong>, we recognize that navigating the
                complexities of customs law is crucial for businesses engaged in
                international trade. Our Customs Advisory and Litigation team
                combines wealth of experience to offer strategic insights and
                comprehensive support tailored to your specific needs.
              </p> */}
              {data?.relatedArticles?.map((relatedArticle) => (
                <div className="card mb-3" key={relatedArticle.postId}>
                  <div className="card-body">
                    <h5 className="card-title multiText-truncate">
                      {relatedArticle.title}
                    </h5>
                    {/* <h6 className="card-subtitle mb-2 text-white">{relatedArticle.title}</h6> */}
                    <p className="card-text multiText-truncate">
                      {relatedArticle.content}
                    </p>
                    <a
                      href={`/posts/${relatedArticle.slug}`}
                      className="card-link"
                    >
                      Read More
                    </a>
                    {/* <a href="#" className="card-link">
                    Another link
                  </a> */}
                  </div>
                </div>
              ))}
              <div className="">
                {/* {data?.categories?.map((category) => (
                  <a
                    key={category}
                    href={`/tags/${category}`}
                    className="tags"
                  >
                    #{category?.[0].toUpperCase()}
                    {category.slice(1)}
                  </a>
                ))} */}
                {tags.map((tag) => (
                  <a href={`/tags/${tag.toLowerCase()}`} className="tags">
                    #{tag}
                  </a>
                ))}
              </div>
              {/* <div className="">
                {tags.map((tag) => (
                  <a
                    href={`/tags/${tag.toLowerCase()}`}
                    className=""
                  >
                    #{tag}
                  </a>
                ))}
              </div> */}
              {/* <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
              <div className="card mb-3 bg-secondary">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-white">Card subtitle</h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
