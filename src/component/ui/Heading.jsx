import React from "react";

const Heading = ({ text }) => (
  <h1
    contentEditable
    className="text-5xl md:text-6xl font-bold text-white outline-none"
  >
    {text}
  </h1>
);

export default Heading;
