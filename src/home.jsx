import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import FAQSection from './component/FAQSection/FAQSection.jsx';
import CountdownSection from './component/CountdownSection/CountdownSection.jsx';
import AboutUsSection from './component/AboutUsSection/AboutUsSection.jsx';
import TimelineSection from './component/EventTimeline/TimelineSection.jsx';
import Sponsors from './component/Sponsors/SponsorsSection.jsx';
import Welcome from './component/Welcome/Welcome';
import VenueSection from './component/Venue/Venue';
import FeeSection from './component/FeeSection/FeeSection';
import TeamComp from './component/Team/TeamComp';
const Home = () => {
  return (
    <>
      <div className="summerschool__navbar-container">
        <Navbar />
      </div>

      <div className=" mx-auto"></div>

      <div className="summerschool_container summerschool_container_vertical">
        <Welcome />
        <CountdownSection />
        <TimelineSection />
        <VenueSection />
        <FeeSection />

        <AboutUsSection />
        <Sponsors />
        <TeamComp />

        <FAQSection />
      </div>

      <div className="summerschool_footer-container">
        <Footer />
      </div>
    </>
  );
};
export default Home;
