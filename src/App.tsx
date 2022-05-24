import "./App.css";
import Form from "./components/Form";
import UserTable from "./components/UserTable";
import React, { useState } from "react";
import { UserList } from "./models/UserList";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  const [usersList, setUsersList] = useState<UserList[]>([
    {
      key: "123",
      firstName: "Ha",
      lastName: "Quang",
      DOB: "25/06/1997",
      email: "qvha.97@gmail.com",
      username: "CamTheMeow",
    },
  ]);

  const addNewUserHandler = (
    firstName: string,
    lastName: string,
    DOB: string,
    email: string,
    username: string
  ) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          key: Math.random().toString(),
          firstName: firstName,
          lastName: lastName,
          DOB: DOB,
          email: email,
          username: username,
        },
      ];
    });
  };

  return (
    <div className="container">
      <ToastContainer position="top-center" autoClose={7000} />
      <Form addNewUserHandler={addNewUserHandler} />
      <UserTable users={usersList} />
    </div>
  );
};

export default App;
