import React from "react";

export default function Gst() {
    return (
        <>
            <div className="container-fluid py-sm-0 py-5 watermark">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="bg-light">
                                <img src="img/gst.png" className="img-fluid rounded img-thumbnail w-100" alt="GOODS AND SERVICES TAX" />
                                {/* <img src="img/about-3.jpg" className="img-fluid w-100 border-bottom border-5 border-primary" style="border-top-right-radius: 300px; border-top-left-radius: 300px;" alt="Image" /> */}
                            </div>
                        </div>
                        <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">

                            <h5 className="sub-title mb-4 pe-3">GST</h5>

                            {/* <h3 className="customs-heading mb-4">GOODS AND SERVICES TAX</h3> */}

                            <p>At <strong>Lex Works</strong>, our dedicated GST Law team offers a comprehensive suite of
                                services designed to navigate the complexities of Goods and Services Tax. We understand that GST
                                impacts every facet of your business, and let us be your trusted partner in navigating the
                                intricacies of GST, providing you with the clarity and support you need to succeed.</p>

                            <p className="mb-4">In the realm of litigation, our experienced team is prepared to represent clients at
                                every level, from departmental authorities and tribunals to the High Court and Supreme Court. We
                                also advocate on behalf of our clients before Advance Ruling Authorities, seeking clarity and
                                favorable rulings on complex business transactions. We also engage with Advance Ruling
                                Authorities to clarify complex issues regarding your business transactions.</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};