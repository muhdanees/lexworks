import React from "react";

export default function OurTraning() {
    return (
        <>
            <div className="container-fluid training overflow-hidden bg-light py-5 watermarkGray">
                <div className="container py-5">
                    <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="sub-style">
                            <h5 className="sub-title text-primary px-3">CHECK OUR TRAINING</h5>
                        </div>
                        <h1 className="display-5 mb-4">
                            Get the Best Coacing Service Training with Our Travisa
                        </h1>
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                            deleniti amet at atque sequi quibusdam cumque itaque repudiandae
                            temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
                            saepe in ab? Repellat!
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6 col-lg-6 col-xl-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="training-item">
                                <div className="training-inner">
                                    <img src="img/internWithUs.png" className="img-fluid w-100 rounded" alt="Image" />
                                    <div className="training-title-name">
                                        <a href="#" className="h4 text-white mb-0">Intern with Us</a>
                                        {/* <a href="#" className="h4 text-white mb-0">Coaching</a> */}
                                    </div>
                                </div>
                                <div className="training-content bg-secondary rounded-bottom p-4">
                                    <a href="/contactus">
                                        <h4 className="text-white">Intern with Us</h4>
                                    </a>
                                    {/* <p className="text-white-50">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Autem, veritatis.
                                    </p> */}
                                    <a className="btn btn-secondary rounded-pill text-white p-0" href="/contactus">Read More <i
                                        className="fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-lg-6 col-xl-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="training-item">
                                <div className="training-inner">
                                    <img src="img/joinUs.png" className="img-fluid w-100 rounded" alt="Image" />
                                    <div className="training-title-name">
                                        <a href="#" className="h4 text-white mb-0">Join Us</a>
                                        {/* <a href="#" className="h4 text-white mb-0">Coaching</a> */}
                                    </div>
                                </div>
                                <div className="training-content bg-secondary rounded-bottom p-4">
                                    <a href="/contactus">
                                        <h4 className="text-white">Join Us</h4>
                                    </a>
                                    {/* <p className="text-white-50">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Autem, veritatis.
                                    </p> */}
                                    <a className="btn btn-secondary rounded-pill text-white p-0" href="/contactus">Read More <i
                                        className="fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-12 text-center">
                            <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s"
                                href="#">View More</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}