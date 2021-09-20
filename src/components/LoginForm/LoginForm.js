// src/pages/LoginForm.js
import axios from "axios";
import { useState } from "react";

export default function LoginForm(props) {
  const [searchEmail, set_searchEmail] = useState("");
  const [searchPassword, set_searchPassword] = useState("");

  const checkLogin = async () => {
    // try {
    //   const response = await axios
    //     .post("/loginForm", {
    //       email: `${set_searchEmail}`,
    //       password: `${set_searchPassword}`,
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //     });
    // } catch (e) {
    //   console.log(e.message);
    // }
    console.log(`email: ${searchEmail}, password: ${searchPassword}`);
  };

  return (
    <div>
      <h1>Login Form Page</h1>
      <div>
        <p>
          <label>New email</label>
          <input
            value={searchEmail}
            onChange={(e) => set_searchEmail(e.target.value)}
          />
        </p>
        <p>
          <label>New password</label>
          <input
            value={searchPassword}
            onChange={(e) => set_searchPassword(e.target.value)}
          />
        </p>
        <button onClick={checkLogin}>Submit</button>
      </div>
    </div>
  );
}
