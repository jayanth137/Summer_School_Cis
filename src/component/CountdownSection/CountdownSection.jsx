import React from 'react';

import './CountdownSection.css';
import { motion } from 'framer-motion';
import Timer from './Timer';

const CountdownSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: false }}
        className="event__section2"
        id="registration"
      >
        <div className="event_countdown_main">
          <div>
            <h1>Event Date </h1>
            <hr style={{ marginBottom: '70px' }} />
            {/* <h1>TBA</h1> */}
            <h1> 28 August to 30 August</h1>
          </div>
        </div>
      </motion.div>
      <br />
    </>
  );
};

export default CountdownSection;
