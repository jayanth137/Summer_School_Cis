import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import TeamCard from './component/Team/TeamCard';
import Teamcode from './component/Team/TeamCode';

const Home = () => {
  return (
    <>
      <div className="summerschool__navbar-container">
        <Navbar />
      </div>
      <div className=" mx-auto"></div>

      <div className="summerschool_container summerschool_container_vertical">
        <Teamcode />
      </div>
      <div className="summerschool_footer-container">
        <Footer />
      </div>
    </>
  );
};
export default Home;
