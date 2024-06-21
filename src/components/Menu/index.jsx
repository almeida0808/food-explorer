import { useState } from "react";
import { Header } from "../Header";
import { Input } from "../Input";
import { Container } from "./styles";
import {MagnifyingGlass} from "@phosphor-icons/react"
import { useMediaQuery } from "react-responsive";


export function Menu({
  isAdmin
,...rest
}) {
const isDesktop = useMediaQuery({ minWidth: 1024})

const [menuIsOpen, setMenuIsOpen] = useState(false);

const HandleToglleMenu = () => {
    setMenuIsOpen((prevState) => !prevState);
}

return (
    <Container  {...rest}>
     <Header data-menu-is-open={menuIsOpen} isAdmin={isAdmin} menuIsOpen={menuIsOpen} HandleToglleMenu={HandleToglleMenu}/>

{!isDesktop && (<nav  data-menu-is-open={menuIsOpen}>

<div  className="options" >

  <div className="pesquisar">
<MagnifyingGlass/>
<input type="text" placeholder="Busque por pratos ou ingredientes" />
  </div>

<ul>
{isAdmin && <a>Novo prato</a>}
  <a>Sair</a>
</ul>


</div>
 </nav>)}

    </Container>
  );
}
