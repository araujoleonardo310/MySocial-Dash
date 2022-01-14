import React, { useState } from "react";
import "./style.scss";

import LoginServices from "./services";

import { LoginSignIn } from "../../Routes/Auth";
import { useHistory } from "react-router-dom";

import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState([]);

  const handleLoginSignIn = async (event) => {
    event.preventDefault();
    const { data } = await LoginServices.login();

    const resp = data.filter(
      (item) => item.email === user.email && item.password === user.password
    );

    if (resp.length !== 0) {
      LoginSignIn();
      toast.success("Bem-Vindo(a).");
      history.push("/home");
    } else {
      toast.error("Verifique os dados informados.");
    }
  };

  return (
    <div className="container__login">
      <Toaster />
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
