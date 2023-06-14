import React, { ChangeEvent } from "react";
import "../Body/Body.scss";
import Input from "../forms/Input/Input";
import Select from "../forms/Select/Select";
import currency from "../../utils/currency";

const Body: React.FC = () => {
  const handleInputChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    currency(inputValue);
  };

  const handleInputChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    currency(inputValue);
  };

  return (
    <div className="container">
      <Input
        name="input1"
        placeholder="Введіть число"
        onChange={handleInputChange1}
        value={undefined}
      />
      <Select></Select>
      <Input
        name="input2"
        placeholder="Введіть число"
        onChange={handleInputChange2}
        value={undefined}
      />
      <Select></Select>
    </div>
  );
};

export default Body;
