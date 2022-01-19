import React, { useEffect, useState } from "react";
import "./style.scss";

import UsersServices from "./services";
import Container from "../../components/Container";

const Home = () => {
  const [users, setUsers] = useState([]);
  
  const GetUsers = async () => {
    const { data } = await UsersServices.listUsers();
    setUsers(data);
  };

  useEffect(() => {
    GetUsers();
  }, []);

  return (
    <Container title="Home">
      <>
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
              {users.map(({ id, name, email, tipo }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="container__videos">
          <h2>Ultimos lançamentos</h2>
          <div className="list__videos">
            {users.map(({ id, url, title, description }) => (
              <section key={id} className="card-videos">
                <div className="video">
                  <video loop="true" controls muted className="video-styled">
                    <source src={url} type="video/mp4" />
                  </video>
                </div>
                <div className="descriptions">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </>
    </Container>
  );
};

export default Home;
