import React, { useState } from "react";
import "./style.scss";

import Container from "../../components/Container";
import RegisterUsersAndVideos from "./services";
import { Toaster } from "react-hot-toast";

const Cadastro = () => {
  const [UserAndVideo, setUserAndVideo] = useState([{}]);

  const handleRegister = async (event) => {
    event.preventDefault();
    const { data } = await RegisterUsersAndVideos.register(UserAndVideo);
    console.log(data)
  };
  return (
    <Container
      title="Cadastro"
      children={
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
                />

                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="name"
                  onChange={(e) =>
                    setUserAndVideo({ ...UserAndVideo, email: e.target.value })
                  }
                />

                <div>
                  <label htmlFor="typeAccont">Tipo</label>
                  <select
                    id="typeAccont"
                    onChange={(e) =>
                      setUserAndVideo({
                        ...UserAndVideo,
                        typeAccont: e.target.value,
                      })
                    }
                  >
                    <option value="administrador">Administrdor</option>
                    <option value="usuario">Usuário</option>
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
                />
              </fieldset>
            </div>

            <div className="fildset__container">
              <fieldset>
                <legend>Adicionar Vídeos</legend>
                <button className="submit">Enviar</button>

                <label htmlFor="link">Video</label>
                <input
                  type="url"
                  id="link"
                  onChange={(e) =>
                    setUserAndVideo({ ...UserAndVideo, link: e.target.value })
                  }
                />
                <label htmlFor="title">Título</label>
                <input
                  type="text"
                  id="title"
                  onChange={(e) =>
                    setUserAndVideo({ ...UserAndVideo, title: e.target.value })
                  }
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
                />
              </fieldset>
            </div>
          </form>
        </div>
      }
    />
  );
};

export default Cadastro;
