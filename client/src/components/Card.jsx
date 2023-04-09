import React from "react";

const Card = () => {
  return (
    <div id="card">
      <div className="employee-info">
        <div className="employee-img">
          <img src="/images/icon1.png" alt="" />
        </div>
        <div className="employee-status">
          <div>Active Employee</div>
          <div>1081</div>
        </div>
      </div>
      <hr></hr>
      <div className="date">
        <span>8th April 2023</span>
      </div>
    </div>
  );
};

export default Card;
