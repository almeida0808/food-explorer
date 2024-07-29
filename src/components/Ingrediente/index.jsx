import { Container } from "./styles";
import { Plus, X } from "@phosphor-icons/react";

export function Ingrediente({$isNew={$isNew}, value,onClick, ...rest }) {
  return (  <Container isNew={$isNew}>
    <input type="text" readOnly={!$isNew} value={value} {...rest} />

<button type="button" onClick={onClick} className={$isNew ? 'button-add' : 'button-delete'}>
{$isNew ? <Plus/> : <X/>} {/*caso seja um campo pra adicionar um link colocar o sinal de + , caso seja um link já criado coloque X*/}
</button>

  </Container>
  );
}
