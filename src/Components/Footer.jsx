import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="section section-box">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-box1 animate__animated animate__zoomIn">
              <AiFillGithub />
            </div>
            <div className="col-sm-4 col-box1 animate__animated animate__zoomIn">
              <AiFillLinkedin />
            </div>
            <div className="col-sm-4 col-box1 animate__animated animate__zoomIn">
              <AiFillInstagram />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
