import { createContext, useContext } from "react";
const AuthContext = createContext({});

import { api } from "../services/api";

function AuthProvider({ children }) {
async function signIn({email,password}){

  try{
    const response = await api.post("/sessions", {email,password})
    const {user, token} = response.data

  }catch(error){
if(error.response){
  alert(error.response.data.message)
}else{
  alert("Não foi possivel entrar")
}

  }

}

  return (
    <AuthContext.Provider value={ {signIn} }>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };
