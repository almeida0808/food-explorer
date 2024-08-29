import { Container } from "./styles";
import { Heart, Minus, Plus, PencilSimple } from "@phosphor-icons/react";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useQuantity } from "../../hooks/QuantityContext";
import { useAuth } from "../../hooks/auth";

export function CardFood({ data, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [like, setLike] = useState(false);
  const [dishQuantity, setDishQuantity] = useState(0);

  const { user } = useAuth();
  const isAdmin = user.role === "admin";

  const imageUrl = `${api.defaults.baseURL}/files/${data.imageUrl}`;
  const shortName = data.name.length > 12 ? `${data.name.substring(0, 12)}...` : data.name;
  const shortDescription = data.description.length > 56 ? `${data.description.substring(0, 56)}...` : data.description;

  const navigate = useNavigate();
  const { updateQuantity, quantities } = useQuantity();

  useEffect(() => {
    setDishQuantity(quantities[data.id] || 0);
  }, [quantities, data.id]);

  const handleLike = useCallback(() => {
    setLike(prevState => !prevState);
  }, []);

  const addQuantity = useCallback(() => {
    setDishQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      updateQuantity(data.id, newQuantity);
      return newQuantity;
    });
  }, [data.id, updateQuantity]);

  const removeQuantity = useCallback(() => {
    setDishQuantity(prevQuantity => {
      if (prevQuantity <= 0) return prevQuantity;
      const newQuantity = prevQuantity - 1;
      updateQuantity(data.id, newQuantity);
      return newQuantity;
    });
  }, [data.id, updateQuantity]);

  const editDish = useCallback(() => {
    navigate(`/edit/${data.id}`);
  }, [data.id, navigate]);

  const detailsDish = useCallback(() => {
    navigate(`/details/${data.id}`);
  }, [data.id, navigate]);

  return (
    <Container >
      {isAdmin ? (
        <button onClick={editDish}>
          <PencilSimple className="edit" />
        </button>
      ) : !like ? (
        <Heart className="like" onClick={handleLike} />
      ) : (
        <Heart className="like" onClick={handleLike} weight="fill" />
      )}
      <img src={imageUrl} onClick={detailsDish} alt={data.name} />

      <p className="title" onClick={detailsDish}>
        {!isDesktop ? `${shortName} >` : `${data.name} >`}
      </p>
      {isDesktop && <p onClick={detailsDish} className="description">{shortDescription}</p>}
      <p onClick={detailsDish} className="value">{`R$${data.value.replace('.', ',')}`}</p>

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
