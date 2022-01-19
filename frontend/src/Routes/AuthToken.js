export const AuthToken = () => {
  let tokenValues = {
    status: "disable",
    tipo: "notuser",
  };

  const token = localStorage.setItem(
    "token",
    JSON.stringify(tokenValues)
  );

  return console.log("Token:",  token,  tokenValues)
}