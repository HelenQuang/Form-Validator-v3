import "./App.css";
import Form from "./components/Form";
import UserTable from "./components/UserTable";
import React, { useState } from "react";
import { UserList } from "./models/UserList";

const App: React.FC = () => {
  const [usersList, setUsersList] = useState<UserList[]>([
    {
      key: "123",
      firstname: "Ha",
      lastname: "Quang",
      birth: "25/06/1997",
      email: "qvha.97@gmail.com",
      username: "CamTheMeow",
    },
  ]);

  const addNewUserHandler = (
    userFirstname: string,
    userLastname: string,
    userBirth: string,
    userEmail: string,
    userUsername: string
  ) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          key: Math.random().toString(),
          firstname: userFirstname,
          lastname: userLastname,
          birth: userBirth,
          email: userEmail,
          username: userUsername,
        },
      ];
    });
  };

  return (
    <div className="container">
      <Form />
      <UserTable users={usersList} />
    </div>
  );
};

export default App;
