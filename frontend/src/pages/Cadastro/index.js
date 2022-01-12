import Container from "../../components/Container";
const Home = () => {
  return (
    <Container
      section="Cadastro"
      content={
        <div>
          <form>
            <fieldset>
              <legend>Adicionar usuários</legend>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" />
              <label htmlFor="email">E-mail</label>
              <input type="email" id="name" />
              <div>
                <label htmlFor="typeAccont">Tipo de usuário</label>
                <select id="typeAccont">
                  <option value="administrador">Administrdor</option>
                  <option value="usuario">Usuário</option>
                </select>
              </div>
              
              <label htmlFor="password">Escolha uma senha</label>
              <input type="password" id="password" />
            </fieldset>

            <fieldset>
              <legend>Adicionar Vídeos</legend>

              <label htmlFor="link">Video</label>
              <input type="url" id="link" />
              <label htmlFor="title">Título</label>
              <input type="text" id="title" />
              <label htmlFor="description">Descrição</label>
              <input type="description" />
            </fieldset>
            <button>Enviar</button>
          </form>
        </div>
      }
    />
  );
};

export default Home;
