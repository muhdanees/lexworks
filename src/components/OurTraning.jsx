import React from "react";
import { image_path } from "../utils/images";

export default function OurTraning() {
    return (
        <>
            <div className="container-fluid training overflow-hidden bg-light py-5 watermarkGray">
                <div className="container py-5">
                    <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="sub-style">
                            <h5 className="sub-title text-primary px-3">Be a Part of Our Team</h5>
                        </div>
                        <h1 className="display-5 mb-4">Ready to make an impact? <br />Join our team and shape the future with us.</h1>
                        {/* <p className="mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                            deleniti amet at atque sequi quibusdam cumque itaque repudiandae
                            temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
                            saepe in ab? Repellat!
                        </p> */}
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6 col-lg-6 col-xl-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="training-item">
                                <div className="training-inner">
                                    <picture>
                                      <source srcSet={`${image_path}/internWithUs.jxl`} type="image/jxl" />
                                      <source srcSet={`${image_path}/internWithUs.avif`} type="image/avif" />
                                      <source srcSet={`${image_path}/internWithUs.webp`} type="image/webp" />
                                      <img className="img-fluid w-100 rounded" decoding="async" loading="lazy" src={`${image_path}/internWithUs.png`} alt="" />
                                    </picture>
                                    {/* <img src="img/internWithUs.png" className="img-fluid w-100 rounded" alt="Image" /> */}
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
                                    <a className="btn btn-secondary rounded-pill text-white p-0" href="/contactus">Reach Us <i
                                        className="fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-lg-6 col-xl-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="training-item">
                                <div className="training-inner">
                                    <picture>
                                      <source srcSet={`${image_path}/joinUs.jxl`} type="image/jxl" />
                                      <source srcSet={`${image_path}/joinUs.avif`} type="image/avif" />
                                      <source srcSet={`${image_path}/joinUs.webp`} type="image/webp" />
                                      <img className="img-fluid w-100 rounded" decoding="async" loading="lazy" src={`${image_path}/joinUs.png`} alt="" />
                                    </picture>
                                    {/* <img src="img/joinUs.png" className="img-fluid w-100 rounded" alt="Image" /> */}
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
                                    <a className="btn btn-secondary rounded-pill text-white p-0" href="/contactus">Reach Us <i
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