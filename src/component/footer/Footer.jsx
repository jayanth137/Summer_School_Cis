import React from "react";
import "./Footer.css";
import footer from "./footer.gif";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="summerschool__footer" id="footer">
        <div className="summerschool__footer-container1">
          <div className="summerschool__footer-logos">
            <img
              src={footer}
              className="summerschool__footer-logo-tcp"
              alt="summerschool"
            />
          </div>
          <div className="summerschool__footer-social-container">
            <div className="summerschool__footer-social-links-container">
             
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/summerschool/"
              >
                <svg
                  fill="#999"
                  width="32"
                  height="32"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              
              
              <a
                target="linkedin"
                href="https://www.linkedin.com/company/summerschool/"
              >
                <svg
                  fill="#999"
                  width="32"
                  height="32"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
            </div>
            
            <p className="summerschool__footer-social-text">
              Email us for more details,
            </p>
            <p className="summerschool__footer-social-text">
              <a href="mailto:summerschool@gmail.com" style={{color: "#e13b3c"}}>
                ieeeciscusb@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="summerschool__footer-container3">
          <div className="summerschool__footer-social-team">
            Developed By <Link to="/team">IEEE CIS CUSB</Link>
          </div>
          <div
            className="summerschool__footer-back-to-top"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <p>
              Back to Top
              <svg
                fill="#ff1717"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                style={{marginLeft: "1px"}}
              >
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
              </svg>
            </p>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Footer;
