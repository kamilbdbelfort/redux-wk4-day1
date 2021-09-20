// src/pages/LoginForm.js
import axios from "axios";
import { useState } from "react";

export default function LoginForm(token) {
  const [searchEmail, set_searchEmail] = useState("");
  const [searchPassword, set_searchPassword] = useState("");
  const [setToken, set_getToken] = useState("");

  const checkLogin = async () => {
    try {
      const response = await axios
        .post("http://localhost:4000/auth/login", {
          email: searchEmail,
          password: searchPassword,
        })
        .then(function (response) {
          set_getToken(response.data["token"]);
          token = setToken;
          console.log(setToken);
        });
    } catch (e) {
      console.log(e.message);
    }
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
