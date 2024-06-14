import { Container } from "./styles";
import { Button } from "../Button";
import { Heart, Minus, Plus } from "@phosphor-icons/react";

export function CardFood({ title, value, imageUrl, like = false, ...rest }) {
  return (
    <Container {...rest}>
      
            {
              !like ? (
                <Heart className="like" />
              ) : (
                <Heart className="like" weight="fill" />
              ) /*caso like seja falso renderize coração vazado, caso seja true renderize coração cheio */
            }


      <img src={imageUrl} alt={title} />
      <p className="title">{title}</p>
      <p className="value">{`R$${value}`}</p>
      <div className="quantidade">
        <button>
          <Minus />
        </button>
        <span>01</span>
        <button>
          <Plus />
        </button>
      </div>

      <Button title="Incluir" />

    </Container>
  );
}
