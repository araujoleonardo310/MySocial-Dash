const tokenName = "userToken";

const userToken = {
  id: 0,
  name: "",
  active: "false",
  typeAccont: "administrador",
};

const LocalStorage = localStorage.setItem(tokenName, JSON.stringify(userToken));

const setToken = (dataToken) => {
  localStorage.setItem(tokenName, JSON.stringify(dataToken));
};

const getToken = (token) => JSON.parse(localStorage.getItem(token));

export { getToken, setToken };
