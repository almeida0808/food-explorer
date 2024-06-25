import { Container } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import {Button} from "../../components/Button"
import {TextButton} from "../../components/Text-button"
import { useMediaQuery } from "react-responsive";


export function SignIn() {
const isDesktop = useMediaQuery({minWidth: 768})

  return (
    <Container>
      <Logo />
      
<form>
    {isDesktop && <h1>Faça seu login</h1>}

      <Input title="Email" placeholder="exemplo@email.com" />
      <Input title="Senha" placeholder="No mínimo 6 caracteres" />

      <Button title="Entrar"/>

      <TextButton title="Criar uma Conta"/>
  
</form>

    </Container>
  );
}
