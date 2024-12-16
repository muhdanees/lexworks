import React, { useEffect } from "react";

export default function CarouselSlider() {
  return (
    <>
      <div class="carousel-header">
        <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
          <ol class="carousel-indicators">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="0"
              class="active"
            ></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="3"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="4"></li>
          </ol>

          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img src="/carousel-1.png" class="img-fluid" alt="Image" />
              {/* <div class="carousel-caption">
              <div class="text-center p-4" style="max-width: 900px">
                <h4
                  class="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Solution For All Type Of Cases
                </h4>
                <h1
                  class="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  Legal Process Starts Here!
                </h1>
                <p
                  class="text-white mb-4 mb-md-5 fs-5 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <a
                  class="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp"
                  data-wow-delay="0.7s"
                  href="#"
                  >More Details</a
                >
              </div>
            </div> */}
            </div>

            <div class="carousel-item">
              <img src="/carousel-2.png" class="img-fluid" alt="Image" />
            </div>
            <div class="carousel-item">
              <img src="/carousel-3.png" class="img-fluid" alt="Image" />
            </div>
            <div class="carousel-item">
              <img src="/carousel-4.png" class="img-fluid" alt="Image" />
            </div>
            <div class="carousel-item">
              <img src="/carousel-5.png" class="img-fluid" alt="Image" />
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg-secondary wow fadeInLeft"
              data-wow-delay="0.2s"
              aria-hidden="false"
            ></span>
            <span class="visually-hidden-focusable">Previous</span>
          </button>

          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bg-secondary wow fadeInRight"
              data-wow-delay="0.2s"
              aria-hidden="false"
            ></span>
            <span class="visually-hidden-focusable">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
