import React, { ChangeEvent } from "react";
import "../Input/Input.scss";

type Props = {
  placeholder: string;
  name: string;
  type?: string;
  value: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; // Додано тип для onChange
};

const Input: React.FC<Props> = ({
  type = "text",
  placeholder,
  name,
  value,
  onChange, // Додано onChange з властивостей
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      className="input-field"
      onChange={onChange} // Передано onChange до події onChange у <input>
    />
  );
};

export default Input;
