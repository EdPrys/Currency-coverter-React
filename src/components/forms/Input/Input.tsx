import React from "react";

import styles from "./Input.module.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  // Add custom types
};

const Input: React.FC<Props> = ({
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  ...rest
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      className={styles.inputField}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
