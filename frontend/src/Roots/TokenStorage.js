export const AuthToken = () => {
  let tokenValues = {
    status: "active",
    tipo: "user",
  };

  const token = localStorage.setItem(
    "token",
    JSON.stringify(tokenValues)
  );

  return console.log("Token:",  token,  tokenValues)
}