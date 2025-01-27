import React from "react";

export default function Topbar({ page = "" }) {
  return (
    <>
      <div className="container-fluid nav-bar p-0 sticky-top shadow-sm">
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <h1 className="display-5 text-secondary m-0">
              <img src="/brand-logo.png" className="img-fluid" alt="Brand Logo" />
            </h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="/" className={`nav-item nav-link ${page === "home" ? "active": ""}`}>Home</a>
              <a href="/aboutus" className={`nav-item nav-link ${page === "aboutus" ? "active": ""}`}>About Us</a>
              <a href="/ourteam" className={`nav-item nav-link ${page === "ourteam" ? "active": ""}`}>Our Team</a>
              <div className="nav-item dropdown">
                <a href="javascript:void(0)" className={`nav-link ${page === "practice-area" ? "active": ""}`} data-bs-toggle="dropdown">
                  <span className="dropdown-toggle">Practice Areas</span>
                </a>
                <div className="dropdown-menu m-0">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="py-1 px-2">
                      <div className="py-2 cPx-3 text-dark text-inline">
                        <strong>Expertise</strong>
                      </div>
                      <a href="/gst" className="dropdown-item">GST</a>
                      <a href="/customs" className="dropdown-item">Customs</a>
                      <a href="/ed-pmla-fema" className="dropdown-item">ED (PMLA/FEMA)</a>
                      <a href="/ipr" className="dropdown-item">IPR</a>
                    </div>
                    <div className="py-1 px-2">
                      <div className="py-2 cPx-3 text-dark text-inline">
                        <strong>Other Areas</strong>
                      </div>
                      <a href="/arbitration" className="dropdown-item">Arbitration</a>
                      <a href="/banking-and-finance" className="dropdown-item">Banking & Finance</a>
                      <a href="/corporate-law" className="dropdown-item">Corporate Law</a>
                      <a href="/criminal-and-civil-litigation" className="dropdown-item">Criminal & Civil Litigation</a>
                      <a href="/cyber-law" className="dropdown-item">Cyber Law</a>
                      <a href="/consumer-protection-law" className="dropdown-item">
                        <div className="menuItem">
                          <span>Consumer Protection Law</span>
                        </div>
                      </a>
                      <a href="/contractual-law" className="dropdown-item">Contractual Law</a>
                      <a href="/direct-tax" className="dropdown-item">Direct Tax</a>
                      <a href="/family-law" className="dropdown-item">Family Law</a>
                      <a href="/insolvency" className="dropdown-item">Insolvency</a>
                      <a href="/real-state-law" className="dropdown-item">Real Estate Law</a>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/news-listing" className={`nav-item nav-link ${page === "contatus" ? "active": ""}`}>Updates</a>
            </div>
            <a href="/contactus" className="btn btn-primary border-secondary rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0">
              Consultation Session
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}