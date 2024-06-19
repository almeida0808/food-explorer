import { Header } from "../Header";
import { Container } from "./styles";

export function Menu({
  isAdmin
,...rest
}) {
  return (
    <Container {...rest}>
     <Header></Header>
    <div className="content"></div>
    </Container>
  );
}
