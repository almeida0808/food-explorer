import { Container } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/Text-button";
import { useMediaQuery } from "react-responsive";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const { signIn } = useAuth();

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

  function handleSignIn(){
    signIn({email,password})
  }
  return (
    <Container>
      <Logo />

      <form>
        {isDesktop && <h1>Faça seu login</h1>}

        <Input title="Email" onChange={e => setEmail(e.target.value)} placeholder="exemplo@email.com" />
        <Input type="password" title="Senha" onChange={e => setPassword(e.target.value)} placeholder="No mínimo 6 caracteres" />
 
        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register"> 
        <TextButton title="Criar uma Conta" />
        </Link>
      </form>
    </Container>
  );
}
