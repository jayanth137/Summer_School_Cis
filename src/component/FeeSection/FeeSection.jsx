import React from 'react';
import './FeeSection.css';
import { Link } from 'react-router-dom';
import { packages } from './FeeSectiondata';

const PricingTable = () => {
  return (
    <div id="Fee">
      <h1>
        Choose Your <span className="Ticket">Ticket</span>
      </h1>
      <div className="pricing-card-container">
        {packages.map((pkg, index) => (
          <div key={index} className="pricing-card">
            <div className="Conflex">
              <h4>{pkg.name}</h4>

              <ul>
                {pkg.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <h5>{pkg.Team}</h5>
            </div>
            <div className="PriceFlex">
              <h2 className="price"> {pkg.price}</h2>
              <Link to="https://konfhub.com/summerschool#tickets">
                <button>Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
