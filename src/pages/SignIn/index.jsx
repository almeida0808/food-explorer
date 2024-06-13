import { Container } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import {Button} from "../../components/Button"
import {TextButton} from "../../components/Text-button"


export function SignIn() {
  return (
    <Container>
      <Logo />
      
<div>
      <Input title="Email" placeholder="exemplo@email.com" />
      <Input title="Senha" placeholder="No mínimo 6 caracteres" />

      <Button title="Entrar"/>

      <TextButton title="Criar uma Conta"/>
  
</div>

    </Container>
  );
}
