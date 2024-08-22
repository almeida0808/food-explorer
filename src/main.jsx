import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/global";
import temas from "./styles/temas";
import { ThemeProvider } from "styled-components";
import { SignIn } from "./pages/SignIn";

import { Home } from "./pages/Home";
import { EditDishes } from "./pages/EditDishes";
import { CreateDishes } from "./pages/CreateDishes";
import { FoodDetails } from "./pages/FoodDetails";

import { Routes } from "./routes";
import { AuthProvider } from "./hooks/auth";
import { QuantityProvider } from "./hooks/QuantityContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={temas}>
      <GlobalStyle />
      <AuthProvider>
        <QuantityProvider>
    <Routes/>
    </QuantityProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
