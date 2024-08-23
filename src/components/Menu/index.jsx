import { useState } from "react";
import { Header } from "../Header";
import { Input } from "../Input";
import { Container } from "./styles";
import { MagnifyingGlass} from "@phosphor-icons/react";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";

export function Menu({onSearch,  totalQuantity,...rest }) {
  const { user } = useAuth();
  const [role, setRole] = useState(user.role);
  const isAdmin = role == "admin";

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [menuIsOpen, setMenuIsOpen] = useState(false);
const [search , setSearch] = useState("")

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

  
function handleInputChange(e){
  const newSearch = e.target.value
  setSearch(newSearch)
  onSearch(search)
}


  return (
    <Container {...rest}>
      <Header
      totalQuantity={totalQuantity}
        data-menu-is-open={menuIsOpen}
        menuIsOpen={menuIsOpen}
        HandleToglleMenu={HandleToglleMenu}
        onChange={onSearch}
      />

      {!isDesktop && (
        <nav data-menu-is-open={menuIsOpen}>
          <div className="options">
            <div className="pesquisar">
              <MagnifyingGlass />
              <input
                type="text"
                placeholder="Busque por opções de pratos"
                onChange={handleInputChange}
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
