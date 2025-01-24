import React from "react";

export default function About() {
  return (
    <>
      <div className="container-fluid py-sm-0 py-5 watermark">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="bg-light">
                <img
                  src="img/aboutCompany.png"
                  className="img-fluid rounded img-thumbnail w-100"
                  alt="Direct TAX"
                />
              </div>
            </div>
            <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
              <h5 className="sub-title mb-2 pe-3">About Our Firm</h5>
              <h2 className="display-6 mb-4">
                Charting The Course Of Justice Through Collaborative Spirit.
              </h2>
              <p className="mb-4">
                At Lex Works, we provide nationwide legal solutions, inspired by
                a commitment to resolve your legal and technical challenges. Our
                record of landmark judgments showcases our ability to deliver
                prompt and effective outcomes. With a focus on ethics and client
                satisfaction, we are dedicated to guiding you through your legal
                journey...
                <div style={{ position: "relative" }}>
                  <a
                    className="btn btn-primary mt-1 border-secondary rounded-pill"
                    href="/aboutus"
                    style={{ lineHeight: "12px", position: "absolute", whiteSpace: "nowrap", top: "0", left: "0" }}
                  >
                    Read More
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
