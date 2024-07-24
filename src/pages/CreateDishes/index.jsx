import { useState, useEffect } from "react";

import { Container, Main } from "./styles";
import { Ingrediente } from "../../components/Ingrediente";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Menu } from "../../components/Menu";
import {
  UploadSimple,
  CaretLeft,
  CaretDown,
  CaretUp,
} from "@phosphor-icons/react";

import { NewIngrediente } from "../../components/New-ingrediente";
export function CreateDishes({
  isAdmin ,
   ...rest
}) {
  const [selectIsOpen, setSelectIsOpen] = useState(false);
  const [price, setPrice] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();

  const HandleSelectIsOpen = () => {
    setSelectIsOpen((prevState) => !prevState);
  };

  return (
    <Container {...rest}>
      <Menu isAdmin={isAdmin} />
      <Main>
        <button>
          <CaretLeft /> voltar
        </button>
        <form>
          <h1>Criar Prato</h1>

          <div className="formPartOne">
            <label className="imgFood" htmlFor="ImgFood">
              Imagem do prato
              <div>
                <UploadSimple />
                <span>Selecione uma imagem</span>
                <input type="file" name="" id="ImgFood" />
              </div>
            </label>

            <Input
            className="name"
              title="Nome"
              value={name}
              placeholder="Nome do Prato"
            />

            <div className="foodCategory">
              <label htmlFor="food-category">Categoria</label>
              <div className="selectWrapper">
                <select
                  onClick={HandleSelectIsOpen}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  onBlur={() => setSelectIsOpen(false)}
                  name="food-category"
                  id="food-category"
                >
                  <option value="sobremesa">Sobremesa</option>
                      <option value="pratos">Refeição</option>
                      <option value="drink">Drink</option>
                </select>
                {!selectIsOpen ? (
                  <CaretUp className="icon focused" />
                ) : (
                  <CaretDown className="icon default" />
                )}
              </div>
            </div>
          </div>

          <div className="formPartTwo">
            <div className="tags">
              <label htmlFor="ingredientes">Ingredientes</label>
              <div id="ingredientes">
                <NewIngrediente />
              </div>
            </div>

            <Input  className="preço"
              title="Preço"
              type="text"
              placeholder="19,99"
            />
          </div>


          <div className="descrição">
            <label for="description">Descrição</label>
            <textarea
              placeholder="Descreva seu prato ness campo"
              name=""
              id="description"
            ></textarea>
          </div>

          <div className="buttons">
            <Button title="Salvar Prato" />
          </div>
        </form>
      </Main>
      <Footer />
    </Container>
  );
}
