import React from "react";

export default function MsShivanjali() {
  return (
    <>
      <div className="container-fluid py-sm-0 py-5 watermark">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="bg-light">
                <img
                  src="img/blank-men.png"
                  className="img-fluid rounded img-thumbnail w-100"
                  alt="Direct TAX"
                />
              </div>
            </div>
            <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
              <h5 className="sub-title mb-4 pe-3">Ms. Shivanjali</h5>

              {/* <!-- <h4 className="customs-title"><em>Position:</em> Senior Associate</h4> --> */}

              <h3 className="customs-heading mb-4">
                Legal Tech Innovator & Documentation Specialist
              </h3>

              <p>
                <strong>Ms. Shivanjali</strong>, the founder of Dastawezz, is a
                trailblazer in the legal technology sector, renowned for her
                innovative approach to simplifying legal documentation and
                providing accessible legal services. With a deep understanding
                of the complexities of legal processes, she has revolutionized
                the way individuals and businesses approach legal documentation
                through a user-centric platform that prioritizes efficiency and
                transparency.
              </p>

              <p>
                As a member of our expert panel, Ms. Shivanjali lends her
                invaluable expertise in legal documentation, compliance, and
                technology-driven solutions. Her forward-thinking mindset and
                dedication to excellence make her an integral part of our team,
                helping clients achieve their goals with seamless and reliable
                support.
              </p>

              <p className="mb-4">
                Explore the advantage of having Ms. Shivanjali and our expert
                panel guide you through your legal challenges with precision and
                professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
