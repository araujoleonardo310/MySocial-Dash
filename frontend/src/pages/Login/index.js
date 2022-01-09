import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import LoginServices from "./services";

import "./style.scss";

const Login = () => {
  const history = useHistory();

  const [user, setUser] = useState([]);

  const Auth = async (event) => {
    event.preventDefault();
    const { data } = await LoginServices.login();

    if (user.email === data[0].email && user.password === data[0].password) {
      history.push("/home");
    }
  };

  return (
    <div className="container__login">
      <div className="container__form">
        <form>
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            placeholder="Digite seu e-mail"
            id="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            id="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
