import { Container } from "./styles";
import { Plus, X } from "@phosphor-icons/react";

export function IngredienteItem({ value = "", onClick, isNew, ...rest }) {
  return (
    <Container isNew={isNew}>
      {isNew ? (
        <input
          maxLength="20"
          placeholder="Adicionar"
          type="text"
          value={value}
          onChange={(e) => rest.onChange?.(e)} // Chamando onChange se disponível
        />
      ) : (
        <span>{value}</span>
      )}

      <button onClick={onClick} type="button">
        {isNew ? <Plus /> : <X />}
      </button>
    </Container>
  );
}
