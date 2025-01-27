import React from "react";

function Footer() {
  return (
    <>
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-secondary mb-4">Contact Info</h4>
                <div className="alignContent">
                  <i className="fa fa-map-marker-alt me-2"></i>
                  <a
                    href="https://maps.app.goo.gl/MP86TK5vVBeLUW4m6"
                    target="_blank"
                    className="contentLine hoverAnim"
                    style={{ width: "245px" }}
                  >
                    C-131, 1st Floor Lajpat Nagar<br />New Delhi - 110024
                  </a>
                </div>
                <div className="alignContent">
                  <i className="fas fa-envelope me-2"></i>
                  <a href="mailto:lexworkss@gmail.com" className="contentLine">
                    lexworkss@gmail.com
                  </a>
                </div>
                {/* <a href=""><i className="fas fa-phone me-2"></i> +012 345 67890</a> */}
                <a
                  href="https://api.whatsapp.com/send?phone=918826872049"
                  className="alignContent"
                >
                  <i className="fab fa-whatsapp me-2"></i>
                  <span className="contentLine">Connect</span>
                </a>
                <a href="tel:011-41540229" className="alignContent mb-3">
                  <i className="fas fa-phone-alt me-2"></i>
                  <span className="contentLine">011-41540229</span>
                </a>
                <div className="d-flex align-items-center">
                  <i className="fas fa-share fa-2x text-secondary me-2"></i>
                  <a className="btn mx-1 linkedInHover" href="#">
                    <i className="fab fa-2x fa-linkedin-in"></i>
                  </a>
                  <a className="btn mx-1 instagramHover" href="#">
                    <i className="fab fa-2x fa-instagram"></i>
                  </a>
                  {/* <a className="btn mx-1 youtubeHover" href="#"><i className="fab fa-2x fa-youtube"></i></a> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-2">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-secondary mb-4">Office Hours</h4>
                <div className="mb-3">
                  <h6 className="text-muted mb-0">Monday - Friday:</h6>
                  <p className="text-white mb-0">10.00 am to 07.00 pm</p>
                </div>
                <div className="mb-3">
                  <h6 className="text-muted mb-0">WeekEnds:</h6>
                  <p className="text-white mb-0">12.00 pm to 05.00 pm</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-secondary mb-4">Proficiencies</h4>
                <div className="alignContent">
                  <i className="fas fa-angle-right me-2"></i>
                  <span className="contentLine">
                    Litigation &amp; Dispute Redressals
                  </span>
                </div>
                <div className="alignContent">
                  <i className="fas fa-angle-right me-2"></i>
                  <span className="contentLine">
                    Offering Business Formation, (Compliance &amp; Contracts)
                  </span>
                </div>
                <div className="alignContent">
                  <i className="fas fa-angle-right me-2"></i>
                  <span className="contentLine">
                    Resolution Facilities &amp; ADR
                  </span>
                </div>
                <div className="alignContent">
                  <i className="fas fa-angle-right me-2"></i>
                  <span className="contentLine">Tax Laws &amp; Compliance</span>
                </div>
                <div className="alignContent">
                  <i className="fas fa-angle-right me-2"></i>
                  <span className="contentLine">Brand Protection (IPR)</span>
                </div>
                {/* <a href="#" className=""><i className="fas fa-angle-right me-2"></i> Work / Career</a> */}
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item">
                <h4 className="text-secondary mb-4">Legal Updates</h4>
                <p className="text-white mb-3">
                  <span className="contentLine">
                    Sign up to receive legal alerts on regulations and
                    compliance for businesses.
                  </span>
                </p>
                <div className="position-relative mx-auto rounded-pill">
                  <input
                    className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-primary">
                <a
                  href="https://lexworks.co.in/"
                  className="border-bottom text-primary"
                >
                  <i className="fas fa-copyright me-2"></i>www.lexworks.co.in
                </a>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-primary">
              Developed by Lex Works.
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=918826872049"
        className="whatsapp"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="whatsapp"
          className="svg-inline--fa fa-whatsapp fa-w-14 "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
          ></path>
        </svg>
      </a>

      {/* Back to Top */}
      <a href="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
}

export default Footer;
