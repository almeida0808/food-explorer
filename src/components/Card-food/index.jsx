import { Container } from "./styles";
import { Button } from "../Button";
import { Heart, Minus, Plus, PencilSimple } from "@phosphor-icons/react";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

export function CardFood({
  isAdmin = false,
  title,
  value,
  imageUrl,
  description= "Descrição serventia de aleria de teste para este prato",
  ...rest
}) {
  
  const isDesktop = useMediaQuery({ minWidth: 768 }); // verifica se tem tamanho de desktop
 
  const [like, setLike] = useState(false)
  const handleLike = () => {
    setLike((prevState) => !prevState);
}

  return (

    <Container {...rest}>
      {
        // caso seja um admin moste o icone do lapis
        isAdmin ? (
          <PencilSimple className="edit" />
        ) : // caso não seja admin verifique se o like é falso , se for falso renderize o coração vazado
        !like ? (
          <Heart className="like" onClick={handleLike}/>
        ) : (
          // se o like for true renderize o coração cheio
          <Heart className="like" onClick={handleLike} weight="fill" />
        )
      }

      <img src={imageUrl} alt={title} />
      <p className="title">{`${title} >`}</p>
      {isDesktop && <p className="description">{`${description}`}</p>}
      <p className="value">{`R$${value}`}</p>

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
    </Container>
  );
}
// {!isAdmin &&
//   (isDesktop ? (
//     <div className="AddFoodDesktop">
//       <div className="quantidade">
//         <button>
//           <Minus />
//         </button>
//         <span>01</span>
//         <button>
//           <Plus />
//         </button>
//       </div>

//       <button className="buttonRed">Incluir</button>
//     </div>
//   ) : (
//     <div className="AddFood">
//       <div className="quantidade">
//         <button>
//           <Minus />
//         </button>
//         <span>01</span>
//         <button>
//           <Plus />
//         </button>
//       </div>

//       <button className="buttonRed">Incluir</button>
//     </div>
//   ))}