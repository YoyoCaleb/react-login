// Filename - Home.jsx
import React from "react";
// Importing Link from react-router-dom to
// navigate to different end points.
import { Link } from "react-router-dom";
import Send2FA from "../Send2FA";

const Home = () => {
  return (
    <div>
      <h1>Register Pages</h1>
      <ul>
        <li>
          {/* Endpoint to route to Home component */}
          <Link to="/">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/success">Success</Link>
        </li>
        <Send2FA />
      </ul>
    </div>
  );
};

export default Home;
