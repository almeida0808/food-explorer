import { Container } from "./styles";
import { X } from "@phosphor-icons/react";

export function Ingrediente({title,...rest}) {
  return (
    <Container>
{title}
<button><X/></button>
    </Container>
  );
}
