import React from "react";

export default function CorporateLaw() {
    return (
        <>
            <div className="container-fluid py-sm-0 py-5 watermark">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="bg-light">
                                <img src="img/corporateLaw.png" className="img-fluid rounded img-thumbnail w-100" alt="Direct TAX" />
                            </div>
                        </div>
                        <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">

                            <h5 className="sub-title mb-4 pe-3">Corporate</h5>

                            {/* <h3 className="customs-heading mb-4">Corporate Law</h3> */}

                            <p>Our Corporate Law Practice at <strong>Lex Works</strong>, is committed to supporting businesses
                                through the complexities of corporate governance, compliance, and transactional matters. We
                                provide a full range of services.</p>

                            <p>Our experienced attorneys work closely with clients to develop tailored strategies that align
                                with their business goals while ensuring adherence to legal standards. We also assist in
                                drafting and negotiating contracts, safeguarding your interests in every transaction.</p>

                            <p className="mb-4">We believe in fostering long-term partnerships with our clients, providing the
                                expertise and guidance needed to navigate the ever-evolving corporate landscape successfully.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};