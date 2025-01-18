import React from "react";

export default function ContactUs() {
    return (
        <>
            <div className="container-fluid contact overflow-hidden py-1">
                <div className="container py-5">
                    <div className="row g-5 mb-5">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="sub-style mb-4">
                                <h5 className="sub-title text-primary pe-3">Find Us</h5>
                            </div>
                            {/* <!-- <h1 className="display-5 mb-4">We all here to Navigate your legal needs.</h1> -->
                            <!-- <p className="mb-5">Please reach out to use with any quiesion or to schedule a Consultation.</p> --> */}
                            <div className="d-flex border-bottom mb-4 pb-4">
                                <i className="fas fa-map-marked-alt fa-2x text-primary bg-light p-3 rounded"></i>
                                <div className="ps-3">
                                    <h5>New Delhi</h5>
                                    <p>C-131, 1st Floor Lajpat Nagar - 110024</p>
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="col-xl-6">
                                    <div className="d-flex align-items-start">
                                        <div className="bg-light d-flex align-items-center justify-content-center rounded">
                                            <i className="fas fa-phone-alt fa-2x text-primary p-3"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h5 className="mb-3">Quick Contact</h5>
                                            <div className="mb-3">
                                                <h6 className="mb-0">Phone:</h6>
                                                <a href="tel:011-41540229" className="fs-5 text-primary">011-41540229</a>
                                            </div>
                                            <div className="mb-3">
                                                <h6 className="mb-0">Email:</h6>
                                                <a href="mailto:lexworkss@gmail.com"
                                                    className="fs-5 text-primary">lexworkss@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="d-flex align-items-start">
                                        <div className="bg-light d-flex align-items-center justify-content-center rounded">
                                            <i className="fas fa-clock fa-2x text-primary p-3"></i>
                                        </div>
                                        <div className="ps-3">
                                            <h5 className="mb-3">Office Hours</h5>
                                            <div className="mb-3">
                                                <h6 className="mb-0">Mon - Friday:</h6>
                                                <a href="#" className="fs-5 text-primary">10.00AM to 07.00PM</a>
                                            </div>
                                            <div className="mb-3">
                                                <h6 className="mb-0">WeekEnds:</h6>
                                                <a href="#" className="fs-5 text-primary">12.00PM to 05.00PM</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <div className="me-3">
                                    <div className="bg-light d-flex align-items-center justify-content-center rounded">
                                        <i className="fas fa-share fa-2x text-primary p-3"></i>
                                    </div>
                                </div>
                                <div className="d-flex gap-2">
                                    <a className="btn d-flex gap-2 me-1 p-0 linkedinColor" href="#">
                                        <span>LinkedIn</span>
                                        <i className="fab fa-linkedin fa-2x align-middle"></i>
                                    </a>
                                    <a className="btn d-flex gap-2 mx-1 p-0 instagramColor" href="#">
                                        <span>Instagram</span>
                                        <i className="fab fa-instagram-square fa-2x align-middle"></i>
                                    </a>
                                    <a className="btn d-flex gap-2 mx-1 p-0 whatsappColor" href="#">
                                        <span>Whatsapp</span>
                                        <i className="fab fa-whatsapp-square fa-2x align-middle"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3">
                            <div className="sub-style mb-4">
                                <h5 className="sub-title text-primary pe-3">Get in Touch</h5>
                            </div>
                            <p className="mb-3">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a className="text-primary fw-bold" href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <form>
                                <div className="row g-4">
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input type="phone" className="form-control" id="phone" placeholder="Phone" />
                                                <label for="phone">Your Phone Number</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="project" placeholder="Project" />
                                                <label for="project">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message"></textarea>
                                            <label for="message">Description</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                        <input type="file" className="form-control" id="uploads" placeholder="uploads" />
                                        <label for="uploads">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};