import React from "react";
import "../Body/Body.scss";
import Input from "../forms/Input/Input";

const Body: React.FC = () => {
  return (
    <div className="container">
      <Input />
      <Input />
    </div>
  );
};

export default Body;
