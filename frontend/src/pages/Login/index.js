import React, { useState } from "react";

import { history } from "../../Root/CreateHistory";
import { LoginSignIn } from "../../Root/Auth";
import LoginServices from "./services";

import "./style.scss";

const Login = () => {
  const [user, setUser] = useState([]);
  

  const handleLoginSignIn = async (event) => {
    event.preventDefault()
    const { data } = await LoginServices.login();

    if (
      user.email === data[0].email &&
      user.password === data[0].password 
    ) {
      LoginSignIn(true);
      history.push("/home");
    }
  };

  return (
    <div className="container__login">
      <div className="container__form">
        <form onSubmit={handleLoginSignIn}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            id="email"
            required="required"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            id="password"
            required="required"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
