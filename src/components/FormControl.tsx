import styles from "../UI/FormControl.module.css";
import Input from "./Input";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
import React, { useState } from "react";
import useInput from "../hooks/useInput";

interface FormControlProps {
  onAddNewUser: (
    enteredFirstname: string,
    enteredLastname: string,
    enteredDOB: string,
    enteredEmail: string,
    enteredUsername: string,
    enteredPassword1: string,
    enteredPassword2: string
  ) => void;
}

interface ErrorState {
  title: string | null;
  message: string | null;
}

const FormControl: React.FC<FormControlProps> = ({ onAddNewUser }) => {
  const {
    enteredValue: enteredFirstname,
    valueIsValid: enteredFirstnameIsValid,
    valueChangeHandler: firstnameChangeHandler,
    reset: resetFirstname,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredLastname,
    valueIsValid: enteredLastnameIsValid,
    valueChangeHandler: lastnameChangeHandler,
    reset: resetLastname,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredDOB,
    valueIsValid: enteredDOBIsValid,
    valueChangeHandler: DOBChangeHandler,
    reset: resetDOB,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredUsername,
    valueIsValid: enteredUsernameIsValid,
    valueChangeHandler: usernameChangeHandler,
    reset: resetUsername,
  } = useInput((value) => value.trim() !== "");
  const fn = (value: any) => value.trim() !== "";

  const {
    enteredValue: enteredPassword1,
    valueIsValid: enteredPassword1IsValid,
    valueChangeHandler: password1ChangeHandler,
    reset: resetPassword1,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredPassword2,
    valueIsValid: enteredPassword2IsValid,
    valueChangeHandler: password2ChangeHandler,
    reset: resetPassword2,
  } = useInput((value) => value.trim() !== "");

  const [error, setError] = useState<ErrorState>();

  const closeErrorModal = () => {
    setError({ title: null, message: null });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Check required:
    if (
      !enteredFirstnameIsValid ||
      !enteredLastnameIsValid ||
      !enteredDOBIsValid ||
      !enteredEmailIsValid ||
      !enteredUsernameIsValid ||
      !enteredPassword1IsValid ||
      !enteredPassword2IsValid
    ) {
      setError({ title: "Empty input", message: "" });
      return;
    }

    //Check DOB validation
    const DOBRegex =
      /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    if (!DOBRegex.test(enteredDOB.trim())) {
      setError({ title: "Date of Birth", message: "" });
      return;
    }

    //Check email validation
    const emailRegex =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\].,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!emailRegex.test(enteredEmail.trim())) {
      setError({ title: "Email", message: "" });
      return;
    }

    //Check username length
    if (enteredUsername.length < 5) {
      setError({
        title: "Username",
        message: "- Username must be at least 5 characters",
      });
      return;
    } else if (enteredUsername.length > 10) {
      setError({
        title: "Username",
        message: "- Username must be less than 10 characters",
      });
      return;
    }

    //Check password length
    if (enteredPassword1.length < 6) {
      setError({
        title: "Password",
        message: "- Password must be at least 6 characters",
      });
      return;
    } else if (enteredPassword1.length > 10) {
      setError({
        title: "Password",
        message: "- Password must be less than 10 characters",
      });
      return;
    }

    //Check Password match:
    if (enteredPassword1 !== enteredPassword2) {
      setError({ title: "Password", message: "- They do not match" });
      return;
    }

    onAddNewUser(
      enteredFirstname,
      enteredLastname,
      enteredDOB,
      enteredEmail,
      enteredUsername,
      enteredPassword1,
      enteredPassword2
    );

    //Empty input
    resetFirstname();
    resetLastname();
    resetDOB();
    resetEmail();
    resetUsername();
    resetPassword1();
    resetPassword2();
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          closeModal={closeErrorModal}
        />
      )}

      <form onSubmit={submitHandler} className={styles["form-control"]}>
        <h2>Register With Us</h2>
        <Input
          label={"First Name"}
          placeholder={"Enter your first name"}
          type={"text"}
          onChange={(e) => firstnameChangeHandler}
          value={enteredFirstname}
        />

        <Input
          label={"Last Name"}
          placeholder={"Enter your last name"}
          type={"text"}
          onChange={lastnameChangeHandler}
          value={enteredLastname}
        />

        <Input
          label={"Date Of Birth"}
          placeholder={"DD/MM/YYYY"}
          type={"text"}
          onChange={DOBChangeHandler}
          value={enteredDOB}
        />

        <Input
          label={"Email"}
          placeholder={"Enter your email"}
          type={"text"}
          onChange={emailChangeHandler}
          value={enteredEmail}
        />

        <Input
          label={"Username"}
          placeholder={"Enter your username"}
          type={"text"}
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />

        <Input
          label={"Password"}
          placeholder={"Enter your password"}
          type={"password"}
          onChange={password1ChangeHandler}
          value={enteredPassword1}
        />

        <Input
          label={"Confirm Password"}
          placeholder={"Enter your password again"}
          type={"password"}
          onChange={password2ChangeHandler}
          value={enteredPassword2}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default FormControl;
