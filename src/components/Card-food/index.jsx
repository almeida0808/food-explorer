import { Container } from "./styles";
import { Button } from "../Button";
import { Heart, Minus, Plus, PencilSimple } from "@phosphor-icons/react";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useQuantity } from "../../hooks/QuantityContext";

export function CardFood({
  isAdmin = false,
  data,
  ...rest
}) {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike((prevState) => !prevState);
  };

  const imageUrl = `${api.defaults.baseURL}/files/${data.imageUrl}`;
  const shortName = data.name.length > 12 ? data.name.substring(0, 12) + '...' : data.name;
  const shortDescription = data.description.length > 56 ? data.description.substring(0, 56) + '...' : data.description;

  const navigate = useNavigate();
  const { updateQuantity, quantities } = useQuantity();
  const [dishQuantity, setDishQuantity] = useState(0);

  // Sincroniza dishQuantity com o contexto quando o componente é montado
  useEffect(() => {
    const initialQuantity = quantities[data.id] || 0;
    setDishQuantity(initialQuantity);
  }, [quantities, data.id]);

  function addQuantity() {
    setDishQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      updateQuantity(data.id, newQuantity);
      return newQuantity;
    });
  }

  function removeQuantity() {
    setDishQuantity(prevQuantity => {
      if (prevQuantity <= 0) return prevQuantity;
      const newQuantity = prevQuantity - 1;
      updateQuantity(data.id, newQuantity);
      return newQuantity;
    });
  }

  function EditDish() {
    navigate(`/edit/${data.id}`);
  }

  function DetailsDish() {
    navigate(`/details/${data.id}`);
  }

  return (
    <Container isAdmin={isAdmin} {...rest}>
      {isAdmin ? (
        <button>
          <PencilSimple onClick={EditDish} className="edit" />
        </button>
      ) : !like ? (
        <Heart className="like" onClick={handleLike} />
      ) : (
        <Heart className="like" onClick={handleLike} weight="fill" />
      )}
      <img src={imageUrl} onClick={DetailsDish} alt={data.name} />

      <p className="title" onClick={DetailsDish}>
        {!isDesktop ? `${shortName} >` : `${data.name} >`}
      </p>
      {isDesktop && <p onClick={DetailsDish} className="description">{shortDescription}</p>}
      <p onClick={DetailsDish} className="value">{`R$${data.value.replace('.', ',')}`}</p>

      {!isAdmin && (
        <div className="AddFood">
          <div className="quantidade">
            <button onClick={removeQuantity}>
              <Minus />
            </button>
            <span>{dishQuantity}</span>
            <button onClick={addQuantity}>
              <Plus />
            </button>
          </div>

          <button className="buttonRed">Incluir</button>
        </div>
      )}
    </Container>
  );
}
