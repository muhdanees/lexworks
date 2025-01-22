import React from "react";

export default function OurTeam({ page }) {
  return (
    <>
      <div className="container-fluid country overflow-hidden py-5 watermark">
        <div className="container">
          <div
            className="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style mb-2">
              <h5 className="sub-title text-primary px-3">{page}</h5>
            </div>
            <h1 className="display-5 mb-4">
              "A Collective Force for Justice." Meet Your Legal Team
            </h1>
          </div>
          <div className="row g-4 text-center mb-5">
            <div
              className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="country-item">
                <div className="rounded overflow-hidden">
                  <img
                    src="img/akhil-krishnan-maggu.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="country-flag">
                  <img
                    src="img/hammer.png"
                    className="img-fluid rounded-circle"
                    alt="Image"
                  />
                </div>
                <div className="country-name">
                  <a href="akhil-krishan-maggu" className="text-white fs-4">
                    Akhil Krishan Maggu
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="country-item">
                <div className="rounded overflow-hidden">
                  <img
                    src="img/vikas-sareen.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="country-flag">
                  <img
                    src="img/hammer.png"
                    className="img-fluid rounded-circle"
                    alt="Image"
                  />
                </div>
                <div className="country-name">
                  <a href="vikas-sareen" className="text-white fs-4">
                    Vikas Sareen
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="country-item">
                <div className="rounded overflow-hidden">
                  <img
                    src="img/ayush-mittal.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="country-flag">
                  <img
                    src="img/hammer.png"
                    className="img-fluid rounded-circle"
                    alt="Image"
                  />
                </div>
                <div className="country-name">
                  <a href="ayush-mittal" className="text-white fs-4">
                    Ayush Mittal
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="country-item">
                <div className="rounded overflow-hidden">
                  <img
                    src="img/maninder-kaur.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="country-flag">
                  <img
                    src="img/hammer.png"
                    className="img-fluid rounded-circle"
                    alt="Image"
                  />
                </div>
                <div className="country-name">
                  <a href="maninder-kaur" className="text-white fs-4">
                    Maninder Kaur
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <a
                className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp"
                data-wow-delay="0.1s"
                href="/ourteam"
              >
                More Team
              </a>
            </div>
          </div>

          <div
            className="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style mb-2">
              <h5 className="sub-title text-primary px-3">{page}</h5>
            </div>
          </div>

          <div className="row g-4 text-center justify-content-center">
            <div
              className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="country-item">
                <div className="rounded overflow-hidden">
                  <img
                    src="img/ms-oshin-maggu.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="country-flag">
                  <img
                    src="img/hammer.png"
                    className="img-fluid rounded-circle"
                    alt="Image"
                  />
                </div>
                <div className="country-name">
                  <a href="ms-oshin-maggu" className="text-white fs-4">
                    Ms. Oshin Maggu
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="country-item">
                <div className="rounded overflow-hidden">
                  <img
                    src="img/blank-men.png"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="country-flag">
                  <img
                    src="img/hammer.png"
                    className="img-fluid rounded-circle"
                    alt="Image"
                  />
                </div>
                <div className="country-name">
                  <a href="ms-shivanjali" className="text-white fs-4">
                    Ms. Shivanjali
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
