import React from "react";
import { AiFillBulb } from "react-icons/ai";

import profile from "../Assets/profile.jpg";
import imgc from "../Assets/imgc.png";
import imgd from "../Assets/imgd.png";
import imge from "../Assets/imge.png";
import { Link } from "react-router-dom";

const Home = () => {
  function calling() {
    alert("You Entering In Aayan's Slot!😃");
  }

  return (
    <>
      <div id="animate__bounce" className="section section-box2">
        <div className="container container-box2">
          <div className="row">
            <div className="col-sm-6 col-box2-first">
              <img src={profile} alt="..." />
              <h1>
                FRONTEND <br /> ENGINEER
              </h1>
            </div>
            <div className="col-sm-6 col-box2-second">
              <h1>Hi, My name is</h1>
              <h3>
                <span>Aayan</span> Saini<span>.</span>
              </h3>
              <h2>
                Front-End<span> Web Engineer</span>
              </h2>
              <h5>
                I am passionate about building websites, and I am a self-taught
                web developer. My goal is to create web applications that are
                user-friendly, and that are easy to use.
              </h5>
              <a href="mailto: Aayansaini960@gmail.com">
                <button className="mail-button">GET IN TOUCH</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-home2">
        <h1>&lt; PROJECTS /&gt;</h1>
        <div className="container container-home2">
          <div className="row">
            <div className="col-sm-4 col-home2">
              <div class="d-flex position-relative">
                <img src={imgc} class="flex-shrink-0 me-3" alt="..." />
                <div>
                  <h5 class="mt-0">E-Commerce Website</h5>
                  <p>
                    This e-commerce website project is designed to provide
                    customers with an easy and convenient way to shop online. It
                    features a user-friendly interface and a wide selection of
                    products from leading brands.
                  </p>
                  <a href="http://mapriya.epizy.com/" class="stretched-link">
                    <button>Go Live</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-home2">
              <div class="d-flex position-relative">
                <img src={imgd} class="flex-shrink-0 me-3" alt="..." />
                <div>
                  <h5 class="mt-0">Dogfit Online-Web</h5>
                  <p>
                    Welcome to our online dog store! We carry a wide selection
                    of high-quality items, ranging from food and treats to toys
                    and accessories. Thank you for choosing us-we look forward
                    to helping you and your pup find the perfect items!
                  </p>
                  <a
                    href="https://aayansaini.github.io/DogWeb.github.io/"
                    class="stretched-link"
                  >
                    <button>Go Live</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-home2">
              <div class="d-flex position-relative">
                <img src={imge} class="flex-shrink-0 me-3" alt="..." />
                <div>
                  <h5 class="mt-0">TextUtiles Conversion-Web</h5>
                  <p>
                    This project is a series of tasks that need to be completed
                    to reach a specific outcome. In this project can also be
                    defined as a set of inputs and outputs required to achieve a
                    particular goal. Range from simple to complex and can be
                    managed by one person or a hundred.
                  </p>
                  <a
                    href="https://aayansaini.github.io/TextUtiles/"
                    class="stretched-link"
                  >
                    <button>Go Live</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="project">
          <Link to={"/Download"} id="fillup" onClick={() => calling()}>
            <p>
              &lt;PRESS ME
              <span>
                <AiFillBulb />
              </span>
              /&gt;
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
