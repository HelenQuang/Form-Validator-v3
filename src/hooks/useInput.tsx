import { useState } from "react";

type useInputProps = {
  validateValue: (value: any) => boolean;
};

const useInput = ({ validateValue }: useInputProps) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const valueIsValid = validateValue(enteredValue);

  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  const reset = () => {
    setEnteredValue("");
  };

  return {
    enteredValue,
    valueIsValid,
    valueChangeHandler,
    reset,
  };
};

export default useInput;
