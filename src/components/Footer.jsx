import React from "react";

function Footer() {
    return (
        <>
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-secondary mb-4">Contact Info</h4>
                                <div className="alignContent">
                                    <i className="fa fa-map-marker-alt me-2"></i>
                                    <a href="https://maps.app.goo.gl/MP86TK5vVBeLUW4m6" target="_blank" className="contentLine hoverAnim">C-131, 1st Floor Lajpat Nagar New Delhi - 110024</a>
                                </div>
                                <div className="alignContent">
                                    <i className="fas fa-envelope me-2"></i>
                                    <a href="mailto:lexworkss@gmail.com" className="contentLine">lexworkss@gmail.com</a>
                                </div>
                                {/* <a href=""><i className="fas fa-phone me-2"></i> +012 345 67890</a> */}
                                <a href="https://api.whatsapp.com/send?phone=918826872049" className="alignContent">
                                    <i className="fab fa-whatsapp me-2"></i>
                                    <span className="contentLine">+91 918826872049</span>
                                </a>
                                <a href="tel:011-41540229" className="alignContent mb-3">
                                    <i className="fas fa-phone-alt me-2"></i>
                                    <span className="contentLine">011-41540229</span>
                                </a>
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-share fa-2x text-secondary me-2"></i>
                                    <a className="btn mx-1 linkedInHover" href="#"><i className="fab fa-2x fa-linkedin-in"></i></a>
                                    <a className="btn mx-1 instagramHover" href="#"><i className="fab fa-2x fa-instagram"></i></a>
                                    <a className="btn mx-1 youtubeHover" href="#"><i className="fab fa-2x fa-youtube"></i></a>
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
                                    <span className="contentLine">Litigation &amp; dispute redressals</span>
                                </div>
                                <div className="alignContent">
                                    <i className="fas fa-angle-right me-2"></i>
                                    <span className="contentLine">Offering business formation, (compliance &amp; Contracts)</span>
                                </div>
                                <div className="alignContent">
                                    <i className="fas fa-angle-right me-2"></i>
                                    <span className="contentLine">Resolution facilities &amp; ADR</span>
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
                                <h4 className="text-secondary mb-4">Legal Updates for Business Owners</h4>
                                <p className="text-white mb-3">
                                    <span className="contentLine">Sign up to receive legal alerts on regulations and compliance for
                                        businesses.</span>
                                </p>
                                <div className="position-relative mx-auto rounded-pill">
                                    <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text"
                                        placeholder="Enter your email" />
                                    <button type="button"
                                        className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">SignUp</button>
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
                            <span className="text-primary"><a href="https://lexworks.co.in/" className="border-bottom text-primary"><i
                                className="fas fa-copyright me-2"></i>www.lexworks.co.in</a>, All right reserved.</span>
                        </div>
                        <div className="col-md-6 text-center text-md-end text-primary">
                            Designed & Develped By
                            <a className="border-bottom text-primary" href="https://muhdanees.github.io/codeplayer/">Mohd Anees</a>.
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top */}
            <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></a>

        </>
    );
}

export default Footer;