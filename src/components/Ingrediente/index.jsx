import { Container } from "./styles";
import { X } from "@phosphor-icons/react";

export function Ingrediente({ title, isAdmin =true, ...rest }) {
  return (
    <Container>
      {isAdmin ? (
        <>
          {title}
          <button>
            <X />
          </button>
        </>
      ) : (
        <>{title}</>
      )}
    </Container>
  );
}
