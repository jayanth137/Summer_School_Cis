import React from "react";
import "./FAQSection.css";
import file10 from "./file110.png";
import AccordionDiv from "./QuestionAccordian";
import { motion } from "framer-motion";

const FAQSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: false }}
        className="faq_section"
        id="faq"
      >
        <div className="faq_section-body">
          <div className="faq_section-part1">
            <div className="faq_section-title">Have a query ?</div>
            <div className="faq_section-content">
              IEEE CIS Summer school is beginner friendly, and designed keeping the requiremntes in mind.
            </div>
          </div>
          <div className="faq_section-part2">
            <div className="faq_section-image">
              <img alt="men" src={file10} />
            </div>
            <div className="faq_section-questions">
              <AccordionDiv />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FAQSection;
