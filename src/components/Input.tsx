import React, { useRef } from "react";

interface InputProps {
  label: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} ref={textInputRef} />
    </div>
  );
};

export default Input;
