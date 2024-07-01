import { Container } from "./styles";
import { Plus } from "@phosphor-icons/react";

export function NewIngrediente({ title, ...rest }) {
  return (
    <Container>
      <p >Adicionar</p>
      <button>
      <Plus />

      </button>
    </Container>
  );
}
