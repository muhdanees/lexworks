import React from "react";

export default function BankingAndFinance() {
    return (
        <>
            <div className="container-fluid py-sm-0 py-5 watermark">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="bg-light">
                                <img src="img/banking.png" className="img-fluid rounded img-thumbnail w-100" alt="Direct TAX" />
                            </div>
                        </div>
                        <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">

                            <h5 className="sub-title mb-4 pe-3">Banking & Finance</h5>

                            {/* <h3 className="customs-heading mb-4">Banking & Finance Law</h3> */}

                            <p>At <strong>Lex Works</strong>, our Banking and Finance Law Practice is dedicated to providing
                                comprehensive legal support to financial institutions, corporations, and individuals in
                                navigating the complexities of banking regulations and financial transactions. Our experienced
                                attorneys offer guidance on regulatory compliance, loan agreements, securities, and asset
                                management.</p>

                            <p>We assist clients in structuring financing transactions, negotiating terms, and resolving
                                disputes that may arise in the banking and finance sector. Whether representing lenders or
                                borrowers, our team is equipped to handle matters ranging from due diligence and risk assessment
                                to litigation in financial disputes. </p>

                            <p className="mb-4">We prioritize building strong relationships with our clients, ensuring you have the
                                insights and support needed to make informed financial decisions.</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};