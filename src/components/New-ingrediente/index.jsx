import { Container } from "./styles";
import { Plus } from "@phosphor-icons/react";

export function NewIngrediente({ title, ...rest }) {
  return (
    <Container>
      <input placeholder="Adicionar" />
      <button>
      <Plus />

      </button>
    </Container>
  );
}
