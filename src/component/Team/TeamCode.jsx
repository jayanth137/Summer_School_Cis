import React from 'react';
import './TeamCode.css';
import overAllCoordinaters from './teamData';
import TeamCard from './TeamCard';
import { motion } from 'framer-motion';

const Teamcode = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="team"
      id="speakers"
    >
      <div className="team-body">
        <div className="team-header-container"></div>
        <div className="team-title">The Organizers </div>
        <hr />
        {window.innerWidth > 768 ? (
          <>
            <div className="team-members" style={{ margin: '5vh 0' }}>
              {overAllCoordinaters.slice(0, 3).map((member, index) => (
                <TeamCard
                  key={index}
                  img={member.Photo}
                  name={member.Name}
                  linkedin={member.linkedin}
                  position={member.position}
                  domain={member.Domain}
                />
              ))}
            </div>

            <div className="team-members" style={{ margin: '10vh 0' }}>
              {overAllCoordinaters.slice(3, 5).map((member, index) => (
                <TeamCard
                  key={index}
                  img={member.Photo}
                  name={member.Name}
                  linkedin={member.linkedin}
                  position={member.position}
                  domain={member.Domain}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="team-members" style={{ margin: '  0' }}>
            {overAllCoordinaters.map((member, index) => (
              <TeamCard
                key={index}
                img={member.Photo}
                name={member.Name}
                linkedin={member.linkedin}
                position={member.position}
                domain={member.Domain}
              />
            ))}
          </div>
        )}

        <div className="team-title">
          The Soul and Heart of <br /> IEEE SummerSchool
        </div>
        <hr />
        <div className="team-members" style={{ margin: '10vh  0' }}>
          {overAllCoordinaters.slice(5, 9).map((member, index) => (
            <TeamCard
              key={index}
              img={member.Photo}
              name={member.Name}
              linkedin={member.linkedin}
              position={member.position}
              domain={member.Domain}
            />
          ))}
        </div>
        <div className="team-members" style={{ margin: '10vh 0' }}>
          {overAllCoordinaters.slice(9, 13).map((member, index) => (
            <TeamCard
              key={index}
              img={member.Photo}
              name={member.Name}
              linkedin={member.linkedin}
              position={member.position}
              domain={member.Domain}
            />
          ))}
        </div>
        <div className="team-members" style={{ margin: '10vh 0' }}>
          {overAllCoordinaters.slice(13, 15).map((member, index) => (
            <TeamCard
              key={index}
              img={member.Photo}
              name={member.Name}
              linkedin={member.linkedin}
              position={member.position}
              domain={member.Domain}
            />
          ))}
        </div>
        {/* 
        <div className="hack4bengal__team-title">Leaders</div>
        <hr />
        <div className="hack4bengal_team-leaders">
          <div className="hack4bengal__team-members">
            {executives.slice(0, 9).map((member, index) => (
              <TeamCard
                key={index}
                img={member.Photo}
                name={member.Name}
                linkedin={member.linkedin}
                position={member.position}
                domain={member.Domain}
                idx={index}
              />
            ))}
          </div>
        </div>
        <div className="hack4bengal__team-title">Core Team</div>
        <hr />
        <div className="hack4bengal__team-members">
          {executives.slice(9).map((member, index) => (
            <TeamCard
              key={index}
              img={member.Photo}
              name={member.Name}
              linkedin={member.linkedin}
              position={member.position}
              domain={member.Domain}
            />
          ))}
        </div> */}
      </div>
    </motion.div>
  );
};

export default Teamcode;
