import React from "react";
import { BrowserRouter } from "react-router";

import Routes from "@routes/Routes";
import CustomCursor from "@components/shared/CustomCursor";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
