import { Container } from "./styles";
import { Button } from "../Button";
import { Heart, Minus, Plus, PencilSimple } from "@phosphor-icons/react";

export function CardFood({
  isAdmin = false,
  title,
  value,
  imageUrl,
  like = false,
  ...rest
}) {
  return (
    <Container {...rest}>
      {
        // caso seja um admin moste o icone do lapis
        isAdmin ? (<PencilSimple className="edit" />) 
        : // caso não seja admin verifique se o like é falso , se for falso renderize o coração vazado
        !like ? (<Heart className="like" />) 
        : // se o like for true renderize o coração cheio
        (<Heart className="like" weight="fill" />)
      }

      <img src={imageUrl} alt={title} />
      <p className="title">{`${title} >`}</p>
      <p className="value">{`R$${value}`}</p>

      {!isAdmin ? (
        <div className="AddFood">
          <div className="quantidade">
            <button>
              <Minus />
            </button>
            <span>01</span>
            <button>
              <Plus />
            </button>
          </div>

          <button className="buttonRed">Incluir</button>
        </div>
      ) : (
        <span></span>
      )}
    </Container>
  );
}
