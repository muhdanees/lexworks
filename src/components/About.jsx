import React from "react";

export default function About() {
  return (
    <>
      <div class="container-fluid py-sm-0 py-5 watermark">
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
              <div class="bg-light">
                <img
                  src="img/aboutCompany.png"
                  class="img-fluid rounded img-thumbnail w-100"
                  alt="Direct TAX"
                />
              </div>
            </div>
            <div class="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
              <h5 class="sub-title pe-3">About Our Firm</h5>
              <h2 class="display-6 mb-4">
                Charting The Course Of Justice Through Collaborative Spirit.
              </h2>
              <p class="mb-4">
                At Lex Works, we provide nationwide legal solutions, inspired by
                a commitment to resolve your legal and technical challenges. Our
                record of landmark judgments showcases our ability to deliver
                prompt and effective outcomes. With a focus on ethics and client
                satisfaction, we are dedicated to guiding you through your legal
                journey...
                <a
                  class="btn btn-primary border-secondary rounded-pill"
                  href="aboutus.html"
                  style="line-height: 12px;"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
