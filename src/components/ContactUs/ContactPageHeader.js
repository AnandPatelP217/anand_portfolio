import React from "react";
import "./stylesheet/ContactUsStyle.css";

const ContactPageHeader = () => {
  return (
    <>
      <section className="contact" style={{marginTop: '7rem'}}>
        <div className="container">
          <h3 className="contact-title pad-15">HAVE YOU ANY QUESTION?</h3>
          <h4 className="contact-sub-title pad-15">
            WE ARE ALWAYS HERE TO HELP YOU
          </h4>

          <div className="row">
            {/* <!-- Contact Info item --> */}
            <div className="contact-info-item pad-15">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <h4>Helpline Number</h4>
              <p>
                +91 6261081827
              </p>
            </div>

            {/* <!-- Contact Info item --> */}
            <div className="contact-info-item pad-15">
              <div className="icon">
                <i className="fa fa-map"></i>
              </div>
              <h4>Address</h4>
              <p>
                Bhopal, Madhya Pradesh, 462046
              </p>
            </div>

            {/* <!-- Contact Info item --> */}
            <div className="contact-info-item pad-15">
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>
                anandpatelp217@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPageHeader;
