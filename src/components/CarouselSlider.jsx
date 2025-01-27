import React, { useEffect } from "react";
import { image_path } from "../utils/images";

export default function CarouselSlider() {
  return (
    <>
      <div className="carousel-header">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="3"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="4"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <picture>
                <source srcSet={`${image_path}/carousels/carousel-1.jxl`} type="image/jxl" />
                <source srcSet={`${image_path}/carousels/carousel-1.avif`} type="image/avif" />
                <source srcSet={`${image_path}/carousels/carousel-1.webp`} type="image/webp" />
                <img className="img-fluid" decoding="async" loading="lazy" src={`${image_path}/carousels/carousel-1.png`} alt="" />
              </picture>
              {/* <div className="carousel-caption">
              <div className="text-center p-4" style="max-width: 900px">
                <h4
                  className="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Solution For All Type Of Cases
                </h4>
                <h1
                  className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  Legal Process Starts Here!
                </h1>
                <p
                  className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <a
                  className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp"
                  data-wow-delay="0.7s"
                  href="#"
                  >More Details</a
                >
              </div>
            </div> */}
            </div>

            <div className="carousel-item">
              {/* <img src="/carousel-2.png" className="img-fluid" alt="Image" /> */}
              <picture>
                <source srcSet={`${image_path}/carousels/carousel-2.jxl`} type="image/jxl" />
                <source srcSet={`${image_path}/carousels/carousel-2.avif`} type="image/avif" />
                <source srcSet={`${image_path}/carousels/carousel-2.webp`} type="image/webp" />
                <img className="img-fluid" decoding="async" loading="lazy" src={`${image_path}/carousels/carousel-2.png`} alt="" />
              </picture>
            </div>
            <div className="carousel-item">
              {/* <img src="/carousel-3.png" className="img-fluid" alt="Image" /> */}
              <picture>
                <source srcSet={`${image_path}/carousels/carousel-3.jxl`} type="image/jxl" />
                <source srcSet={`${image_path}/carousels/carousel-3.avif`} type="image/avif" />
                <source srcSet={`${image_path}/carousels/carousel-3.webp`} type="image/webp" />
                <img className="img-fluid" decoding="async" loading="lazy" src={`${image_path}/carousels/carousel-3.png`} alt="" />
              </picture>
            </div>
            <div className="carousel-item">
              {/* <img src="/carousel-4.png" className="img-fluid" alt="Image" /> */}
              <picture>
                <source srcSet={`${image_path}/carousels/carousel-4.jxl`} type="image/jxl" />
                <source srcSet={`${image_path}/carousels/carousel-4.avif`} type="image/avif" />
                <source srcSet={`${image_path}/carousels/carousel-4.webp`} type="image/webp" />
                <img className="img-fluid" decoding="async" loading="lazy" src={`${image_path}/carousels/carousel-4.png`} alt="" />
              </picture>
            </div>
            <div className="carousel-item">
              {/* <img src="/carousel-5.png" className="img-fluid" alt="Image" /> */}
              <picture>
                <source srcSet={`${image_path}/carousels/carousel-5.jxl`} type="image/jxl" />
                <source srcSet={`${image_path}/carousels/carousel-5.avif`} type="image/avif" />
                <source srcSet={`${image_path}/carousels/carousel-5.webp`} type="image/webp" />
                <img className="img-fluid" decoding="async" loading="lazy" src={`${image_path}/carousels/carousel-5.png`} alt="" />
              </picture>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-secondary wow fadeInLeft"
              data-wow-delay="0.2s"
              aria-hidden="false"
            ></span>
            <span className="visually-hidden-focusable">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-secondary wow fadeInRight"
              data-wow-delay="0.2s"
              aria-hidden="false"
            ></span>
            <span className="visually-hidden-focusable">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
