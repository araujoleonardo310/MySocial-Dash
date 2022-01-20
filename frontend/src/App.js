import React from "react";

import AuthProvider from "./Context";
import Roots from "./Roots";

const App = () => {
  
  return (
    <AuthProvider>
      <Roots />
    </AuthProvider>
  )
};

export default App;
