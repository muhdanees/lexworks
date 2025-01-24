import React from "react";

export default function ContractualLaw() {
    return (
        <>
            <div className="container-fluid py-sm-0 py-5 watermark">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="bg-light">
                                <img src="img/contractLaw.png" className="img-fluid rounded img-thumbnail w-100" alt="Direct TAX" />
                            </div>
                        </div>
                        <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">

                            <h5 className="sub-title mb-4 pe-3">Contract</h5>

                            {/* <h3 className="customs-heading mb-4">Contractual Law</h3> */}

                            <p>At <strong>Lex Works</strong>, ur Contractual Law Practice specializes in drafting, reviewing,
                                and enforcing contracts across various industries. Our experienced attorneys understand the
                                importance of clear and enforceable agreements in protecting your business interests.</p>

                            <p>We assist clients in negotiating terms, ensuring compliance with applicable laws, and resolving
                                disputes that may arise from contractual obligations. Whether you need assistance with
                                commercial contracts, employment agreements, or service contracts, our team is here to help.</p>

                            <p className="mb-4">We prioritize a collaborative approach, working closely with you to ensure that your
                                agreements reflect your goals and mitigate potential risks. We are dedicated to providing the
                                legal expertise you need to navigate the complexities of contractual law successfully.</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};