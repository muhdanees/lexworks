import React from "react";

export default function CyberLaw() {
    return (
        <>
            <div className="container-fluid py-sm-0 py-5 watermark">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="bg-light">
                                <img src="img/cyberLaw.png" className="img-fluid rounded img-thumbnail w-100" alt="Direct TAX" />
                            </div>
                        </div>
                        <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">

                            <h5 className="sub-title mb-4 pe-3">Cyber</h5>

                            {/* <h3 className="customs-heading mb-4">Cyber Law</h3> */}

                            <p>Our Cyber Law Practice at <strong>Lex Works</strong>, ocuses on the legal challenges and
                                opportunities presented by the digital landscape. We provide comprehensive services related to
                                data protection, privacy compliance, cyber security, and e-commerce regulations.</p>

                            <p>Our experienced attorneys assist clients in navigating complex legal frameworks surrounding
                                technology and digital transactions, offering guidance on compliance with data protection laws
                                and regulations. We also represent clients in disputes related to cybercrime, data breaches, and
                                intellectual property in the digital realm.</p>

                            <p className="mb-4">We are committed to staying ahead of the rapidly evolving cyber landscape, ensuring
                                that our clients have the support and insights needed to thrive in a digital world.</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};