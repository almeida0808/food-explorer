import { Container } from "./styles";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { List, Receipt, SignOut } from "@phosphor-icons/react";


export function Header({ isAdmin, ...rest }) {
  return (
    <Container>

      <List />
      <Logo isAdmin={isAdmin} />
      {!isAdmin ? (
        <div className="pedidos">
          <Receipt />
          <button>0</button>
        </div>
      ) : (
        <div className="pedidos"></div>
      )}

      <Button icon={Receipt} title={`Pedidos (0)`} />

      <SignOut className="signOut" />
    </Container>
  );
}


