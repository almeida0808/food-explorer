import { Container } from "./styles";

export function Input({title, ...rest}) {
  return (
    <Container >
      <p>{title}</p>
      <input {...rest}/>
    </Container>
  );
}
