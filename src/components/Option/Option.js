import React, { useState } from "react";
import "./option.css";
import { Link } from "react-router-dom";
const Option = () => {
  return (
    <div className="Option">
      <Link to="/" className="opt__form">
      Medical Details
      </Link>
      <Link to="/data" className="opt__data">
      Medical Archive
      </Link>
    </div>
  );
};

export default Option;