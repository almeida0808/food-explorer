import { Container, Main } from "./styles";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import maracuja from "../../assets/maracuja.png";
import { Tag } from "../../components/Tag";
import { CaretLeft, Minus, Plus, Receipt } from "@phosphor-icons/react";

const Ingredientes = [
  {
    id: 1,
    name: "polpa de maracujá",
  },
  {
    id: 2,
    name: "Sopa",
  },
  {
    id: 3,
    name: "Carne",
  },
  {
    id: 4,
    name: "gengibre",
  },
];

export function FoodDetails({
  isAdmin,
  description = "Suco natural de maracujá, feito artezanalmente por monges do Himalaia",
  value = "10,00",
  title = "Suco de Maracujá",
  imgURL = maracuja,
  ...rest
}) {
  return (
    <Container>
      <Menu isAdmin={isAdmin} />
      <Main>
        <div className="voltar">
          <button>
            <CaretLeft />
            voltar
          </button>
        </div>

        <div className="food">
          <img src={imgURL} alt={title} />

          <div className="details">
            <h1>{title}</h1>
            <p>{description}</p>

            <section className="ingredientes">
              <Tag title="Uva" />
              <Tag title="rabanete" />
              <Tag title="Feijão" />
              <Tag title="Macarrão" />
              <Tag title="Uva" />
              <Tag title="rabanete" />
            </section>

            {!isAdmin ? ( // SE isAdmin for falso renderize esse elemento
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
                      pedir ∙ R${value}
                    </span>
                  }
                />
              </div> // se não for falso ele vai ser admin, então renderize esse
            ) : (
              <Button title="Editar prato" />
            )}
          </div>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
