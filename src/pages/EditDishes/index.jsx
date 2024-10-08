import { useState, useEffect } from "react";
import { Container, Main } from "./styles";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Menu } from "../../components/Menu";
import { IngredienteItem } from "../../components/Ingrediente-item";
import { motion } from "framer-motion";
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

  const formVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

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
      } catch (error) {
        alert(`Erro ao carregar nota: (${error.message})`);
        navigate("/");
      }
    }

    fetchDish();
  }, [params.id, navigate]);

  useEffect(() => {
    if (
      name &&
      category &&
      description &&
      imagePreview &&
      value &&
      ingredientes
    ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [name, category, description, imagePreview, value, ingredientes]);

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

    setNewIngrediente("");
  }

  function handleRemoveTag(deleted) {
    const confirmDeleted = confirm("Deseja deletar este ingrediente?");
    if (confirmDeleted) {
      setIngredientes((prevState) =>
        prevState.filter((tag) => tag !== deleted)
      );
    }
  }
  const HandleSelectIsOpen = () => {
    setSelectIsOpen((prevState) => !prevState);
  };

  async function handleEditDish(event) {
    event.preventDefault();

    if (
      !name ||
      !value ||
      !category ||
      !description ||
      ingredientes.length === 0
    ) {
      alert(
        "Por favor, preencha todos os campos e adicione pelo menos um ingrediente."
      );
      return;
    }

    const fileForm = new FormData();

    if (imageFile) {
      fileForm.append("image", imageFile);
    }
    fileForm.append("name", name);
    fileForm.append("description", description);
    fileForm.append("category", category);
    fileForm.append(
      "value",
      parseFloat(value.replace(",", ".")).toFixed(2).replace(",", ".")
    );
    fileForm.append("ingredientes", ingredientes.join(","));

    try {
      await api.put(`/pratos/${params.id}`, fileForm, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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

  async function handleDeleteDish() {
    const confirmDelete = confirm(
      "Você tem certeza que deseja excluir este prato?"
    );
    if (confirmDelete) {
      try {
        await api.delete(`/pratos/${params.id}`);
        
        alert("Prato deletado com sucesso!");
        navigate("/");
      } catch (error) {
        alert("Não foi possível excluir este prato");
      }
    }
    return
  }

  return (
    <Container {...rest}>
      <Menu />
      <Main>
        <motion.form initial="hidden" animate="visible" variants={formVariants}>
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
                  onChange={(e) => setCategory(e.target.value)}
                  onClick={HandleSelectIsOpen}
                  onBlur={() => setSelectIsOpen(false)}
                  name="food-category"
                  id="food-category"
                  value={category}
                >
                  <option value="refeição">Refeição</option>
                  <option value="sobremesa">Sobremesa</option>
                  <option value="bebida">Drink</option>
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
            <Button title="Excluir Prato" onClick={handleDeleteDish} />
            <Button
              title="Salvar Prato"
              onClick={handleEditDish}
              disabled={isFormValid}
            />
          </div>
        </motion.form>
      </Main>
      <Footer />
    </Container>
  );
}
