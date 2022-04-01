import React from "react";

export default function OrderInfo() {
  return (
    <div className="order-info">
      <div className="f-1st">
        <p className="bold-class">Status</p>
        <p>&#9679; In Progress</p>
      </div>

      <div>
        <p className="bold-class">Door</p>
        <p>Mark</p>
      </div>

      <div className="l-1st">
        <p className="bold-class">Time</p>
        <p>
          <span className="bold-class">10:30</span> (25-05-2016)
        </p>
      </div>
    </div>
  );
}
