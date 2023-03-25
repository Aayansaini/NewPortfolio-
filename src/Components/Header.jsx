import React from "react";
import img1 from "../Assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav class="navbar">
        <div class="container-fluid text-light">
          <h1>
            &lt;AAYAN <h1 className="emoji">😲</h1>/&gt;
          </h1>
          <Link class="navbar-brand text-light" href="#">
            <img id="logo" src={img1} alt="..." />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
