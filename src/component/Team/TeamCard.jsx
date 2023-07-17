import React, { useState } from 'react';
import './TeamCard.css';
import './teamData';
const TeamCard = ({ img, name, position, linkedin, domain }) => (
  <div className="team-card">
    <div className="team-card-img">
      <img src={img} alt="team-card-img" />
    </div>
    <div className="team-card-content">
      <h4 className="domain">{domain}</h4>
      <h3 className="Name">{name}</h3>
      <h4 className="title">{position}</h4>
    </div>
    <ul className="social">
      <li>
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="fa fa-linkedin"
          aria-hidden="true"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
    </ul>
  </div>
);

export default TeamCard;
