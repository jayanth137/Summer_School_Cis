import React from 'react';
import './FeeSection.css';
import { Link } from 'react-router-dom';

const PricingTable = () => {
  const packages = [
    {
      name: 'Regular Ticket (Accommodation + Food)',
      price: '₹ 2500',
      benefits: [
        'Includes Accomodation(6 Days-5 Nights), Meals(4 times) and Student Kit.',
        ' For Participants other than Chandigarh University.                                ',
      ],
    },
    {
      name: 'Regular Ticket  (No Accommodation / Food)',
      price: '₹ 1375',
      benefits: [
        'No Accomodation and Meal will be provided to the participants.',
        ' Particpants can be from Chandigarh University and Other Univeristies also',
      ],
    },
    {
      name: 'IEEE CUSB Members Ticket',
      price: '₹ 750',
      benefits: [
        'Must be an active member of IEEE CUSB.',
        ' No Accomodation/Food.',
      ],
    },
    {
      name: 'IEEE CIS CUSB Members Ticket',
      price: '₹ 550',
      benefits: [
        'Must be an active member of IEEE CIS CUSB.',
        ' No Accomodation/Food.',
      ],
    },
  ];

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
            </div>
            <div className="PriceFlex">
              <h2 className="price"> {pkg.price}</h2>
              <Link to="https://konfhub.com/summerschool#tickets">
                <button margin="auto">Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
