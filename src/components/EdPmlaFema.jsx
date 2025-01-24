import React from "react";

export default function EdPmlaFema() {
    return (
        <>
            <div className="container-fluid py-sm-0 py-5 watermark">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="bg-light">
                                <img src="img/ed.png" className="img-fluid rounded img-thumbnail w-100" alt="Direct TAX" />
                            </div>
                        </div>
                        <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">

                            <h5 className="sub-title mb-4 pe-3">ED</h5>

                            {/* <h3 className="customs-heading mb-4">Enforcement Directorate</h3> */}

                            <p>At <strong>Lex Works</strong>, our Enforcement Directorate (ED) Litigation Practice focuses on
                                providing robust legal support in matters involving economic offenses, including money
                                laundering and financial fraud. Our experienced team navigates the complexities of cases brought
                                by the ED, ensuring that our clients receive comprehensive representation throughout the
                                investigation and litigation process.</p>

                            <p>We assist clients in responding to summons, preparing defenses, and engaging with authorities
                                during investigations. Our attorneys have extensive experience in representing clients before
                                various judicial forums, including special courts and appellate tribunals.</p>

                            <p className="mb-4">We pride ourselves on our strategic approach, combining legal expertise with a deep
                                understanding of financial regulations. By offering personalized guidance and support, we help
                                clients mitigate risks and protect their interests effectively in ED-related matters.</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};