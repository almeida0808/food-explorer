import { Container } from "./styles";
import { Button } from "../Button";
import { Heart, Minus, Plus, PencilSimple } from "@phosphor-icons/react";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";


export function CardFood({
  isAdmin = false,
 data,
 ...rest
}) {

  
  
  const isDesktop = useMediaQuery({ minWidth: 768 }); // verifica se tem tamanho de desktop
 
  const [like, setLike] = useState(false)
  const handleLike = () => {
    setLike((prevState) => !prevState);
  }
  
  const imageUrl = `${api.defaults.baseURL}/files/${data.imageUrl}`
  const shortName = data.name.length > 12 ? data.name.substring(0, 12) + '...' : data.name;

  const navigate = useNavigate()

function handleEditDish(){
navigate(`/edit/${data.id}`)

}

  return (

    <Container {...rest} >
      {
        // caso seja um admin moste o icone do lapis
        isAdmin ? (
          <button>
          <PencilSimple onClick={handleEditDish} className="edit" />
          </button>
        ) : // caso não seja admin verifique se o like é falso , se for falso renderize o coração vazado
        !like ? (
          <Heart className="like" onClick={handleLike}/>
        ) : (
          // se o like for true renderize o coração cheio
          <Heart className="like" onClick={handleLike} weight="fill" />
        )
      }
      <img src={imageUrl} alt={data.name} />

      <p className="title" onClick={handleEditDish}>{!isDesktop ? `${shortName} >` : `${data.name} >`}</p>
      {isDesktop && <p className="description">{`${data.description}`}</p>}
      <p className="value">{`R$${data.value}`}</p>

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