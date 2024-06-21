import { useState } from "react";

import { Container, Main } from "./styles";
import { Ingrediente } from "../../components/Ingrediente";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {
  UploadSimple,
  CaretLeft,
  CaretDown,
  CaretUp,
} from "@phosphor-icons/react";

import { NewIngrediente } from "../../components/New-ingrediente";
import { Menu } from "../../components/Menu";
export function CreatePrato({
  isAdmin ,
  descriptionDefault = "essa é a descrição deste produto",
  categoryDefault = "drink",
  nameDefault = "Macarronada",
  priceDefault = "49,99",
  ...rest
}) {
  const [selectIsOpen, setSelectIsOpen] = useState(false);
  const [price, setPrice] = useState(priceDefault);
  const [name, setName] = useState(nameDefault);
  const [category, setCategory] = useState(categoryDefault);
  const [description, setDescription] = useState(descriptionDefault);

  const HandleSelectIsOpen = () => {
    setSelectIsOpen((prevState) => !prevState);
  };

  return (
    <Container {...rest}>
<Menu isAdmin={isAdmin}/>
      <Main >
        <button>
          <CaretLeft /> voltar
        </button>
        <form>
          <h1>Criar prato</h1>

          <label className="imgFood" htmlFor="ImgFood">
            Imagem do prato{" "}
            {/*vamos colocar a label em volta de todo conteudo que desejamos mostrar*/}
            <div>
              {" "}
              {/*cria uma div para colocarmos o background e colocar o conteudo dentro*/}
              <UploadSimple /> {/*Icone de enviar imagem*/}
              <span>Selecione imagem</span>{" "}
              {/*texto que fica ao lado do icone*/}
              <input type="file" name="" id="ImgFood" />{" "}
              {/*é aquele icone escrito escolher arquivo que vamos sumir com ele*/}
            </div>
          </label>

          <Input
            title="Nome"
            placeholder="Nome do prato"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="foodCategory">
            <label htmlFor="food-category">Categoria</label>
            <div className="selectWrapper">
              <select
                onChange={(e) => setCategory(e.target.value)}
                onClick={HandleSelectIsOpen}
                onBlur={() => setSelectIsOpen(false)}
                name="food-category"
                id="food-category"
              >
                <option value="pratos">Refeição</option>
                <option value="sobremesa">Sobremesa</option>
                <option value="drink">Drink</option>
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
              <NewIngrediente />
            </div>
          </div>

          <Input
            title="Preço"
            placeholder={`R$00,00`}
            onChange={(e) => setPrice(e.target.value)}
          />

          <div className="descrição">
            <label for="description">Descrição</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Fale brevemente sobre o prato, seus ngredientes e composição"
              name=""
              id="description"
            ></textarea>
          </div>

          <div className="buttons">
            <Button title="Salvar Alterações" />
          </div>
        </form>
      </Main>
      <Footer />
    </Container>
  );
}
