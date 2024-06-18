import { Container } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/Text-button";

export function SignUp() {
  return (
    <Container>
      <Logo />

      <div>
        <Input title="Nome" placeholder="Seu nome" />

        <Input title="Email" placeholder="exemplo@email.com" />
        <Input title="Senha" placeholder="No mínimo 6 caracteres" />

        <Button title="Criar conta" />

        <TextButton title="Já tenho uma conta" />
      </div>
    </Container>
  );
}