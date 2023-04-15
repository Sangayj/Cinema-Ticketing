import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/*column*/}
          <div className="col"></div>
          <div className="col">
            <h4>Email Address: filmassociationofbhutan2021@gmail.com</h4>
            <h4>Mobile No: 2 333 779</h4>
            <h4>Address: Thimphu,BCCI Compound Bhutan</h4>
            <div className="social-icons">
              <FaFacebook size={40} color="#FFFFFF" />
              <FaTwitter size={40} color="#FFFFFF" />
              <FaInstagram size={40} color="#FFFFFF" />
            </div>

            <div className="row">
              <hr
                style={{
                  height: "0.5px",
                  color: "#ccc",
                  backgroundColor: "#E86A33",
                }}
              />
              <p className="col-sm">
                &copy;{new Date().getFullYear()}.All Rights
                Reserved.Filmassociation of Bhutan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
