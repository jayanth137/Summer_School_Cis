import React from "react";
import "./LiquidButton.css";

const LiquidButton = ({ children }) => {
  return (
    <div className="liquidButton">
      <span className="liquidButton__text">{children}</span>
      <span className="liquidButton__liquid"></span>
    </div>
  );
};

export default LiquidButton;
