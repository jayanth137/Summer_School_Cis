import React from 'react';
import sponsers from './sponsersData';
import './SponsorsSection.css';
import { motion } from 'framer-motion';

const SponsorsSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: false }}
        className="sponsor__section6"
        id="sponsers"
      >
        <div className="sponsor__section6-body" style={{ maxWidth: '100%' }}>
          <div className="sponsor__section6-title">Event Sponsors</div>
          <hr />
          <div className="sponsor__section6-content">
            We would like to express our deepest appreciation to the partners
            and sponsors who will be graciously supporting us for the next event
            on behalf of the sponsor team. Their invaluable efforts will be
            critical in guaranteeing the event's successful operation, and we
            gratefully anticipate their assistance.
          </div>
          <div className="sponsor__section6-sponsers">
            {/* Community Partner           */}

            <div
              className="two-group-class"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div className="sponsor__section6-sponser-title sponser-two-dual">
                Community Partner
              </div>
              <div
                className="sponsor__section6-sponser-list gold"
                style={{ width: '900px' }}
              >
                <div className="sponsor__section6-sponser-image-track">
                  {sponsers.communitypartner.map((sponser, index) => (
                    <a href={sponser.link}>
                      <img
                        style={{
                          width: '220px',
                          height: '100px',
                          objectFit: 'contain',
                        }}
                        key={index}
                        src={sponser.img}
                        alt={sponser.alt}
                      />
                      <div style={{ textAlign: 'center' }}>
                        <p style={{ paddingTop: '2px' }}>
                          {sponser.txt.split('\n').map((line, index) => (
                            <React.Fragment key={index}>{line}</React.Fragment>
                          ))}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Venue Partner */}
            <div
              className="two-group-class"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <br /> <br />
              <div className="sponsor__section6-sponser-title sponser-two-dual">
                Venue Partner
              </div>
              <div className="sponsor__section6-sponser-list platinum">
                <div className="sponsor__section6-sponser-image-track">
                  {sponsers.venuepartner.map((sponser, index) => (
                    <a href={sponser.link}>
                      <img
                        style={{
                          width: '220px',
                          height: '100px',
                          objectFit: 'contain',
                        }}
                        key={index}
                        src={sponser.img}
                        alt={sponser.alt}
                      />
                      <div style={{ textAlign: 'center' }}>
                        <p style={{ paddingTop: '2px' }}>
                          {sponser.txt.split('\n').map((line, index) => (
                            <React.Fragment key={index}>{line}</React.Fragment>
                          ))}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Platform PArtner */}
            <div
              className="two-group-class"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <br /> <br />
              <div className="sponsor__section6-sponser-title sponser-two-dual">
                Platform Partner
              </div>
              <div className="sponsor__section6-sponser-list platinum">
                <div className="sponsor__section6-sponser-image-track">
                  {sponsers.platformpartner.map((sponser, index) => (
                    <a href={sponser.link}>
                      <img
                        style={{
                          width: '220px',
                          height: '100px',
                          objectFit: 'contain',
                        }}
                        key={index}
                        src={sponser.img}
                        alt={sponser.alt}
                      />
                      <div style={{ textAlign: 'center' }}>
                        <p style={{ paddingTop: '2px' }}>
                          {sponser.txt.split('\n').map((line, index) => (
                            <React.Fragment key={index}>{line}</React.Fragment>
                          ))}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="two-group-class"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div className="sponsor__section6-sponser-title sponser-two-dual">
                Brand Kit Partner
              </div>
              <div
                className="sponsor__section6-sponser-list gold"
                style={{ width: '600px' }}
              >
                <div className="sponsor__section6-sponser-image-track">
                  {sponsers.Brandkitpartner.map((sponser, index) => (
                    <a href={sponser.link}>
                      <img
                        style={{
                          width: '220px',
                          height: '100px',
                          objectFit: index === 0 ? 'contain' : 'cover',
                        }}
                        key={index}
                        src={sponser.img}
                        alt={sponser.alt}
                      />
                      <div style={{ textAlign: 'center' }}>
                        <p style={{ paddingTop: '2px' }}>
                          {sponser.txt.split('\n').map((line, index) => (
                            <React.Fragment key={index}>{line}</React.Fragment>
                          ))}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="sponsor__section6-content"
            style={{
              marginTop: '50px',
              fontWeight: 'bold',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {' '}
            <h2>More Sponsors To be Declared Soon</h2>
          </div>
          <div
            className="sponsor__section6-content"
            style={{ marginTop: '50px', fontWeight: 'bold' }}
          >
            Want to sponsor us? <br />
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc2AH7FlzurnOJqYFTdF3g6c_ykrWIGwSeDt7S-SHJZYVJa8A/viewform"
              className="link-us-sponsor"
              style={{ color: '#E13B3C' }}
            >
              Contact us
            </a>
          </div>{' '}
        </div>
      </motion.div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default SponsorsSection;
