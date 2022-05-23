import styles from "../UI/FormControl.module.css";
import Input from "./Input";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
import React, { useState, useRef } from "react";
// import useInput from "../hooks/useInput";

const Form: React.FC = () => {
  const [error, setError] = useState();

  const [isFirstNameValid, setIsFirstNameValid] = useState<boolean | null>(
    null
  );
  const validateFirstName = (value: string) => {
    const validValue = value.trim() !== "";
    return validValue;
  };

  return (
    <div>
      {/* {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          closeModal={closeErrorModal}
        />
      )} */}

      <form onSubmit={submitHandler} className={styles["form-control"]}>
        <h2>Register With Us</h2>

        <Input label={"First Name"} placeholder={"Enter your first name"} />

        <Input label={"Last Name"} placeholder={"Enter your last name"} />

        <Input label={"Date Of Birth"} placeholder={"DD/MM/YYYY"} />

        <Input label={"Email"} placeholder={"Enter your email"} />

        <Input label={"Username"} placeholder={"Enter your username"} />

        <Input label={"Password"} placeholder={"Enter your password"} />

        <Input
          label={"Confirm Password"}
          placeholder={"Enter your password again"}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Form;
