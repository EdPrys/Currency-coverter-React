import React, { ChangeEvent } from "react";
import "../Select/Select.scss";

type Props = {
  value: string;
  onChange: (selectedValue: string) => void;
  options: string[];
};

const Select: React.FC<Props> = ({ value, onChange, options }) => {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <select
      className="select-field"
      value={value}
      onChange={handleSelectChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
