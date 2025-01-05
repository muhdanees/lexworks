import React from "react";

export default function AboutUs() {
    return (
        <>
            <div className="container-fluid py-sm-0 py-5 watermark">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="bg-light">
                                <img src="img/aboutCompany.png" className="img-fluid rounded img-thumbnail w-100" alt="Direct TAX" />
                                {/* <img src="img/about-3.jpg" className="img-fluid w-100 border-bottom border-5 border-primary" style="border-top-right-radius: 300px; border-top-left-radius: 300px;" alt="Image" /> */}
                            </div>
                        </div>
                        <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">

                            <h5 className="sub-title mb-4 pe-3">About Us</h5>
                            <h3 className="customs-heading mb-4">Your Trusted Legal Partner</h3>

                            <p className="mb-4">At <strong>Lex Works</strong> our foundation is built on the inspiration to resolve
                                legal and technical challenges for those in need. We are dedicated to being a source of support
                                and guidance for our clients. Our inspiration comes from a desire to assist those who need it
                                most by offering nationwide legal solutions and bringing our expertise to clients across India.
                            </p>

                            <h3 className="display-7 mb-2">Dedicated to Excellence</h3>
                            <p className="mb-4">We aim to provide the best possible outcomes for our clients' legal issues and we
                                offer a comprehensive one-stop solution that addresses your unique needs.</p>

                            <h3 className="display-7 mb-2">Remarkable Success</h3>
                            <p className="mb-4">We have earned numerous landmark judgments, showcasing our commitment to delivering
                                immediate solutions and taking prompt action on behalf of our clients. Our expertise ensures
                                that your legal matters are in capable hands.</p>

                            <h3 className="display-7 mb-2">Client-Centric Approach</h3>
                            <p className="mb-4">We offer exceptional legal consultation in various fields, with a steadfast
                                commitment to ethics. Our clients can trust us to deliver a level of satisfaction and
                                reliability that they can depend on throughout their legal journey.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
