import React from "react";

export default function NewsDetail({ data }) {
  console.log("data", data);
  return (
    <>
      <div className="container-fluid py-sm-0 py-5 watermark">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-8 wow fadeInLeft" data-wow-delay="0.1s">
              <h5 className="sub-title mb-4 pe-3">Update Details</h5>

              <h2 className="customs-heading mb-4">{data.title}</h2>
              <div
                className="nesDetails"
                dangerouslySetInnerHTML={{
                  __html: data?.content.replace(/style="[^"]*"/g, ""),
                }}
              ></div>
              <div className="d-flex gap-2 title">
                {data?.categories?.map((category) => (
                  <div key={category} className="border py-1 px-3 rounded">
                    {category?.[0].toUpperCase()}
                    {category.slice(1)}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-4 wow fadeInRight" data-wow-delay="0.3s">
              <h5 className="sub-title mb-4 pe-3">Trending News</h5>

              <h3 className="customs-heading mb-4">Related to your Interest</h3>

              <p>
                At <strong>Lex Works</strong>, we recognize that navigating the
                complexities of customs law is crucial for businesses engaged in
                international trade. Our Customs Advisory and Litigation team
                combines wealth of experience to offer strategic insights and
                comprehensive support tailored to your specific needs.
              </p>

              <div class="card mb-3 bg-secondary">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-white">Card subtitle</h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="card-link">
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="card-link">
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a>
                </div>
              </div>
              <div class="card mb-3 bg-secondary">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-white">Card subtitle</h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="card-link">
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="card-link">
                    Card link
                  </a>
                  <a href="#" class="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
