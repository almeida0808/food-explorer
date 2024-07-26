import { useState } from "react";
import { Header } from "../Header";
import { Input } from "../Input";
import { Container } from "./styles";
import { MagnifyingGlass} from "@phosphor-icons/react";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../../hooks/auth";

export function Menu({ isAdmin, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const HandleToglleMenu = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  const {signOut} = useAuth()  

function handleSignOut(){
  signOut()
}
  return (
    <Container {...rest}>
      <Header
        data-menu-is-open={menuIsOpen}
        isAdmin={isAdmin}
        menuIsOpen={menuIsOpen}
        HandleToglleMenu={HandleToglleMenu}
      />

      {!isDesktop && (
        <nav data-menu-is-open={menuIsOpen}>
          <div className="options">
            <div className="pesquisar">
              <MagnifyingGlass />
              <input
                type="text"
                placeholder="Busque por pratos ou ingredientes"
              />
            </div>

            <ul>
              {isAdmin && (
                <button>
                  <a>Novo prato</a>
                </button>
              )}
              <button onClick={handleSignOut}>
                <a>Sair</a>
              </button>
            </ul>
          </div>
        </nav>
      )}
    </Container>
  );
}
