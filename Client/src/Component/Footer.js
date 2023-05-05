import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-content">
        <h4 className="footer-heading">
          Email Address: filmassociationofbhutan2021@gmail.com
        </h4>
        <h4 className="footer-heading">Mobile No: 2 333 779</h4>
        <h4 className="footer-heading">
          Address: Thimphu, BCCI Compound Bhutan
        </h4>
        <div className="social-icons">
          <FaFacebook size={40} color="#1877f2" />
          <FaTwitter size={40} color="#1da1f2" />
          <FaInstagram size={40} color="#c32aa3" />
        </div>
      </div>
      <hr className="footer-hr" />
      <p className="footer-text">
        &copy;{new Date().getFullYear()}. All Rights Reserved. Filmassociation
        of Bhutan.
      </p>
    </div>
  );
}
