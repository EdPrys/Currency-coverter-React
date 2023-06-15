import React, { ChangeEvent } from "react";
import styles from "./Select.module.scss";

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};

const Select: React.FC<Props> = ({ value, onChange, options }) => {
  return (
    <select className={styles.selectField} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
