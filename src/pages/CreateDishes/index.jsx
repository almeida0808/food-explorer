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

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

export function CreateDishes({ ...rest }) {
  const [selectIsOpen, setSelectIsOpen] = useState(false);
  const [value, setValue] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();

  const [ingredientes, setIngredientes] = useState([]);
  const [newIngrediente, setNewIngrediente] = useState([]);

  const navigate = useNavigate();
  const { user } = useAuth();

  function handleAddTag() {
    setIngredientes((prevState) => [...prevState, newIngrediente]);
    setNewIngrediente("");
  }

  function handleRemoveTag(deleted) {
    setIngredientes((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewDishe() {
    try{
      await api.post(`/pratos/1`, {
      name,
      description,
        category,
        value,
        ingredientes,
      });
      alert("Nota criada com sucesso!");
      navigate("/");

    }catch (error) {
      console.error("Erro ao criar prato:", error);
      alert("Erro ao criar prato. Verifique os dados e tente novamente.");
    }
  }

  const [role, setRole] = useState(user.role);
  const isAdmin = role == "admin";

  const HandleSelectIsOpen = () => {
    setSelectIsOpen((prevState) => !prevState);
  };

  return (
    <Container {...rest}>
      <Menu isAdmin={isAdmin} />
      <Main>
        <Link to="/">
          <CaretLeft /> voltar
        </Link>
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
              placeholder="Nome do Prato"
              onChange={(e) => {
                setName(e.target.value);
              }}
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
                {ingredientes.map((ingrediente, index) => (
                  <IngredienteItem
                    key={String(index)}
                    value={ingrediente}
                    onClick={() => handleRemoveTag(ingrediente)}
                  />
                ))}
                <IngredienteItem
                  isNew={true}
                  onChange={(e) => setNewIngrediente(e.target.value)}
                  value={newIngrediente}
                  onClick={handleAddTag}
                />
              </div>
            </div>

            <Input
              className="preço"
              title="Preço"
              type="text"
              placeholder="19,99"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </div>

          <div className="descrição">
            <label for="description">Descrição</label>
            <textarea
              placeholder="Descreva seu prato ness campo"
              name=""
              id="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="buttons">
            <Button title="Salvar Prato" onClick={handleNewDishe} />
          </div>
        </form>
      </Main>
      <Footer />
    </Container>
  );
}
