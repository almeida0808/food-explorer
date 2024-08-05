import { useState, useEffect } from "react";

import { Container, Main } from "./styles";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Menu } from "../../components/Menu";
import { IngredienteItem } from "../../components/Ingrediente-item";
import {
  UploadSimple,
  CaretLeft,
  CaretDown,
  CaretUp,
} from "@phosphor-icons/react";

export function EditDishes({
  isAdmin = true,
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
      <Menu isAdmin={isAdmin} />
      <Main>
        <button>
          <CaretLeft /> voltar
        </button>
        <form>
          <h1>Editar prato</h1>

          <div className="formPartOne">
            <label className="imgFood" htmlFor="ImgFood">
              Imagem do prato
              <div>
                <UploadSimple />
                <span>Selecione uma imagem para altera-la</span>
                <input type="file" name="" id="ImgFood" />
              </div>
            </label>

            <Input
              className="name"
              title="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          </div>

          <div className="formPartTwo">
            <div className="tags">
              <label htmlFor="ingredientes">Ingredientes</label>
              <div id="ingredientes">
               
<IngredienteItem value="Oléo"/>
<IngredienteItem isNew={true } placeholder="Adicionar"title="Oléo"/>

              </div>
            </div>

            <Input
              className="preço"
              title="Preço"
              type="texte"
              value={`${price}`}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Valor"
            />
          </div>

          <div className="descrição">
            <label for="description">Descrição</label>
            <textarea
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name=""
              id="description"
            ></textarea>
          </div>

          <div className="buttons">
            <Button title="Exluir Prato" />
            <Button title="Salvar Alterações" />
          </div>
        </form>
      </Main>
      <Footer />
    </Container>
  );
}
