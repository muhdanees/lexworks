import React from "react";
import { image_path } from "../utils/images";
export default function PracticeAreas() {
  return (
    <>
      <div className="container-fluid service bg-light overflow-hidden watermarkBig">
        <div className="container py-5">
          <div
            className="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style mb-2">
              <h5 className="sub-title text-primary px-3">Practice Areas</h5>
            </div>
            <h2 className="display-6 mb-4" style={{ textWrap: "balance" }}>
              Navigating Your Case With Unwavering Efficiency And Consistency
            </h2>
            <p>
              Facet of your business, and let us be your trusted partner in
              navigating the intricacies of Legal field, providing you with the
              clarity and support you need to succeed. In the realm of
              litigation, our experienced team is prepared to represent clients
              at every level, from departmental authorities and tribunals to the
              High Court and Supreme Court. We also advocate on behalf of our
              clients before Advance Ruling Authorities, seeking clarity and
              favorable rulings on complex business transactions.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <picture>
                      <source
                        srcSet={`${image_path}/customs.jxl`}
                        type="image/jxl"
                      />
                      <source
                        srcSet={`${image_path}/customs.avif`}
                        type="image/avif"
                      />
                      <source
                        srcSet={`${image_path}/customs.webp`}
                        type="image/webp"
                      />
                      <img
                        className="img-fluid w-100 rounded"
                        decoding="async"
                        loading="lazy"
                        src={`${image_path}/customs.png`}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <a href="/customs" className="h5 text-white mb-0">
                          Customs
                        </a>
                      </div>
                      <a
                        className="btn bg-secondary text-primary btn-sm rounded-pill py-2 px-3 mb-4"
                        href="/customs"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="/customs">
                        <h4 className="text-white h5 mb-4 py-3">CUSTOMS</h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-white">
                          At <strong>Lex Works</strong>, we recognize that
                          navigating the complexities of customs law is crucial
                          for businesses engaged in international trade.
                        </p>
                        <a
                          className="btn btn-primary border-secondary rounded-pill py-3 px-5"
                          href="/customs"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <picture>
                      <source
                        srcSet={`${image_path}/gst.jxl`}
                        type="image/jxl"
                      />
                      <source
                        srcSet={`${image_path}/gst.avif`}
                        type="image/avif"
                      />
                      <source
                        srcSet={`${image_path}/gst.webp`}
                        type="image/webp"
                      />
                      <img
                        className="img-fluid w-100 rounded"
                        decoding="async"
                        loading="lazy"
                        src={`${image_path}/gst.png`}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <a href="/gst" className="h5 text-white mb-0">
                          GST
                        </a>
                      </div>
                      <a
                        className="btn bg-secondary text-primary btn-sm rounded-pill py-2 px-3 mb-4"
                        href="/gst"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="/gst">
                        <h4 className="text-white h5 mb-4 py-3">
                          GOODS AND SERVICES TAX
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-white">
                          At <strong>Lex Works</strong>, our dedicated GST Law
                          team offers a comprehensive suite of services designed
                          to navigate the complexities of Goods and Services
                          Tax.
                        </p>
                        <a
                          className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5"
                          href="/gst"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <picture>
                      <source
                        srcSet={`${image_path}/ed.jxl`}
                        type="image/jxl"
                      />
                      <source
                        srcSet={`${image_path}/ed.avif`}
                        type="image/avif"
                      />
                      <source
                        srcSet={`${image_path}/ed.webp`}
                        type="image/webp"
                      />
                      <img
                        className="img-fluid w-100 rounded"
                        decoding="async"
                        loading="lazy"
                        src={`${image_path}/ed.png`}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <a href="/ed-pmla-fema" className="h5 text-white mb-0">
                          ED/PMLA/FEMA
                        </a>
                      </div>
                      <a
                        className="btn bg-secondary text-primary btn-sm rounded-pill py-2 px-3 mb-4"
                        href="/ed-pmla-fema"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="/ed-pmla-fema">
                        <h4 className="text-white h5 mb-4 py-3">
                          ED/PMLA/FEMA
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-white">
                          At <strpng>Lex Works</strpng>, our Enforcement
                          Directorate (ED) Litigation Practice focuses on
                          providing robust legal support in matters involving
                          economic offenses
                        </p>
                        <a
                          className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5"
                          href="/ed-pmla-fema"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <picture>
                      <source
                        srcSet={`${image_path}/ipr.jxl`}
                        type="image/jxl"
                      />
                      <source
                        srcSet={`${image_path}/ipr.avif`}
                        type="image/avif"
                      />
                      <source
                        srcSet={`${image_path}/ipr.webp`}
                        type="image/webp"
                      />
                      <img
                        className="img-fluid w-100 rounded"
                        decoding="async"
                        loading="lazy"
                        src={`${image_path}/ipr.png`}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <a href="/ipr" className="h5 text-white mb-0">
                          IPR
                        </a>
                      </div>
                      <a
                        className="btn bg-secondary text-primary btn-sm rounded-pill py-2 px-3 mb-4"
                        href="/ipr"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="/ipr">
                        <h4 className="text-white h5 mb-4 py-3">IPR</h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-white">
                          At <strong>Lex Works</strong>, our Intellectual
                          Property Rights (IPR) Litigation Practice is dedicated
                          to protecting and enforcing the creative and
                          innovative assets of our clients.
                        </p>
                        <a
                          className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5"
                          href="/ipr"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <picture>
                      <source
                        srcSet={`${image_path}/cyberLaw.jxl`}
                        type="image/jxl"
                      />
                      <source
                        srcSet={`${image_path}/cyberLaw.avif`}
                        type="image/avif"
                      />
                      <source
                        srcSet={`${image_path}/cyberLaw.webp`}
                        type="image/webp"
                      />
                      <img
                        className="img-fluid w-100 rounded"
                        decoding="async"
                        loading="lazy"
                        src={`${image_path}/cyberLaw.png`}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <a href="/cyber-law" className="h5 text-white mb-0">
                          Cyber Law
                        </a>
                      </div>
                      <a
                        className="btn bg-secondary text-primary btn-sm rounded-pill py-2 px-3 mb-4"
                        href="/cyber-law"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="/cyber-law">
                        <h4 className="text-white h5 mb-4 py-3">Cyber Law</h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-white">
                          Our Cyber Law Practice at
                          <strong>Lex Works</strong> focuses on the legal
                          challenges and opportunities presented by the digital
                          landscape.
                        </p>
                        <a
                          className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5"
                          href="/cyber-law"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <picture>
                      <source
                        srcSet={`${image_path}/banking.jxl`}
                        type="image/jxl"
                      />
                      <source
                        srcSet={`${image_path}/banking.avif`}
                        type="image/avif"
                      />
                      <source
                        srcSet={`${image_path}/banking.webp`}
                        type="image/webp"
                      />
                      <img
                        className="img-fluid w-100 rounded"
                        decoding="async"
                        loading="lazy"
                        src={`${image_path}/banking.png`}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <a
                          href="/banking-and-finance"
                          className="h5 text-white mb-0"
                        >
                          Banking and Finance
                        </a>
                      </div>
                      <a
                        className="btn bg-secondary text-primary btn-sm rounded-pill py-2 px-3 mb-4"
                        href="/banking-and-finance"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="/banking-and-finance">
                        <h4 className="text-white h5 mb-4 py-3">
                          Banking and Finance Law
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-white">
                          At <strong>Lex Works</strong>, our Banking and Finance
                          Law Practice is dedicated to providing comprehensive
                          legal support to financial institutions, corporations,
                        </p>
                        <a
                          className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5"
                          href="/banking-and-finance"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <picture>
                      <source
                        srcSet={`${image_path}/criminalLaw.jxl`}
                        type="image/jxl"
                      />
                      <source
                        srcSet={`${image_path}/criminalLaw.avif`}
                        type="image/avif"
                      />
                      <source
                        srcSet={`${image_path}/criminalLaw.webp`}
                        type="image/webp"
                      />
                      <img
                        className="img-fluid w-100 rounded"
                        decoding="async"
                        loading="lazy"
                        src={`${image_path}/criminalLaw.png`}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded py-3 mx-5 mb-4">
                        <a
                          href="/criminal-and-civil-litigation"
                          className="h5 text-white mb-0"
                        >
                          Criminal and Civil Litigation
                        </a>
                      </div>
                      <a
                        className="btn bg-secondary text-primary btn-sm rounded-pill py-2 px-3 mb-4"
                        href="/criminal-and-civil-litigation"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="/criminal-and-civil-litigation">
                        <h4 className="text-white h5 mb-4 py-3">
                          Criminal and Civil Litigation
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-white">
                          At <strong>Lex Works</strong>, our Criminal and Civil
                          Litigation Practice is committed to providing robust
                          legal representation in both criminal and civil
                          matters.
                        </p>
                        <a
                          className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5"
                          href="/criminal-and-civil-litigation"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <picture>
                      <source
                        srcSet={`${image_path}/arbitration.jxl`}
                        type="image/jxl"
                      />
                      <source
                        srcSet={`${image_path}/arbitration.avif`}
                        type="image/avif"
                      />
                      <source
                        srcSet={`${image_path}/arbitration.webp`}
                        type="image/webp"
                      />
                      <img
                        className="img-fluid w-100 rounded"
                        decoding="async"
                        loading="lazy"
                        src={`${image_path}/arbitration.png`}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <a href="/arbitration" className="h5 text-white mb-0">
                          Arbitration Practice
                        </a>
                      </div>
                      <a
                        className="btn bg-secondary text-primary btn-sm rounded-pill py-2 px-3 mb-4"
                        href="/arbitration"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="/arbitration">
                        <h4 className="text-white mb-4 py-3">
                          Arbitration Practice
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-white">
                          At <strong>Lex Works</strong>, our Arbitration
                          Practice provides expert legal representation in
                          resolving disputes efficiently and effectively through
                          arbitration.
                        </p>
                        <a
                          className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5"
                          href="/arbitration"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <picture>
                      <source
                        srcSet={`${image_path}/insolvency.jxl`}
                        type="image/jxl"
                      />
                      <source
                        srcSet={`${image_path}/insolvency.avif`}
                        type="image/avif"
                      />
                      <source
                        srcSet={`${image_path}/insolvency.webp`}
                        type="image/webp"
                      />
                      <img
                        className="img-fluid w-100 rounded"
                        decoding="async"
                        loading="lazy"
                        src={`${image_path}/insolvency.png`}
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <a href="/insolvency" className="h5 text-white mb-0">
                          Insolvency Law
                        </a>
                      </div>
                      <a
                        className="btn bg-secondary text-primary btn-sm rounded-pill py-2 px-3 mb-4"
                        href="/insolvency"
                      >
                        Read More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="/insolvency">
                        <h4 className="text-white h5 mb-4 py-3">
                          Insolvency Law
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4 text-white">
                          At <strong>Lex Works</strong>, our Insolvency Practice
                          provides expert guidance and representation in matters
                          of corporate and personal insolvency.
                        </p>
                        <a
                          className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5"
                          href="/insolvency"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
