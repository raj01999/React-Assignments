import React from "react";

export default function Header({ arrow }) {
  return (
    <div className="header">
      <div className="arrow">{arrow}</div>

      <div className="head-title">
        <h3 style={{ margin: "10px" }}>AlanFord</h3>
        <p style={{ margin: "10px" }}>00005152</p>
      </div>

      <button
        className="print"
        onClick={() => {
          window.print();
        }}
      >
        Print
      </button>
    </div>
  );
}
