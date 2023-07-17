import React from 'react';
import './TeamComp.css';
import { Link } from 'react-router-dom';

const TeamComp = () => {
  return (
    <div className="team-comp">
      <h2 className="team-header">Wondering who all make this possible?</h2>
      <h3 className="team-description">
        IEEE SummerSchool is a team of 35+ enthusiastic folks, led by 5!
      </h3>
      <Link to="/team">
        <button className="meet-team-button">MEET OUR TEAM</button>
      </Link>
    </div>
  );
};

export default TeamComp;
