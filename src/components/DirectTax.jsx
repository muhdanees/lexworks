import React from "react";

export default function DirectTax() {
    return (
        <>
            <div className="container-fluid py-sm-0 py-5 watermark">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="bg-light">
                                <img src="img/directTax.png" className="img-fluid rounded img-thumbnail w-100" alt="Direct TAX" />
                            </div>
                        </div>
                        <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">

                            <h5 className="sub-title mb-4 pe-3">Taxation</h5>

                            {/* <h3 className="customs-heading mb-4">Direct Tax</h3> */}

                            <p>At <strong>Lex Works</strong>, our Direct Tax Practice is focused on providing clients with
                                expert advice and representation in matters related to income tax, wealth tax, and other direct
                                taxation issues. Our experienced team offers comprehensive services, including compliance, and
                                representation in tax disputes.</p>

                            <p>We assist clients in structuring transactions to optimize tax efficiency and ensure compliance
                                with relevant laws and regulations. In the event of disputes, our attorneys are prepared to
                                represent clients before tax authorities and courts, advocating for their rights and interests.</p>

                            <p className="mb-4">We are committed to keeping our clients informed and empowered, helping them
                                    navigate the complexities of direct tax law with confidence and clarity.</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};