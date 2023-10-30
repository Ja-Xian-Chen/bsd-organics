import React from "react";

export const Header = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  Bsd Organics
                  <span></span>
                </h1>
                <p>
                  Located in the US and India with over 6 years of ecommerce
                  services.
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
