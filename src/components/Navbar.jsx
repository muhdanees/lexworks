import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Topbar() {
  return (
    <>
      <div className="container-fluid nav-bar p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
          <a href="./" className="navbar-brand p-0">
            <h1 className="display-5 text-secondary m-0">
              <img src="/brand-logo.png" className="img-fluid" alt="Brand Logo" />
            </h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="index.html" className="nav-item nav-link active">Home</a>
              <a href="aboutus.html" className="nav-item nav-link">About Us</a>
              <a href="ourteam.html" className="nav-item nav-link">Our Team</a>
              <div className="nav-item dropdown">
                <a href="#!" className="nav-link" data-bs-toggle="dropdown">
                  <span className="dropdown-toggle">Practice Area</span>
                </a>
                <div className="dropdown-menu m-0">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="py-1 px-2">
                      <div className="py-2 cPx-3 text-dark text-inline">
                        <strong>Expertise</strong>
                      </div>
                      <a href="gst.html" className="dropdown-item">GST</a>
                      <a href="customs.html" className="dropdown-item">Customs</a>
                      <a href="ed-pmla-fema.html" className="dropdown-item">ED (PMLA/FEMA)</a>
                      <a href="ipr.html" className="dropdown-item">IPR</a>
                    </div>
                    <div className="py-1 px-2">
                      <div className="py-2 cPx-3 text-dark text-inline">
                        <strong>Other Areas</strong>
                      </div>
                      <a href="arbitration.html" className="dropdown-item">Arbitration</a>
                      <a href="banking-and-finance.html" className="dropdown-item">Banking & Finance</a>
                      <a href="corporate-law.html" className="dropdown-item">Corporate Law</a>
                      <a href="criminal-and-civil-litigation.html" className="dropdown-item">Criminal & Civil Litigation</a>
                      <a href="cyber-law.html" className="dropdown-item">Cyber Law</a>
                      <a href="consumer-protection-law.html" className="dropdown-item">
                        <div className="menuItem">
                          <span>Consumer Protection Law</span>
                        </div>
                      </a>
                      <a href="contractual-law.html" className="dropdown-item">Contractual Law</a>
                      <a href="direct-tax.html" className="dropdown-item">Direct Tax</a>
                      <a href="family-law.html" className="dropdown-item">Family Law</a>
                      <a href="insolvency.html" className="dropdown-item">Insolvency</a>
                      <a href="real-state-law.html" className="dropdown-item">Real Estate Law</a>
                    </div>
                  </div>
                </div>
              </div>
              <a href="contactus.html" className="nav-item nav-link">Contact Us</a>
            </div>
            <a href="contactus.html" className="btn btn-primary border-secondary rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0">
              Consultation Session
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}