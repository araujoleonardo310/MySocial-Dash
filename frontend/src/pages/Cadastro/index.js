import React, { useState } from "react";
import "./style.scss";

import { toast, Toaster } from "react-hot-toast";

import RegisterUsersAndVideos from "./services";
import Container from "../../components/Container";

const Cadastro = () => {
  const [UserAndVideo, setUserAndVideo] = useState({
    name: "",
    email: "",
    password: "",
    tipo: "admin",
    url: "",
    title: "",
    description: "",
  });

  function resetValues(){
    setUserAndVideo({
        name: "",
        email: "",
        password: "",
        tipo: "admin",
        url: "",
        title: "",
        description: "",
      }
    )
  }


  const Validation = async (lastUsers) => {
    const result = lastUsers.filter(
      (item) => item.email === UserAndVideo.email
    );

    if (!result.length) {
      toast.success("Dados enviado!");
      await RegisterUsersAndVideos.register(UserAndVideo);
      resetValues()
      console.log("Registration!");
      return;
    } else {
      toast.error("Verifique os dados informados.");
      console.log("ERROR");
      return;
    }
  };

  const handleForm = async (event) => {
    event.preventDefault();
    const { data } = await RegisterUsersAndVideos.lastUsers();
    Validation(data, UserAndVideo);
  };

  return (
    <Container title="Cadastro">
      <Toaster />
      <div className="container__register">
        <form className="form" onSubmit={handleForm}>
          <div className="fildset__container">
            <fieldset>
              <legend>Adicionar usuários</legend>
              <button className="submit">Enviar</button>

              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                value={UserAndVideo.name}
                onChange={(e) =>
                  setUserAndVideo({ ...UserAndVideo, name: e.target.value })
                }
                autoComplete="username"
                required="required"
              />

              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="user"
                value={UserAndVideo.email}
                onChange={(e) =>
                  setUserAndVideo({ ...UserAndVideo, email: e.target.value })
                }
                autoComplete="username"
                required="required"
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
                  <option value="admin">Administrador</option>
                  <option value="user">Usuário</option>
                </select>
              </div>

              <label htmlFor="password">Escolha uma senha</label>
              <input
                type="password"
                id="password"
                value={UserAndVideo.password}
                onChange={(e) =>
                  setUserAndVideo({
                    ...UserAndVideo,
                    password: e.target.value,
                  })
                }
                autoComplete="new-password"
                required="required"
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
                value={UserAndVideo.url}
                onChange={(e) =>
                  setUserAndVideo({ ...UserAndVideo, url: e.target.value })
                }
                autoComplete="url"
                required="required"
              />
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                autoComplete="on"
                value={UserAndVideo.title}
                onChange={(e) =>
                  setUserAndVideo({ ...UserAndVideo, title: e.target.value })
                }
                required="required"
              />
              <label htmlFor="description">Descrição</label>

              <textarea
                id="description"
                name="description"
                rows="10"
                cols="5"
                autoCapitalize="sentences"
                autoComplete="on"
                minLength={20}
                maxLength={30}
                placeholder="Digitando..."
                required="required"
                value={UserAndVideo.description}
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
    </Container>
  );
};

export default Cadastro;
