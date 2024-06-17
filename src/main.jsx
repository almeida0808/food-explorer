import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/global";
import temas from "./styles/temas";
import { ThemeProvider } from "styled-components";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { FoodDetails } from "./pages/Food-details";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={temas}>
      <GlobalStyle />
      <FoodDetails/>
    </ThemeProvider>
  </React.StrictMode>
);
