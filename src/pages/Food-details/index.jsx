import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CaretLeft, Minus, Plus, Receipt } from "@phosphor-icons/react";
import { Button } from "../../components/Button";
import maracuja from "../../assets/maracuja.png";
import { Ingrediente } from "../../components/Ingrediente";

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
      <Header isAdmin={isAdmin} />
      <Main>
        <button>
          <CaretLeft />
          voltar
        </button>

        <img src={imgURL} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>

        <section className="ingredientes">
          <Ingrediente title="Uva" />
          <Ingrediente title="rabanete" />
          <Ingrediente title="Feijão" />
          <Ingrediente title="Macarrão" />
          <Ingrediente title="Uva" />
          <Ingrediente title="rabanete" />
        </section>

        {!isAdmin ? // SE isAdmin for falso renderize esse elemento
        (<div className="addFood">
            <div className="quantidade">
              <button><Minus /></button>
              <span>01</span>
              <button><Plus/></button>
            </div>
            <Button title={<span><Receipt/>pedir ∙ R${value}</span>}/>
          </div>) : // se não for falso ele vai ser admin, então renderize esse 
          ( <Button title="Editar prato" />)}


      </Main>
      <Footer />
    </Container>
  );
}
