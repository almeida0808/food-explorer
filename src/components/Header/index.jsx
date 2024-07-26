import { Container } from "./styles";
import { Logo } from "../Logo";
import { Button } from "../Button";
import {
  List,
  Receipt,
  X,
  SignOut,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

export function Header({
  value = 10,
  isAdmin ,
  menuIsOpen,
  HandleToglleMenu,
  ...rest
}) {
  const isDesktop = useMediaQuery({ minWidth: 1024 }); // verifica se tem tamanho de desktop


  const {signOut} = useAuth()  

function handleSignOut(){
  signOut()
}


  return (
    <Container>
      {!menuIsOpen && !isDesktop ? (
        <>
          <button className="list" onClick={HandleToglleMenu}>
            <List />
          </button>
          <Logo isAdmin={isAdmin} />
          {!isAdmin ? (
            <div className="pedidos">
              <Receipt />
              <button>0</button>
            </div>
          ) : (
            <div className="pedidos"></div>
          )}
        </>
      ) : menuIsOpen && !isDesktop ? (
        <div className="menu">
          <button onClick={HandleToglleMenu}>
            <X />
          </button>
          <h1>Menu</h1>
        </div>
      ) : (
        isDesktop && (
          <div className="headerDesktop">
            <Logo className="logo" isAdmin={isAdmin} />
            <div className="pesquisar">
              <MagnifyingGlass />
              <input
                type="text"
                placeholder="Busque por pratos ou ingredientes"
              />
            </div>

{!isAdmin ? (
            <button className="pedidos">
              <Receipt /> {`Pedidos (${value})`}
            </button>

): (
  <Link to="/new" className="newPrato">
    Novo prato
            </Link>
 )}



            <button className="signOut" onClick={handleSignOut}>
              <SignOut />
            </button>
          </div>
        )
      )}
    </Container>
  );
}
