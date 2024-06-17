import { Container } from "./styles";
import { Logo } from "../Logo";

export function Footer({...rest}) {
  return (
    <Container >
<Logo className="logo"/>
<span>© 2023 - Todos os direitos reservados.</span>


    </Container>
  );
}
