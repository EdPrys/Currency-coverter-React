import React from "react";

import styles from "./Select.module.scss";

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: string[];
};

const Select: React.FC<Props> = ({ value, onChange, options, ...rest }) => {
  return (
    <select
      className={styles.selectField}
      value={value}
      onChange={onChange}
      {...rest}
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
