import React, { useState, ChangeEvent } from "react";
import "../Input/Input.scss";

type Props = {
  placeholder: string;
  name: string;
  type?: string;
  value: any;
  onChange: any;
};

const Input: React.FC<Props> = ({
  type = "text",
  placeholder,
  name,
  value,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      className="input-field"
    />
  );
};

export default Input;
