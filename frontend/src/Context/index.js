import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("notUser");
  const [typeUser, setTypeUser] = useState("admin");
  const [statusUser, setStatusUser] = useState("active");

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
