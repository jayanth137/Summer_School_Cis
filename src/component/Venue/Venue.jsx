import React from "react";
import "./Venue.css";
import { motion } from "framer-motion";

const Venue = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: false }}
        className="venue"
        id="venue"
      >
        <div className="venue-body" style={{ maxWidth: "100%" }} >
          
          
        
                         
              <div
                className="venue-sponser-list platinum" >
                <div className="venue-sponser-image-track">
                  
                <div className="venue-sponser-title sponser-two-dual">
                <div className="venue-title">
                        Venue
                </div>
                <hr/>
                <div className="venueaddress">
                Chandigarh University, <br/>Mohali, Punjab, 140413
                </div>
              </div>
                </div>
              </div>
           

           
         
          
          </div>
        
      </motion.div>
     
    </>
  );
};

export default Venue;
