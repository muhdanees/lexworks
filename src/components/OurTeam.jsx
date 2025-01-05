import React from "react";

export default function OurTeam() {
    return (
        <>
            <div className="container-fluid country overflow-hidden py-5 watermark">
                <div className="container">
                    <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="sub-style">
                            <h5 className="sub-title text-primary px-3">Our Team</h5>
                        </div>
                        <h1 className="display-5 mb-4">
                            "A Collective Force for Justice." Meet Your Legal Team
                        </h1>
                        {/* <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque
                            sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam
                            necessitatibus saepe in ab? Repellat!</p> */}
                    </div>
                    <div className="row g-4 text-center">
                        <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="country-item">
                                <div className="rounded overflow-hidden">
                                    <img src="img/akhil-krishnan-maggu.png" className="img-fluid w-100 rounded" alt="Image" />
                                </div>
                                <div className="country-flag">
                                    <img src="img/hammer.png" className="img-fluid rounded-circle" alt="Image" />
                                </div>
                                <div className="country-name">
                                    <a href="akhil-krishan-maggu.html" className="text-white fs-4">Adv. Akhil Krishan Maggu</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="country-item">
                                <div className="rounded overflow-hidden">
                                    <img src="img/vikas-sareen.png" className="img-fluid w-100 rounded" alt="Image" />
                                </div>
                                <div className="country-flag">
                                    <img src="img/hammer.png" className="img-fluid rounded-circle" alt="Image" />
                                </div>
                                <div className="country-name">
                                    <a href="vikas-sareen.html" className="text-white fs-4">Vikas Sareen</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="country-item">
                                <div className="rounded overflow-hidden">
                                    <img src="img/ayush-mittal.png" className="img-fluid w-100 rounded" alt="Image" />
                                </div>
                                <div className="country-flag">
                                    <img src="img/hammer.png" className="img-fluid rounded-circle" alt="Image" />
                                </div>
                                <div className="country-name">
                                    <a href="ayush-mittal.html" className="text-white fs-4">AYUSH MITTAL</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="country-item">
                                <div className="rounded overflow-hidden">
                                    <img src="img/maninder-kaur.png" className="img-fluid w-100 rounded" alt="Image" />
                                </div>
                                <div className="country-flag">
                                    <img src="img/hammer.png" className="img-fluid rounded-circle" alt="Image" />
                                </div>
                                <div className="country-name">
                                    <a href="maninder-kaur.html" className="text-white fs-4">Maninder Kaur</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <a className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp" data-wow-delay="0.1s"
                                href="/ourteam">More Team</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
