import React from "react";

export default function ConsentPopup() {
  return (
    <>
      <div className="modal" tabindex="-1" id="onload">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Caution Notice To whom it may concern
              </h5>
              {/* <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button> */}
            </div>
            <div className="modal-body consent">
              <p>
                The rules of the Bar Council of India prohibit lawyers and law
                firms from advertising and soliciting work through communication
                in the public domain. By proceeding further and clicking on the
                “AGREE” button herein below, you hereby acknowledge that:
              </p>

              <p>
                a. You, of your own accord, intend to know more and subsequently
                acquire more information about Lex Works for your own personal
                purpose and use; and
              </p>
              <p>
                b. There has been no advertisement, solicitation, communication,
                invitation, or inducement of any sort whatsoever from Lex Works
                or any of its members to create or solicit an attorney-client
                relationship through this website.
              </p>

              <p>
                The information on <a href="https://www.lexworks.co.in/">www.lexworks.co.in</a> is not a substitute for legal advice, and as such, we at “Lex Works” are not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any legal issues, they must, in all cases, seek independent legal advice.
              </p>

              <p>
                This website is meant solely for the purpose of information and
                not for the purpose of advertising, and “Lex Works” does not
                intend to solicit clients through this website. We do not take
                responsibility for decisions taken by the reader based solely on
                the information provided on the website, nor do we warrant that
                the information contained on this website is accurate or
                complete. Any information obtained or downloaded from this
                website is completely at the user's volition, and any
                transmission, receipt, access, or use of this site is not
                intended to, and will not, create any lawyer-client
                relationship.
              </p>

              <p>
                None of the information contained in the website is in the
                nature of a legal opinion or otherwise amounts to any legal
                advice. Lex Works hereby disclaims any and all liability to any
                person for any loss or damage caused by errors or omissions,
                whether such errors or omissions result from negligence,
                accident, or any other cause.
              </p>

              <p>
                You further acknowledge having read, understood, and perused
                through the contents of the Privacy Policy. By continuing to use
                this site, you consent to the use of cookies on your device as
                described in our Cookie Policy.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn btn-primary"
              >
                Accept
              </button>
              <a
                type="button"
                className="btn btn-secondary"
                href="https://www.google.com"
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
