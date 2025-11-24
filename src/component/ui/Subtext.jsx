import React from "react";

const Subtext = ({ text }) => (
  <p
    contentEditable
    className="text-lg opacity-80 max-w-md text-white outline-none"
  >
    {text}
  </p>
);

export default Subtext;
