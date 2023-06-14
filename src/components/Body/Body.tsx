import React, { ChangeEvent, useState } from "react";
import Input from "../forms/Input/Input";
import Select from "../forms/Select/Select";
import currency from "../../utils/currency";
import "../Body/Body.scss";

const Body: React.FC = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleInputChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue1(inputValue);
    currency();
  };

  const handleInputChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue2(inputValue);
    currency();
  };

  const handleSelectChange1 = (selectedValue: string) => {
    setSelectedOption1(selectedValue);
    currency();
  };

  const handleSelectChange2 = (selectedValue: string) => {
    setSelectedOption2(selectedValue);
    currency();
  };

  return (
    <div className="container">
      <Input
        name="input1"
        placeholder="Введіть число"
        value={inputValue1}
        onChange={handleInputChange1}
      />
      <Select
        value={selectedOption1}
        onChange={handleSelectChange1}
        options={["USD", "UAH", "EUR"]}
      />
      <Input
        name="input2"
        placeholder="Введіть число"
        value={inputValue2}
        onChange={handleInputChange2}
      />
      <Select
        value={selectedOption2}
        onChange={handleSelectChange2}
        options={["USD", "UAH", "EUR"]}
      />
    </div>
  );
};

export default Body;
