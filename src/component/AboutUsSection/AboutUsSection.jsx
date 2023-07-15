import React from "react";
import {Player} from "@lottiefiles/react-lottie-player";
import {motion} from "framer-motion";
import h4byoga from "./drone.json";
import "./AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition: {duration: 1}}}
        viewport={{once: false}}
        className="summerschool__section2"
        id="aboutus"
      >
        {window.innerWidth < 768 ? (
          <div className="about_main">
            <h1>About Us</h1>
            <hr />
            <div className="about_sub">
              <Player
                autoplay
                loop
                src={h4byoga}
                className="playeryoga"
              ></Player>
              <div className="about_textdiv">
                <div cn="about_textdiv_sub">
                  <span>
                  IEEE Computational Intelligence Society (CIS)
                  Chapter at Chandigarh University Student Branch. We are a
                  vibrant and dynamic community of students passionate about
                  exploring the fascinating field of computational intelligence.
                  Through our diverse range of activities and events, we strive
                  to inspire, educate, and empower students to excel in this
                  ever-evolving technological landscape.
                    <br />
                  </span>{" "}
                  <br />
                  A 5 Days Summer School Program based on the Unmanned Vehicles domain and the
                  influence of Artificial Intelligence, Machine Learning, Deep Learning on it. The Summer
                  School consists of Lectures and Workshops will help the students in engaging with
                  theoretical along with practical knowledge of Unmanned Vehicles and perform experiments on it.
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="about_god">
            <div className="about_main">
              <h1>About Us</h1>
              <hr />
              <div className="about_sub">
                <Player
                  autoplay
                  loop
                  src={h4byoga}
                  className="playeryoga"
                ></Player>
                <div className="about_textdiv">
                  <div cn="about_textdiv_sub">
                    <span>
                    IEEE Computational Intelligence Society (CIS)
                  Chapter at Chandigarh University Student Branch. We are a
                  vibrant and dynamic community of students passionate about
                  exploring the fascinating field of computational intelligence.
                  Through our diverse range of activities and events, we strive
                  to inspire, educate, and empower students to excel in this
                  ever-evolving technological landscape.
                  <br />
                    </span>{" "}
                    <br />
                    A 5 Days Summer School Program based on the Unmanned Vehicles domain and the
influence of Artificial Intelligence, Machine Learning, Deep Learning on it. The Summer
School consists of Lectures and Workshops will help the students in engaging with
theoretical along with practical knowledge of Unmanned Vehicles and perform experiments on it.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default AboutUsSection;
