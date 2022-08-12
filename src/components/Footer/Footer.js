import React from "react";
import "./Footer.css";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Let's Connect with CNBC -{" "}
        <a href="https://www.cnbctv18.com/" target="__blank">
          CNBCTV
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.youtube.com/user/CNBCTV18" target="__blank">
          <FaYoutube style={{ width: "70%", height: "50px" }} />
        </a>
        <a href="https://www.facebook.com/cnbctv18india" target="__blank">
          <FaFacebook style={{ width: "70%", height: "50px" }} />
        </a>
        <a href="https://twitter.com/cnbctv18live" target="__blank">
          <FaTwitter style={{ width: "70%", height: "50px" }} />
        </a>
      </div>
      <div>
        <h4>©CNBC Broadcast Limited. All rights reserved.</h4>
      </div>
    </div>
  );
};

export default Footer;
