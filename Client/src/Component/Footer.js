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
      <div className="col-ms">
        <h4>Email Address: filmassociationofbhutan2021@gmail.com</h4>
        <h4>Mobile No: 2 333 779</h4>
        <h4>Address: Thimphu,BCCI Compound Bhutan</h4>
        <div className="social-icons">
          <FaFacebook size={40} color="#FFFFFF" />
          <FaTwitter size={40} color="#FFFFFF" />
          <FaInstagram size={40} color="#FFFFFF" />
        </div>
        <div className="row">
        <hr style={{ border: "none", borderTop: "1px solid #ccc", marginTop: "1rem" }} />
          <p className="col-sm" style={{ marginTop: "0rem" }}>
            &copy;{new Date().getFullYear()}. All Rights Reserved. Filmassociation of Bhutan.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
