import { Container } from "./styles";
import { Hexagon } from "@phosphor-icons/react";

export function Logo({isAdmin=false}) {
  return (
    <Container className="logo">
<Hexagon className="exagon" weight="fill" />

<div>
        <h1>food explorer</h1>
        {isAdmin && <small>admin</small>}
      </div>
    </Container>
  );
}
