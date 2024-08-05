import { Container } from "./styles";
import { Plus, X } from "@phosphor-icons/react";

export function IngredienteItem({ value, onClick,isNew,...rest }) {
  return (
   <Container isNew={isNew}>
    {
      isNew ? <input maxlength="15" placeholder="Adicionar"type="text" value={value} readOnly={!isNew} {...rest} /> : <span>{value}</span>

    }

<button onClick={onClick} type="button">
  {isNew ? <Plus/> : <X/>}
</button>
   </Container>

    
  );
}
