import React from "react";
import camera from "../Mock-data/camera.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h1>InstaClone</h1>
        <img
          src={camera}
          alt="camera"
          width="35px"
          height="35px"
          className="camera"
        />
      </nav>
      <hr />
    </>
  );
}
