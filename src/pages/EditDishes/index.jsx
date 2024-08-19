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

import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function EditDishes({ ...rest }) {
  const [selectIsOpen, setSelectIsOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const params = useParams();

  const { user } = useAuth();
  const navigate = useNavigate();

  const [role, setRole] = useState(user.role);
  const isAdmin = role == "admin";

  const HandleSelectIsOpen = () => {
    setSelectIsOpen((prevState) => !prevState);
  };
  const [value, setValue] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();

  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);


    const [ingredientes, setIngredientes] = useState([]);
  const [newIngrediente, setNewIngrediente] = useState("");


  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/pratos/${params.id}`);
        setCategory(response.data.category);
        setDescription(response.data.description);
        setValue(response.data.value);
        setName(response.data.name);
        setImageFile(response.data.imageUrl);
        setImagePreview(`${api.defaults.baseURL}/files/${response.data.imageUrl}`
      )
        setIngredientes(response.data.ingredientes.map(ingrediente=> ingrediente.name));


        console.log(ingredientes)
      } catch (error) {
        alert(`Erro ao carregar nota: (${error.message})`);

        navigate("/");
      }
    }

    fetchDish();
  }, [params.id]);


function handleNewImage(event) {
  const file = event.target.files[0];
  setImageFile(file);

  setImagePreview(URL.createObjectURL(file))
  setImage(imagePreview);
}

  function handleNewTag() {
    if (!newIngrediente.trim()) {
      alert("Por favor, adicione um ingrediente válido.");
      return;
    }
    setIngredientes((prevState) => [...prevState, newIngrediente]);
    setNewIngrediente("");
    
  }

function handleRemoveTag(deleted){
  const confirmDeleted = confirm("Deseja deletar este ingrediente?")
  if(
    confirmDeleted
  ){

    setIngredientes((prevState) => prevState.filter((tag) => tag !== deleted));
  }
  return

}

  return (
    <Container {...rest}>
      <Menu isAdmin={isAdmin} />
      <Main>
        <Link to="/">
          <CaretLeft /> voltar
        </Link>
        <form>
          <h1>Editar prato</h1>

            <div className="imgPreview">
              <span>Imagem Selecionada</span>
              <img src={imagePreview} alt="" />
            </div>

          <div className="formPartOne">
            <label className="imgFood" htmlFor="ImgFood">
              Imagem do prato
              <div>
                <UploadSimple />
                <span>Selecione uma imagem</span>
                <input
                  type="file"
                  id="ImgFood"
                  onChange={(e) => handleNewImage(e)}
                />
              </div>
            </label>

            <Input
              maxLength="30"
              className="name"
              title="Nome"
              value={name}
              placeholder="Nome do Prato"
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
                  {category === "refeição" ? (
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
                  ) : (
                    category === "bebida" && (
                      <>
                        <option value="drink">Drink</option>
                        <option value="pratos">Refeição</option>
                        <option value="sobremesa">Sobremesa</option>
                      </>
                    )
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
                {ingredientes.map((ingrediente, index) => (
                  <IngredienteItem
                    key={String(index)}
                    value={ingrediente}
                    onClick={()=>handleRemoveTag(ingrediente)}
                  />
                ))}
                <IngredienteItem
                  isNew
                  onChange={(e) => setNewIngrediente(e.target.value)}
                  value={newIngrediente}
                  onClick={handleNewTag}
                />
              </div>
            </div>

            <Input
              className="preço"
              title="Preço"
              value={value}
              type="number"
              placeholder="19,99"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </div>

          <div className="descrição">
            <label for="description">Descrição</label>
            <textarea
              value={description}
              placeholder="Descreva seu prato ness campo"
              id="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="buttons">
            <Button title="Salvar Prato" disabled={isFormValid} />
          </div>
        </form>
      </Main>
      <Footer />
    </Container>
  );
}
