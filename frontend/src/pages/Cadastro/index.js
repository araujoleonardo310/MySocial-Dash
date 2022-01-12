import React from "react";
import "./style.scss";

import Container from "../../components/Container";

const Home = () => {
  return (
    <Container
      section="Cadastro"
      content={
        <div className="container__register">
          <form className="form">
            <div className="fildset__container">
              <fieldset>
                <legend>Adicionar usuários</legend>
                <button className="submit">Enviar</button>

                <label htmlFor="name">Nome</label>
                <input type="text" id="name" />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="name" />

                <div>
                  <label htmlFor="typeAccont">Tipo</label>
                  <select id="typeAccont">
                    <option value="administrador">Administrdor</option>
                    <option value="usuario">Usuário</option>
                  </select>
                </div>

                <label htmlFor="password">Escolha uma senha</label>
                <input type="password" id="password" />
              </fieldset>
            </div>

            <div className="fildset__container">
              <fieldset>
                <legend>Adicionar Vídeos</legend>
                <button className="submit">Enviar</button>

                <label htmlFor="link">Video</label>
                <input type="url" id="link" />
                <label htmlFor="title">Título</label>
                <input type="text" id="title" />
                <label htmlFor="description">Descrição</label>
                <input type="description" />
              </fieldset>
            </div>
          </form>
        </div>
      }
    />
  );
};

export default Home;
