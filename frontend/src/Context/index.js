import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("notUser");
  const [typeUser, setTypeUser] = useState("NotUser");
  const [statusUser, setStatusUser] = useState("disable");

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        typeUser,
        setTypeUser,
        statusUser,
        setStatusUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
