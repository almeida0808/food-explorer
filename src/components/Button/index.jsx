import { Container } from "./styles";

export function Button({title,icon:Icon,...rest}) {
  return (
    <Container className="buttonRed" type="button"{...rest}>
      {Icon && <Icon size={20}/>}
     {title}
    </Container>
  );
}