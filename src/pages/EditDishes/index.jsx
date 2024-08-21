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
  const isAdmin = role === "admin";

  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
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
        setImagePreview(
          `${api.defaults.baseURL}/files/${response.data.imageUrl}`
        );
        setIngredientes(
          response.data.ingredientes.map((ingrediente) => ingrediente.name)
        );

        console.log(response.data.ingredientes.map((ingrediente) => ingrediente.name));
      } catch (error) {
        alert(`Erro ao carregar nota: (${error.message})`);
        navigate("/");
      }
    }

    fetchDish();
  }, [params.id, navigate]);

  function handleNewImage(event) {
    const file = event.target.files[0];
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  function handleNewTag() {
    const ingredienteTrimmed = newIngrediente.trim();

    if (!ingredienteTrimmed) {
      alert("Por favor, adicione um ingrediente válido.");
      return;
    }

    setIngredientes((prevState) => {
      if (prevState.includes(ingredienteTrimmed)) {
        alert("O ingrediente já existe na lista.");
        return prevState;
      }
      return [...prevState, ingredienteTrimmed];
    });

    setNewIngrediente(""); // Limpa o campo de entrada
  }

  function handleRemoveTag(deleted) {
    const confirmDeleted = confirm("Deseja deletar este ingrediente?");
    if (confirmDeleted) {
      setIngredientes((prevState) =>
        prevState.filter((tag) => tag !== deleted)
      );
    }
  }

  async function handleNewDishe() {
    const fileForm = new FormData();
    
    if (imageFile) {
        fileForm.append("image", imageFile);
    }
    
    fileForm.append("name", name);
    fileForm.append("description", description);
    fileForm.append("category", category);
    fileForm.append("value", value);
    fileForm.append("ingredientes", ingredientes.join(",")); // Converte array para string

    try {
        const response = await api.put(`/pratos/${params.id}`, fileForm, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        alert("Prato atualizado com sucesso!");
        navigate("/");
    } catch (error) {
        if (error.response && error.response.data) {
            alert(`Erro: ${error.response.data.message}`);
        } else {
            alert("Erro ao atualizar o prato. Tente novamente mais tarde.");
        }
    }
}
  return (
    <Container {...rest}>
      <Menu isAdmin={isAdmin} />
      <Main>
        <form>
        <Link to="/">
          <CaretLeft /> voltar
        </Link>
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
                  onClick={() => setSelectIsOpen((prev) => !prev)}
                  onChange={(e) => setCategory(e.target.value)}
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
            onClick={() => handleRemoveTag(ingrediente)}
          />
        ))}
        <IngredienteItem
          onChange={(e) => setNewIngrediente(e.target.value)}
          value={newIngrediente}
          onClick={handleNewTag}

isNew
          />
      </div>
    </div>
            <Input
              className="preço"
              title="Preço"
              value={value}
              type="number"
              placeholder="19,99"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>

          <div className="descrição">
            <label htmlFor="description">Descrição</label>
            <textarea
                      maxLength="200"
              value={description}
              placeholder="Descreva seu prato nesse campo"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="buttons">
            <Button title="Salvar Prato" onClick={handleNewDishe} disabled={isFormValid} />
          </div>
        </form>
      </Main>
      <Footer />
    </Container>
  );
}
