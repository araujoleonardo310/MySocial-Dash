import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import LoginServices from "./services";

import "./style.scss";

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState([]);

  const Auth = async (e) => {
    e.preventDefault();
    const { data } = await LoginServices.login();

    if (user.email == data[0].email && user.password == data[0].password) {
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
          <label htmlFor="typeConta" className="typeConta">
            Tipo de conta
          </label>
          <select
            id="typeConta"
            onChange={(event) => setUser({ ...user, type: event.target.value })}
          >
            <option value="administrador">Administrador</option>
            <option value="usuario">Usuário</option>
          </select>
          <button onClick={(e) => Auth(e)}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
