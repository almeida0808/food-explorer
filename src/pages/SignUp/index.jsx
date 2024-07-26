import { Container } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/Text-button";
import { useMediaQuery } from "react-responsive";

import { useState } from "react"; // STATES DO REACT
import { api } from "../../services/api"; // IMPORTA AS CONFIGS DO AXIOS
import { Link } from "react-router-dom";

export function SignUp() {
  //CRIAMOS ESTADOS PRA GUARDAR OS DADOS DO USUÁRIO
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    // FUNÇÃO QUE VAI ENVIAR OS DADOS PRO BACKEND
    if (!name || !email || !password) {
      alert("Preencha todos os campos");
      return;
    }
    console.log({ name, email, password });
    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário criado com sucesso");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel cadastrar usuário");
        }
      });
  }

  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <Container>
      <Logo />

      <form>
        {isDesktop && <h1>Crie sua conta</h1>}
        <Input
          title="Nome"
          onChange={(e) => setName(e.target.value)} // ATUALIZA O ESTADO
          placeholder="Seu nome"
        />
        <Input
          title="Email"
          onChange={(e) => setEmail(e.target.value)} //ATUALIZA O ESTADO
          placeholder="exemplo@email.com"
        />
        <Input
          type="password"
          title="Senha"
          onChange={(e) => setPassword(e.target.value)} //ATUALIZA O ESTADO
          placeholder="No mínimo 6 caracteres"
        />
        <Button title="Criar conta" onClick={handleSignUp} />{" "}
        {/*ACIONA A FUNÇÃO QE ENVIA OS DADOS PRO BACKEND */}
        <Link to="/">
          <TextButton title="Já tenho uma conta" />
        </Link>
      </form>
    </Container>
  );
}
