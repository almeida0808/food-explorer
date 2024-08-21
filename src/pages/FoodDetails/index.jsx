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

export function FoodDetails({ isAdmin, ...rest }) {
  

  const [dish, setDish] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const params = useParams();

  const navigate = useNavigate()

  function EditDish(){
  navigate(`/edit/${params.id}`)
  
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/pratos/${params.id}`);

      setDish(response.data);
      setImagePreview(
        `${api.defaults.baseURL}/files/${response.data.imageUrl}`
      );
    }

    fetchDishes();
  }, [params.id]);

  return (
    <Container>
      <Menu isAdmin={isAdmin} />
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
            {!isAdmin ? (
              <Button onClick={EditDish} title="Editar prato" />
            ):( // SE isAdmin for falso renderize esse elemento
              <div className="addFood">
                <div className="quantidade">
                  <button>
                    <Minus />
                  </button>
                  <span>01</span>
                  <button>
                    <Plus />
                  </button>
                </div>
                <Button
                  title={
                    <span>
                      <Receipt />
                      {`pedir ∙ R${dish.value}`}
                    </span>
                  }
                />
              </div> // se não for falso ele vai ser admin, então renderize esse
            )}
          </div>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
