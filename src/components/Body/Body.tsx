import React, { ChangeEvent, useState } from "react";
import Input from "../forms/Input/Input";
import Select from "../forms/Select/Select";
import { currency } from "../../utils/currency";
import styles from "./Body.module.scss";

const OPTIONS_SELECTED = ["USD", "UAH", "EUR"];

const Body: React.FC = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [selectedOption1, setSelectedOption1] = useState(OPTIONS_SELECTED[0]);
  const [selectedOption2, setSelectedOption2] = useState(OPTIONS_SELECTED[0]);

  const handleInputChange1 = async (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const convertedValue = await currency({
      input: inputValue,
      selects: [selectedOption1, selectedOption2],
    });
    setInputValue2(convertedValue); // TODO: set converted value in - setInputValue2
    setInputValue1(inputValue); // TODO: copy velue in setInputValue1
    currency({
      input: inputValue,
      selects: [selectedOption1, selectedOption2],
    });
  };

  const handleInputChange2 = async (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const convertedValue = await currency({
      input: inputValue,
      selects: [selectedOption1, selectedOption2],
    });
    setInputValue1(convertedValue); // TODO: set converted value in - setInputValue1
    setInputValue2(inputValue); // TODO: copy velue in setInputValue2
  };

  const handleSelectChange1 = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption1(selectedValue);
    // currency();
  };

  const handleSelectChange2 = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption2(selectedValue);
    // currency();
  };

  return (
    <div className={styles.container}>
      <Input
        name="input1"
        placeholder="Введіть число"
        value={inputValue1}
        onChange={handleInputChange1}
      />
      <Select
        value={selectedOption1}
        onChange={handleSelectChange1}
        options={OPTIONS_SELECTED}
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
        options={OPTIONS_SELECTED}
      />
    </div>
  );
};

export default Body;
