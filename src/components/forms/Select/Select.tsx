import React from "react";
import "../Select/Select.scss";
import currency from "../../../utils/currency";

const Select: React.FC = () => {
  return (
    <select className="select-field">
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="UAH">UAH</option>
    </select>
  );
};

export default Select;
