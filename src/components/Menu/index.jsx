import { useState } from "react";
import { Header } from "../Header";
import { Input } from "../Input";
import { Container } from "./styles";
import { MagnifyingGlass} from "@phosphor-icons/react";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";

export function Menu({ isAdmin, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const navigate = useNavigate();

  const HandleToglleMenu = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  const {signOut} = useAuth()  

function handleSignOut(){
  signOut()
}

function handleNewPrato(){
  navigate('/new')
  setMenuIsOpen(false)
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
                <button  onClick={handleNewPrato}>
                  <a >Novo prato</a>
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
