import React from "react";

export default function FamilyLaw() {
    return (
        <>
            <div className="container-fluid py-sm-0 py-5 watermark">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="bg-light">
                                <img src="img/familyLaw.png" className="img-fluid rounded img-thumbnail w-100" alt="Direct TAX" />
                            </div>
                        </div>
                        <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">

                            <h5 className="sub-title mb-4 pe-3">Family</h5>

                            {/* <h3 className="customs-heading mb-4">Family Law</h3> */}

                            <p>Our Family Law Practice at <strong>Lex Works</strong>, is committed to providing compassionate
                                and skilled legal representation in sensitive family matters. We understand the complexities of
                                family law issues, including divorce, child custody, adoption, and property division.</p>

                            <p>Our experienced attorneys offer personalized guidance through every stage of the process,
                                ensuring that your rights and interests are protected. We strive to reach amicable resolutions
                                whenever possible, but are prepared to advocate fiercely for you in court if necessary.</p>

                            <p className="mb-4">We believe in fostering strong relationships with our clients, providing the support
                                and understanding you need during challenging times.</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};