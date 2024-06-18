import { useState } from "react";

import { Container, Main } from "./styles";
import { Ingrediente } from "../../components/Ingrediente";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { CaretLeft, CaretDown, CaretUp } from "@phosphor-icons/react";

import { NewIngrediente } from "../../components/New-ingrediente";
export function EditPrato({
  isAdmin = true,
  description = "essa é a descrição deste produto",
  category = "drink",
  title = "Macarronada",
  value = "49,99",
  ...rest
}) {
  const [selectIsOpen, setSelectIsOpen] = useState(false);

  const HandleSelectIsOpen = () => {
    setSelectIsOpen((prevState) => !prevState);
    console.log(selectIsOpen);
  };

  return (
    <Container>
      <Header isAdmin={isAdmin} />
      <Main>
        <button>
          <CaretLeft /> voltar
        </button>
        <form>
          <h1>Editar prato</h1>
          <Input
            type="file"
            title="Imagem do prato"
            placeholder="Selecione a imagem para alterá-la"
          ></Input>
          <Input title="Nome" placeholder={title} />
          <div className="foodCategory">
            <label htmlFor="food-category">Categoria</label>
            <div className="selectWrapper">
              <select
                onClick={HandleSelectIsOpen}
                onBlur={() => setSelectIsOpen(false)}
                name="food-category"
                id="food-category"
              >
                {category === "refeicao" ? (
                  <>
                    <option value="pratos">Refeição</option>
                    <option value="sobremesa">Sobremesa</option>
                    <option value="drink">Drink</option>
                  </>
                ) : category === "sobremesa" ? (
                  <>
                    <option value="sobremesa">Sobremesa</option>
                    <option value="pratos">Refeição</option>
                    <option value="drink">Drink</option>
                  </>
                ) : category === "drink" ? (
                  <>
                    <option value="drink">Drink</option>
                    <option value="pratos">Refeição</option>
                    <option value="sobremesa">Sobremesa</option>
                  </>
                ) : (
                  <>
                    <option value="drink">Drink</option>
                    <option value="pratos">Refeição</option>
                    <option value="sobremesa">Sobremesa</option>
                  </>
                )}
              </select>
              {!selectIsOpen ? (
                <CaretUp className="icon focused" />
              ) : (
                <CaretDown className="icon default" />
              )}
            </div>
          </div>

          <div className="tags">
            <label htmlFor="ingredientes">Ingredientes</label>
            <div id="ingredientes">
              <Ingrediente title="banana" />
              <NewIngrediente />
            </div>
          </div>

          <Input title="Preço" placeholder={`R$${value}`} />

          <div className="descrição">
            <label for="description">Descrição</label>
            <textarea
              placeholder={description}
              name=""
              id="description"
            ></textarea>
          </div>

          <div className="buttons">
            <Button title="Exluir Prato"/>
            <Button title="Salvar Alterações"/>
          </div>
        </form>
      </Main>
      <Footer />
    </Container>
  );
}
