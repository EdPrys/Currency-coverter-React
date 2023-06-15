import React, { ChangeEvent } from "react";
import styles from "./Input.module.scss";

type Props = {
  placeholder: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; // TODO: add to onChange options
};

const Input: React.FC<Props> = ({
  type = "text",
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      className={styles.inputField}
      onChange={onChange}
    />
  );
};

export default Input;
