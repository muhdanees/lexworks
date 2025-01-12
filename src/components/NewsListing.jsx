import React from "react";
import timeAgo from "../utils/timeago";

export default function NewsListing({ data }) {
  console.log("data", data);
    return (
        <>
            <div className="container-fluid py-sm-0 py-5 watermark">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-8 wow fadeInLeft" data-wow-delay="0.1s">
                            <h5 className="sub-title mb-4 pe-3">Legal Updates</h5>

                            <h3 className="customs-heading mb-4">CUSTOMS ADVISORY AND LITIGATION</h3>

                            <p>At <strong>Lex Works</strong>, we recognize that navigating the complexities of customs law is
                                crucial for businesses engaged in international trade. Our Customs Advisory and Litigation team
                                combines wealth of experience to offer strategic insights and comprehensive support tailored to
                                your specific needs.
                            </p>
                            {data.map((post) => (
                            <a href={`/posts/${post.slug}`} className="card bg-secondary mb-3" key={post.postId}>
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
                                              {post.title}
                                            </h5>
                                            <p className="card-text">
                                                At Lex Works, we recognize that navigating the complexities of customs law is crucial for businesses engaged in international trade. Our Customs Advisory and Litigation team combines wealth of experience to offer strategic insights and comprehensive support tailored to your specific needs.
                                            </p>
                                            <p className="card-text">
                                                <small className="text-white">
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
                                <ul class="pagination justify-content-end">
                                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                </ul>
                            </nav> */}

                        </div>

                        
                        <div className="col-xl-4 wow fadeInRight" data-wow-delay="0.3s">

                            <h5 className="sub-title mb-4 pe-3">Customs</h5>

                            <h3 className="customs-heading mb-4">CUSTOMS ADVISORY AND LITIGATION</h3>

                            <p>At <strong>Lex Works</strong>, we recognize that navigating the complexities of customs law is
                                crucial for businesses engaged in international trade. Our Customs Advisory and Litigation team
                                combines wealth of experience to offer strategic insights and comprehensive support tailored to
                                your specific needs.
                            </p>

                            <div class="accordion accor-sticky-top" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div class="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}