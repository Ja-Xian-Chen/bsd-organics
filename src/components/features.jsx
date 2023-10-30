import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon, faShopify } from "@fortawesome/free-brands-svg-icons";

export const Features = () => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Services</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="service">
              <div className="service-icon">
                <FontAwesomeIcon icon={faAmazon} size="4x" />{" "}
              </div>
              <h3>Amazon</h3>
              <p>
                Amazon services cover product listing and optimization,
                fulfillment, advertising campaigns, inventory management,
                competitor analysis, customer service, and sales analysis, all
                aimed at maximizing your success as an Amazon seller.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service">
              <div className="service-icon">
                <FontAwesomeIcon icon={faShopify} size="4x" />{" "}
              </div>
              <h3>Shopify</h3>
              <p>
                Shopify services include e-commerce setup, customization,
                product management, payment gateway integration, design and
                themes, SEO, marketing, and analytics to help businesses create
                and grow their online stores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
