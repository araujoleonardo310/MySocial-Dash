import React, { useState } from "react";

import { history } from "../../components/CreateHistory";
import { LoginSignIn } from "../../Routes/Auth";
import LoginServices from "./services";

import "./style.scss";

const Login = () => {
  const [user, setUser] = useState([]);
  

  const handleLoginSignIn = async () => {
    const { data } = await LoginServices.login();
    if (
      user.email === data[0].email &&
      user.password === data[0].password 
    ) {
      LoginSignIn(data[0].name, data[0].typeAccont);
      history.push("/home");
    }
  };

  return (
    <div className="container__login">
      <div className="container__form">
        <form>
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
          <button type="submit" onClick={handleLoginSignIn}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
