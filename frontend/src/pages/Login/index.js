import React, { useState } from "react";
import "./style.scss";

import LoginServices from "./services";

import { LoginSignIn } from "../../Routes/Root/Auth";
import { history } from "../../Routes/Root/CreateHistory";


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
