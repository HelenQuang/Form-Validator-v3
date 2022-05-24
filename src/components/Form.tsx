import styles from "../UI/FormControl.module.css";
import Input from "./Input";
import Button from "./Button";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface FormProps {
  addNewUserHandler: (
    firstName: string,
    lastName: string,
    DOB: string,
    email: string,
    username: string
  ) => void;
}

const Form: React.FC<FormProps> = ({ addNewUserHandler }) => {
  //Validate Firstname
  const [firstName, setFirstName] = useState<string>("");
  const [isFirstNameValid, setIsFirstNameValid] = useState<Boolean | null>(
    null
  );
  const validateFirstNameFn = (input: string) => {
    setFirstName(input);
    if (input.trim() !== "") {
      setIsFirstNameValid(true);
    } else {
      setIsFirstNameValid(false);
    }
  };

  //Validate Lastname
  const [lastName, setLastName] = useState<string>("");
  const [isLastNameValid, setIsLastNameValid] = useState<Boolean | null>(null);
  const validateLastNameFn = (input: string) => {
    setLastName(input);
    if (input.trim() !== "") {
      setIsLastNameValid(true);
    } else {
      setIsLastNameValid(false);
    }
  };

  //Validate DOB
  const [DOB, setDOB] = useState<string>("");
  const [isDOBValid, setIsDOBValid] = useState<Boolean | null>(null);
  const validateDOBFn = (input: string) => {
    setDOB(input);
    if (input.trim() !== "") {
      setIsDOBValid(true);
    } else {
      setIsDOBValid(false);
    }
  };

  //Validate Email
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<Boolean | null>(null);
  const validateEmailFn = (input: string) => {
    setEmail(input);
    if (input.trim() !== "") {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  //Validate Username
  const [username, setUsername] = useState<string>("");
  const [isUsernameValid, setIsUsernameValid] = useState<Boolean | null>(null);
  const validateUsernameFn = (input: string) => {
    setUsername(input);
    if (input.trim() !== "") {
      setIsUsernameValid(true);
    } else {
      setIsUsernameValid(false);
    }
  };

  //Validate Password1
  const [password1, setPassword1] = useState<string>("");
  const [isPassword1Valid, setIsPassword1Valid] = useState<Boolean | null>(
    null
  );
  const validatePassword1Fn = (input: string) => {
    setPassword1(input);
    if (input.trim() !== "") {
      setIsPassword1Valid(true);
    } else {
      setIsPassword1Valid(false);
    }
  };

  //Validate Password2
  const [password2, setPassword2] = useState<string>("");
  const [isPassword2Valid, setIsPassword2Valid] = useState<Boolean | null>(
    null
  );
  const validatePassword2Fn = (input: string) => {
    setPassword2(input);
    if (input.trim() !== "") {
      setIsPassword2Valid(true);
    } else {
      setIsPassword2Valid(false);
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !isFirstNameValid ||
      !isLastNameValid ||
      !isDOBValid ||
      !isEmailValid ||
      !isUsernameValid ||
      !isPassword1Valid ||
      !isPassword2Valid
    ) {
      toast.error("Please fill in all information");
      return;
    }

    const DOBRegex =
      /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
    if (!DOBRegex.test(DOB.trim())) {
      toast.error("Date of birth is invalid");
      return;
    }

    const EmailRegex =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\].,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!EmailRegex.test(email.trim())) {
      toast.error("Email is invalid");
      return;
    }

    if (username.length < 5 && username.length > 10) {
      toast.error(" Username must be between 5 and 10 characters");
      return;
    }

    if (password1.length < 6 && password1.length > 12) {
      toast.error("Password must be between 6 and 12 characters");
      return;
    }

    if (password1 !== password2) {
      toast.error("Passwords do not match");
      return;
    }

    //Add new user
    addNewUserHandler(firstName, lastName, DOB, email, username);

    //Reset input
    setFirstName("");
    setLastName("");
    setDOB("");
    setEmail("");
    setUsername("");
    setPassword1("");
    setPassword2("");
  };

  return (
    <form onSubmit={submitHandler} className={styles["form-control"]}>
      <h2>Register With Us</h2>

      <Input
        label={"First Name"}
        placeholder={"Enter your first name"}
        validateFn={validateFirstNameFn}
        type={"text"}
        value={firstName}
      />

      <Input
        label={"Last Name"}
        placeholder={"Enter your last name"}
        validateFn={validateLastNameFn}
        type={"text"}
        value={lastName}
      />

      <Input
        label={"Date Of Birth"}
        placeholder={"DD/MM/YYYY"}
        validateFn={validateDOBFn}
        type={"text"}
        value={DOB}
      />

      <Input
        label={"Email"}
        placeholder={"Enter your email"}
        validateFn={validateEmailFn}
        type={"text"}
        value={email}
      />

      <Input
        label={"Username"}
        placeholder={"Enter your username"}
        validateFn={validateUsernameFn}
        type={"text"}
        value={username}
      />

      <Input
        label={"Password"}
        placeholder={"Enter your password"}
        validateFn={validatePassword1Fn}
        type={"password"}
        value={password1}
      />

      <Input
        label={"Confirm Password"}
        placeholder={"Enter your password again"}
        validateFn={validatePassword2Fn}
        type={"password"}
        value={password2}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
