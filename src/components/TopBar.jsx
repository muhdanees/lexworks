import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Topbar() {
  return (
    <>
      <div className="container-fluid bg-primary px-5 d-none d-lg-block">
        <div className="row gx-0 align-items-center">
          {/* Contact Information */}
          <div className="col-lg-6 text-center text-lg-start mb-lg-0">
            <div className="d-flex">
              <a href="mailto:lexworkss@gmail.com" className="text-muted me-4">
                <i className="fas fa-envelope text-secondary me-2"></i>
                lexworkss@gmail.com
              </a>
              <a href="tel:011-41540229" className="text-muted me-0">
                <i className="fas fa-phone-alt text-secondary me-2"></i>
                011-41540229
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="col-lg-6 text-center mb-2 mb-lg-0">
            <div
              className="d-flex align-items-center justify-content-end"
              style={{ height: "45px" }}
            >
              <a
                className="btn btn-sm btn-outline-light btn-square me-2 linkedInHover"
                href="#"
              >
                <i className="fab fa-linkedin-in fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-square me-2 instagramHover"
                href="#"
              >
                <i className="fab fa-instagram fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-square youtubeHover"
                href="#"
              >
                <i className="fab fa-youtube fw-normal"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}