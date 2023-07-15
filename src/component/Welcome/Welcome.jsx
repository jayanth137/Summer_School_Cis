import React from 'react';
import { motion } from 'framer-motion';
import './Welcome.css';
import { Link } from 'react-router-dom';
import LiquidButton from './LiquidButton';
const Welcome = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: false }}
        className="summerschool__section2"
        id="home"
      >
        {window.innerWidth < 768 ? (
          <div className="about_god">
            <div className="about_mobile">
              <h1>IEEE CIS CUSB</h1>
              <h3>presents</h3>
              <h4>SUMMER SCHOOL</h4>
              <h5>Applied AI in Unmanned Vehicle</h5>
              <div className="button">
                <Link to="https://konfhub.com/summerschool">
                  <LiquidButton>Register Now</LiquidButton>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="about_god">
            <div className="about_main">
              <h1>IEEE CIS CUSB</h1>
              <h3>presents</h3>
              <h4>SUMMER SCHOOL</h4>
              <h5>Applied AI in Unmanned Vehicle</h5>
              <div className="button">
                <Link to="https://konfhub.com/summerschool">
                  <LiquidButton>Register Now</LiquidButton>
                </Link>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Welcome;
