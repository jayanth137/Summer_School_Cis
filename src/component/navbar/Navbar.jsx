import React, { useEffect } from "react";
import { useRef, useState } from "react";
import "./Navbar.css";
import summerschool from "./SUMMER SCHOOL_logo.png";

import { motion } from "framer-motion";
import { headerVariants } from "../../motionUtils";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./dropdown/Dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburger = useRef(null);
  function toggleMenu() {
    setIsOpen(!isOpen);
    hamburger.current.classList.toggle("active");
  }
  const navigate = useNavigate();
  let element;

  const gotoId = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 500);
    } else {
      window.location.href = "#" + id;
    }
  };

  let menuRef = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        // console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className="summerschool__navbar-container"
    >
      <header className="summerschool__navbar ">
        <div className="summerschool__navbar-body" ref={menuRef}>
          <Link to={"/"}>
            <div className="summerschool__navbar-logo">
              <img src={summerschool} alt="logo" />
            </div>
          </Link>
          <nav className="summerschool__navbar-menu">
            <ul className="summerschool__navbar-navlist">
              <li className="summerschool__navbar-navitem">
                <p
                  /* href="#home" */
                  onClick={() => {
                    gotoId("home");
                    toggleMenu();
                  }}
                >
                  <h3 className="summerschool__navbar-menu-heading">Home</h3>
                </p>
              </li>
              <li className="summerschool__navbar-navitem">
                <p
                  onClick={() => {
                    gotoId("aboutus");
                    toggleMenu();
                  }}
                >
                  <h3 className="summerschool__navbar-menu-heading">About</h3>
                </p>
              </li>
              <li className="summerschool__navbar-navitem">
                <p
                  onClick={() => {
                    gotoId("timeline");
                    toggleMenu();
                  }}
                >
                  <h3 className="summerschool__navbar-menu-heading">Timeline</h3>
                </p>
              </li>


              <li className="summerschool__navbar-navitem">
                <p
                  onClick={() => {
                    gotoId("venue");
                    toggleMenu();
                  }}
                >
                  <h3 className="summerschool__navbar-menu-heading">Venue</h3>
                </p>
              </li>

              <li className="summerschool__navbar-navitem">
                <p
                  onClick={() => {
                    gotoId("sponsers");
                    toggleMenu();
                  }}
                >
                  <h3 className="summerschool__navbar-menu-heading">Sponsers</h3>
                </p>
              </li>

              
              <div style={{ position: "relative" }}>
                <li className="summerschool__navbar-navitem">
                  <p
                    onClick={() => {
                      //console.log("Hello mf");
                      setOpen(!open);
                    }}
                  >
                    <h3 className="summerschool__navbar-menu-heading">More</h3>
                  </p>
                </li>

                <Dropdown open={open} setOpen={setOpen} />
              </div>
            </ul>
          </nav>
        </div>
      </header>
      <header
        className={`summerschool__navbar-hamburger ${isOpen ? `hamburger-open` : ``
          }`}
      >
        <div className="summerschool__navbar-hamburger-body">
          <nav className="summerschool__navbar-hamburger-nav">
            <div className="hamburger">
              <svg
                className="ham hamRotate ham8"
                viewBox="0 0 100 100"
                width="80"
                ref={hamburger}
                onClick={() => {
                  // gotoId("aboutus");
                  toggleMenu();
                }}
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                />
                <path className="line middle" d="m 30,50 h 40" />
                <path
                  className="line bottom"
                  d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                />
              </svg>
            </div>
            <div className="summerschool__navbar-hamburger-logo">
              <img src={summerschool} alt="logo" />
            </div>
            <div
              className="summerschool__navbar-hamburger-logo"
              style={{
                display: "none",
                transform: "scale(2)",
                marginTop: "40px",
              }}
            ></div>
          </nav>
        </div>
        <ul
          className={`summerschool__navbar-hamburger-navlist ${isOpen ? `activeMenu slide-bottom` : ``
            }`}
        >
          <li className="summerschool__navbar-hamburger-navitem">
            <p
              onClick={() => {
                gotoId("home");
                toggleMenu();
              }}
            >
              <h3 className="summerschool__navbar-hamburger-menu-heading">
                Home
              </h3>
            </p>
          </li>
          <li className="summerschool__navbar-hamburger-navitem">
            <p
              onClick={() => {
                gotoId("aboutus");
                toggleMenu();
              }}
            >
              <h3 className="summerschool__navbar-hamburger-menu-heading">
                About Us
              </h3>
            </p>
          </li>
          <li className="summerschool__navbar-hamburger-navitem">
            <p
              onClick={() => {
                gotoId("timeline");
                toggleMenu();
              }}
            >
              <h3 className="summerschool__navbar-hamburger-menu-heading">
                Timeline
              </h3>
            </p>
          </li>
          

          <li className="summerschool__navbar-hamburger-navitem">
            <p
              onClick={() => {
                gotoId("lectures");
                toggleMenu();
              }}
            >
              <h3 className="summerschool__navbar-hamburger-menu-heading">
                Lectures
              </h3>
            </p>
          </li>
          {/* <li className="summerschool__navbar-hamburger-navitem">
            <Link to={"/events"}>
              <h3 className="summerschool__navbar-hamburger-menu-heading">
                Events
              </h3>
            </Link>
          </li> */}
          <li className="summerschool__navbar-hamburger-navitem">
            <p
              onClick={() => {
                gotoId("sponsers");
                toggleMenu();
              }}
            >
              <h3 className="summerschool__navbar-hamburger-menu-heading">
                Sponsers
              </h3>
            </p>
          </li>
          
          <li className="summerschool__navbar-hamburger-navitem">
            <p
              onClick={() => {
                gotoId("faq");
                toggleMenu();
              }}
            >
              <h3 className="summerschool__navbar-hamburger-menu-heading">
                FAQ
              </h3>
            </p>
          </li>
        </ul>
      </header>
    </motion.div>
  );
};

export default Navbar;
