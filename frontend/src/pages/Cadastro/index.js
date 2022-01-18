import React, { useEffect, useState } from "react";
import "./style.scss";

import RegisterUsersAndVideos from "./services";
import Container from "../../components/Container";

const Cadastro = () => {
  const [UserAndVideo, setUserAndVideo] = useState([{}]);

  const handleRegister = async (event) => {
    event.preventDefault();
    await RegisterUsersAndVideos.register(UserAndVideo);
  };
  
  return (
    <Container title="Cadastro">
      <div className="container__register">
        <form className="form" onSubmit={handleRegister}>
          <div className="fildset__container">
            <fieldset>
              <legend>Adicionar usuários</legend>
              <button className="submit">Enviar</button>

              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                onChange={(e) =>
                  setUserAndVideo({ ...UserAndVideo, name: e.target.value })
                }
                required
              />

              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="name"
                onChange={(e) =>
                  setUserAndVideo({ ...UserAndVideo, email: e.target.value })
                }
                required
              />

              <div>
                <label htmlFor="typeAccont">Tipo</label>
                <select
                  id="typeAccont"
                  onChange={(e) =>
                    setUserAndVideo({
                      ...UserAndVideo,
                      tipo: e.target.value,
                    })
                  }
                >
                  <option value="admin">Administrdor</option>
                  <option value="user">Usuário</option>
                </select>
              </div>

              <label htmlFor="password">Escolha uma senha</label>
              <input
                type="password"
                id="password"
                onChange={(e) =>
                  setUserAndVideo({
                    ...UserAndVideo,
                    password: e.target.value,
                  })
                }
                required
              />
            </fieldset>
          </div>

          <div className="fildset__container">
            <fieldset>
              <legend>Adicionar Vídeos</legend>
              <button className="submit">Enviar</button>

              <label htmlFor="url">Video</label>
              <input
                type="url"
                id="url"
                onChange={(e) =>
                  setUserAndVideo({ ...UserAndVideo, url: e.target.value })
                }
                required
              />
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                onChange={(e) =>
                  setUserAndVideo({ ...UserAndVideo, title: e.target.value })
                }
                required
              />
              <label htmlFor="description">Descrição</label>
              <input
                type="description"
                onChange={(e) =>
                  setUserAndVideo({
                    ...UserAndVideo,
                    description: e.target.value,
                  })
                }
                required
              />
            </fieldset>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Cadastro;
