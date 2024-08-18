import { Container } from "./styles";

export function  Button({onClick,title,disabled,icon:Icon,...rest} ) {
  return (
    <Container disabled={disabled} onClick={onClick} className="buttonRed" type="button"{...rest}>
      {Icon && <Icon size={20}/>}
     {title}
    </Container>
  );
}