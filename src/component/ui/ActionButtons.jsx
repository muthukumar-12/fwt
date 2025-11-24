import React from "react";
import Button from "./Button";

const ActionButtons = () => (
  <div className="flex gap-4 pt-4">
    <Button label="View My Work" variant="primary" />
    <Button label="Contact Me" variant="secondary" />
  </div>
);

export default ActionButtons;
