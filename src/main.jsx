import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from "./styles/global"
import temas from "./styles/temas"
import {ThemeProvider} from "styled-components"

import { SignIn } from './pages/SignIn';


ReactDOM.createRoot(document.getElementById("root")).render(

<React.StrictMode>
<ThemeProvider theme={temas}>
    <GlobalStyle/>

<SignIn/>

    
</ThemeProvider>
</React.StrictMode>

);