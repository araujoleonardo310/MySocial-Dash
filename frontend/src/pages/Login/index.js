import React, { useContext, useState } from "react";
import "./style.scss";

import LoginServices from "./services";

import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import { AuthContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const { setUsername, setTypeUser, setStatusUser } = useContext(AuthContext);

  const [user, setUser] = useState([]);

  function postParamsAndToast(name) {
    toast.success(`Bem-Vindo(a), ${name}`);
    navigate(`/home`);
  }

  function Validation(db_users) {
    const resp = db_users.filter(
      (item) => item.email === user.email && item.password === user.password
    );

    if (resp.length !== 0) {
      const { name, tipo } = resp[0];
      setUsername(name);
      setTypeUser(tipo);
      setStatusUser("active");
      postParamsAndToast(name);
      return;
    } else {
      toast.error("Verifique os dados informados.");
      return;
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const { data } = await LoginServices.login();
    return Validation(data);
  };

  return (
    <div className="container__login">
      <Toaster />
      <div className="container__form">
        <form onSubmit={handleLogin}>
          <div>
            <span><MdAlternateEmail /></span>
            <input
              type="email"
              placeholder="email@email.com"
              id="email"
              autoComplete="off"
              required="required"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>         

          <div>
            <span className="password"><RiLockPasswordLine /></span>
            <input
            type="password"
            placeholder="Senha"
            id="password"
            autoComplete="off"
            required="required"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          </div>  

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
