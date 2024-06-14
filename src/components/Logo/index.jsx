import { Container } from "./styles";
import simbolo from "../../assets/logo.svg";

export function Logo() {
  return (
    <Container className="logo">
      <img src={simbolo} alt="" />
      <div>
        <h1>food explorer</h1>
        <small>admin</small>
      </div>
    </Container>
  );
}
