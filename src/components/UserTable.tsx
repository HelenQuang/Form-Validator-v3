import styles from "../UI/UserTable.module.css";
import { UserList } from "../models/UserList";
import React from "react";

interface UserTableProps {
  users: UserList[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <div className={styles["user-table"]}>
      <h2>Table of Users</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Username</th>
          </tr>

          {users.map((user) => (
            <tr key={user.key}>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.DOB}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
