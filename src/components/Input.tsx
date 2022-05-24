import React, { useRef } from "react";

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  validateFn: (input: string) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  validateFn,
}) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const validateHandler = () => {
    validateFn(textInputRef.current!.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        ref={textInputRef}
        onChange={validateHandler}
      />
    </div>
  );
};

export default Input;
