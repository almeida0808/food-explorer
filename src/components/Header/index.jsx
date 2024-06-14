import { Container } from "./styles";
import { Logo } from "../Logo";
import { Button } from "../Button";
import {List, Receipt,SignOut } from "@phosphor-icons/react"

export function Header({...rest}) {
  return (
    <Container >
<List/>
<Logo/>
<div className="pedidos">
<Receipt/>
<button>0</button>
</div>

<Button icon={Receipt} title={`Pedidos (0)`}/>

<SignOut className="signOut"/>

    </Container>
  );
}
