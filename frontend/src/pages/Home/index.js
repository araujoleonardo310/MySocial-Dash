import React, { useEffect, useState } from "react";
import "./style.scss";

import Container from "../../components/Container";
import UsersServices from "./services";

const Home = () => {
  const [users, setUsers] = useState([]);

  const UsersDash = async () => {
    const { data } = await UsersServices.listUsers();
    setUsers(data);
  };

  useEffect(() => {
    UsersDash();
  }, [users]);

  return (
    <Container
      section="Home"
      DashUsers={
        <div className="container__table">
          <h2>Usuários</h2>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>nome</th>
                <th>e-mail</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ id, name, email, typeAccont }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{typeAccont}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
      DashVideos={
        <div className="container__videos">
          <h2>Ultimos lançamentos</h2>
          {users.map(({ link, title, description }) => (
            <section>
              <div className="video">
                <video
                  width="300px"
                  loop="true"
                  autoplay="autoplay"
                  controls
                  muted
                >
                  <source src={link} type="video/mp4" />
                </video>
              </div>
              <div className="descriptions">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </section>
          ))}
        </div>
      }
    />
  );
};

export default Home;
