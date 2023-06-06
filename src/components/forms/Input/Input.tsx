import React, { useState, ChangeEvent } from "react";
import "../Input/Input.scss";

const Input: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <div className="input-block">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="input-field"
      />
      <select
        value={selectedCurrency}
        onChange={handleCurrencyChange}
        className="select-field"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="UAH">UAH</option>
      </select>
    </div>
  );
};

export default Input;
