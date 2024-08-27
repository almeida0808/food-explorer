import { Container } from "./styles";

export function Input({type,title, ...rest}) {
  return (
    <Container >
      <label>{title}</label>
      <input type={type} {...rest} />
    </Container>
  );
}
