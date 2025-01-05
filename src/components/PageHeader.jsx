import React from "react";

export default function PageHeader() {
    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5">
                    <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Team</h3>
                        <ol className="breadcrumb justify-content-center text-white mb-0 wow fadeInDown" data-wow-delay="0.3s">
                            <li className="breadcrumb-item"><a href="index.html" className="text-white">Home</a></li>
                            <li className="breadcrumb-item"><a href="#" className="text-white">Pages</a></li>
                            <li className="breadcrumb-item active text-secondary">Our Team</li>
                        </ol>
                </div>
            </div>
        </>
    )
};