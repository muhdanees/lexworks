import React from "react";
import timeAgo from "../utils/timeago";

export default function NewsListing({ data }) {
  return (
    <>
      <div className="container-fluid py-sm-0 py-5 watermark">
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-xl-8 listingRow wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <h5 className="sub-title mb-4 pe-3">Legal Updates</h5>

              <h3 className="customs-heading mb-4">
                Customs Advisory and Litigation
              </h3>

              <p>
                At <strong>Lex Works</strong>, we recognize that navigating the
                complexities of customs law is crucial for businesses engaged in
                international trade. Our Customs Advisory and Litigation team
                combines wealth of experience to offer strategic insights and
                comprehensive support tailored to your specific needs.
              </p>
              {data.map((post) => (
                <a
                  href={`/posts/${post.slug}`}
                  className="card mb-3"
                  key={post.postId}
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
                          {post.content}
                        </p>
                        <p className="card-text">
                          <small className="text-dark">
                            {timeAgo(new Date(post.updatedAt))}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
              {/* <a href="/news-detail" className="card bg-white mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src="img/ipr.png"
                                            className="img-fluid rounded-start"
                                            alt="Foreign secretary"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Foreign secretary Vikram Misri to visit
                                            </h5>
                                            <p className="card-text">
                                                At Lex Works, we recognize that navigating the complexities of customs law is crucial for businesses engaged in international trade. Our Customs Advisory and Litigation team combines wealth of experience to offer strategic insights and comprehensive support tailored to your specific needs.
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Last updated 3 mins ago
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="/news-detail" className="card bg-light mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src="img/ipr.png"
                                            className="img-fluid rounded-start"
                                            alt="Foreign secretary"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Foreign secretary Vikram Misri to visit
                                            </h5>
                                            <p className="card-text">
                                                At Lex Works, we recognize that navigating the complexities of customs law is crucial for businesses engaged in international trade. Our Customs Advisory and Litigation team combines wealth of experience to offer strategic insights and comprehensive support tailored to your specific needs.
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Last updated 3 mins ago
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="/news-detail" className="card bg-secondary mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src="img/ipr.png"
                                            className="img-fluid rounded-start"
                                            alt="Foreign secretary"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Foreign secretary Vikram Misri to visit
                                            </h5>
                                            <p className="card-text">
                                                At Lex Works, we recognize that navigating the complexities of customs law is crucial for businesses engaged in international trade. Our Customs Advisory and Litigation team combines wealth of experience to offer strategic insights and comprehensive support tailored to your specific needs.
                                            </p>
                                            <p className="card-text">
                                                <small className="text-white">
                                                    Last updated 3 mins ago
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="/news-detail" className="card bg-white mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src="img/ipr.png"
                                            className="img-fluid rounded-start"
                                            alt="Foreign secretary"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Foreign secretary Vikram Misri to visit
                                            </h5>
                                            <p className="card-text">
                                                At Lex Works, we recognize that navigating the complexities of customs law is crucial for businesses engaged in international trade. Our Customs Advisory and Litigation team combines wealth of experience to offer strategic insights and comprehensive support tailored to your specific needs.
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Last updated 3 mins ago
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="/news-detail" className="card bg-light mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src="img/ipr.png"
                                            className="img-fluid rounded-start"
                                            alt="Foreign secretary"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Foreign secretary Vikram Misri to visit
                                            </h5>
                                            <p className="card-text">
                                                At Lex Works, we recognize that navigating the complexities of customs law is crucial for businesses engaged in international trade. Our Customs Advisory and Litigation team combines wealth of experience to offer strategic insights and comprehensive support tailored to your specific needs.
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Last updated 3 mins ago
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a> */}

              {/* <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav> */}
            </div>

            <div className="col-xl-4 wow fadeInRight" data-wow-delay="0.3s">
              <h5 className="sub-title mb-4 pe-3">Customs</h5>

              <h3 className="customs-heading mb-4">
              Customs Advisory and Litigation
              </h3>

              <p>
                At <strong>Lex Works</strong>, we recognize that navigating the
                complexities of customs law is crucial for businesses engaged in
                international trade. Our Customs Advisory and Litigation team
                combines wealth of experience to offer strategic insights and
                comprehensive support tailored to your specific needs.
              </p>

              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Accordion Item #1
                    </button>
                  </h2>

                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">Data Item #1</div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">Data Item #2</div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">Data Item #3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
