import React from "react";

import Roots from "./Roots";
import AuthProvider from "./Context";

const App = () => {
  
  return (
    <AuthProvider>
      <Roots />
    </AuthProvider>
  )
};

export default App;
