import { Container, Main } from "./styles";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { CaretLeft, Minus, Plus, Receipt } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useQuantity } from "../../hooks/QuantityContext";

export function FoodDetails({  ...rest }) {
  const { user } = useAuth();
  const [role, setRole] = useState(user.role);
  const isAdmin = role === "admin";

  const [dish, setDish] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  
  const { quantities, updateQuantity,getTotalQuantity} = useQuantity();
  const [dishQuantity, setDishQuantity] = useState(0);

  useEffect(() => {
    // Define a quantidade inicial do prato com base no contexto
    const initialQuantity = quantities[params.id] || 0;
    setDishQuantity(initialQuantity);
  }, [quantities, params.id]);

  function EditDish(){
    navigate(`/edit/${params.id}`);
  }

  function addQuantity() {
    setDishQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      updateQuantity(params.id, newQuantity);
      return newQuantity;
    });
  }

  function removeQuantity() {
    setDishQuantity(prevQuantity => {
      if (prevQuantity <= 0) return prevQuantity;
      const newQuantity = prevQuantity - 1;
      updateQuantity(params.id, newQuantity);
      return newQuantity;
    });
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/pratos/${params.id}`);
      setDish(response.data);
      setImagePreview(`${api.defaults.baseURL}/files/${response.data.imageUrl}`);
    }

    fetchDishes();
  }, [params.id]);

  return (
    <Container>
      <Menu isAdmin={isAdmin} totalQuantity={getTotalQuantity()}/>
      <Main>
        <div className="voltar">
          <Link to="/">
            <CaretLeft />
            voltar
          </Link>
        </div>

        <div className="food">
          <img src={imagePreview} alt={dish.name} />

          <div className="details">
            <h1>{dish.name}</h1>
            <p>{dish.description}</p>

            <section className="ingredientes">
              {dish?.ingredientes?.map((ingrediente, index) => (
                <Tag name={ingrediente.name} key={index} />
              ))}
            </section>
            {isAdmin ? (
              <Button onClick={EditDish} title="Editar prato" />
            ) : (
              <div className="addFood">
                <div className="quantidade">
                  <button onClick={removeQuantity}>
                    <Minus />
                  </button>
                  <span>{dishQuantity}</span>
                  <button onClick={addQuantity}>
                    <Plus />
                  </button>
                </div>
                <Button
                  disabled={dishQuantity === 0}
                  title={
                    <span>
                      <Receipt />
                      {`pedir ∙ R${(dish.value * dishQuantity).toFixed(2)}`}
                    </span>
                  }
                />
              </div>
            )}
          </div>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
