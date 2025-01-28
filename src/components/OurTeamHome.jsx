import React from "react";
import { image_path } from "../utils/images";

export default function OurTeam({ page, showSubtitle = false }) {
  return (
    <>
      <div className="container-fluid country overflow-hidden py-5 watermark">
        <div className="container">
          <div
            className="section-title text-center our-team-header wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style mb-2">
              <h5 className="sub-title text-primary px-3">
                Meet Your Legal Team
              </h5>
            </div>
            {showSubtitle && (
              <h1 className="display-5 mb-4">
                "A Collective Force for Justice."
              </h1>
            )}
          </div>
          <div className="row g-4 text-center mb-5">
            <div
              className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="country-item">
                <div className="rounded overflow-hidden">
                  <picture>
                    <source
                      srcSet={`${image_path}/akhil-krishnan-maggu.jxl`}
                      type="image/jxl"
                    />
                    <source
                      srcSet={`${image_path}/akhil-krishnan-maggu.avif`}
                      type="image/avif"
                    />
                    <source
                      srcSet={`${image_path}/akhil-krishnan-maggu.webp`}
                      type="image/webp"
                    />
                    <img
                      className="img-fluid w-100 rounded"
                      decoding="async"
                      loading="lazy"
                      src={`${image_path}/akhil-krishnan-maggu.jpg`}
                      alt=""
                    />
                  </picture>
                </div>
                <div className="country-flag">
                  <picture>
                    <source
                      srcSet={`${image_path}/hammer.jxl`}
                      type="image/jxl"
                    />
                    <source
                      srcSet={`${image_path}/hammer.avif`}
                      type="image/avif"
                    />
                    <source
                      srcSet={`${image_path}/hammer.webp`}
                      type="image/webp"
                    />
                    <img
                      className="img-fluid rounded-circle"
                      decoding="async"
                      loading="lazy"
                      src={`${image_path}/hammer.png`}
                      alt=""
                    />
                  </picture>
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
                  <picture>
                    <source
                      srcSet={`${image_path}/vikas-sareen.jxl`}
                      type="image/jxl"
                    />
                    <source
                      srcSet={`${image_path}/vikas-sareen.avif`}
                      type="image/avif"
                    />
                    <source
                      srcSet={`${image_path}/vikas-sareen.webp`}
                      type="image/webp"
                    />
                    <img
                      className="img-fluid w-100 rounded"
                      decoding="async"
                      loading="lazy"
                      src={`${image_path}/vikas-sareen.jpg`}
                      alt=""
                    />
                  </picture>
                </div>
                <div className="country-flag">
                  <picture>
                    <source
                      srcSet={`${image_path}/hammer.jxl`}
                      type="image/jxl"
                    />
                    <source
                      srcSet={`${image_path}/hammer.avif`}
                      type="image/avif"
                    />
                    <source
                      srcSet={`${image_path}/hammer.webp`}
                      type="image/webp"
                    />
                    <img
                      className="img-fluid rounded-circle"
                      decoding="async"
                      loading="lazy"
                      src={`${image_path}/hammer.png`}
                      alt=""
                    />
                  </picture>
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
                  <picture>
                    <source
                      srcSet={`${image_path}/ayush-mittal.jxl`}
                      type="image/jxl"
                    />
                    <source
                      srcSet={`${image_path}/ayush-mittal.avif`}
                      type="image/avif"
                    />
                    <source
                      srcSet={`${image_path}/ayush-mittal.webp`}
                      type="image/webp"
                    />
                    <img
                      className="img-fluid w-100 rounded"
                      decoding="async"
                      loading="lazy"
                      src={`${image_path}/ayush-mittal.jpg`}
                      alt=""
                    />
                  </picture>
                </div>
                <div className="country-flag">
                  <picture>
                    <source
                      srcSet={`${image_path}/hammer.jxl`}
                      type="image/jxl"
                    />
                    <source
                      srcSet={`${image_path}/hammer.avif`}
                      type="image/avif"
                    />
                    <source
                      srcSet={`${image_path}/hammer.webp`}
                      type="image/webp"
                    />
                    <img
                      className="img-fluid rounded-circle"
                      decoding="async"
                      loading="lazy"
                      src={`${image_path}/hammer.png`}
                      alt=""
                    />
                  </picture>
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
                  <picture>
                    <source
                      srcSet={`${image_path}/maninder-kaur.jxl`}
                      type="image/jxl"
                    />
                    <source
                      srcSet={`${image_path}/maninder-kaur.avif`}
                      type="image/avif"
                    />
                    <source
                      srcSet={`${image_path}/maninder-kaur.webp`}
                      type="image/webp"
                    />
                    <img
                      className="img-fluid w-100 rounded"
                      decoding="async"
                      loading="lazy"
                      src={`${image_path}/maninder-kaur.jpg`}
                      alt=""
                    />
                  </picture>
                </div>
                <div className="country-flag">
                  <picture>
                    <source
                      srcSet={`${image_path}/hammer.jxl`}
                      type="image/jxl"
                    />
                    <source
                      srcSet={`${image_path}/hammer.avif`}
                      type="image/avif"
                    />
                    <source
                      srcSet={`${image_path}/hammer.webp`}
                      type="image/webp"
                    />
                    <img
                      className="img-fluid rounded-circle"
                      decoding="async"
                      loading="lazy"
                      src={`${image_path}/hammer.png`}
                      alt=""
                    />
                  </picture>
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
        </div>
      </div>
    </>
  );
}
