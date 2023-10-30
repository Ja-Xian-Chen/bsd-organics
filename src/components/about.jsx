import React from "react";

export const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/BSD_Logo.webp" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                Digital commerce fundamentally involves the online buying and
                selling of goods and services. In a fiercely competitive market,
                companies must continually aim for greater excellence to
                maintain their resilience, despite the robust consumer demand
                for online shopping. BSD Organization leverages its
                technological proficiency and problem-solving approach to
                instigate meaningful and measurable improvements throughout your
                business, leading to both cost reductions and revenue expansion.
              </p>
              <h3>What We Provide:</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Account Setup</li>
                    <li>Account Management</li>
                    <li>Account Reactivation</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>New listings of products</li>
                    <li>Digital Marketing</li>
                    <li>Customization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
