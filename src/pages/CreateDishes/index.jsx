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
import { motion } from "framer-motion";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

export function CreateDishes({ ...rest }) {
  const [value, setValue] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState("sobremesa");
  const [description, setDescription] = useState();
  
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  
  const [ingredientes, setIngredientes] = useState([]);
  const [newIngrediente, setNewIngrediente] = useState("");
  
  const [selectIsOpen, setSelectIsOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);


  const formVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3, // Atraso para cada carrossel
        duration: 0.5,
      },
    },
  };

  const navigate = useNavigate();
  const { user } = useAuth();

useEffect(()=>{
  if(name && category && description && image && value && ingredientes){
setIsFormValid(false)
  }else{
    setIsFormValid(true)
  }
},[name,category,description,image,value, ingredientes])


function formatarValor(value) {
  setValue(parseFloat(value.replace(',', '.')).toFixed(2).replace('.', ','))

}

  function handleAddTag() {
    if (!newIngrediente.trim()) {
      alert("Por favor, adicione um ingrediente válido.");
      return;
    }
    setIngredientes((prevState) => [...prevState, newIngrediente]);
    setNewIngrediente("");
  }

  function handleRemoveTag(deleted) {
    setIngredientes((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  function handleNewImage(event) {
    const file = event.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImage(imagePreview);
  }

  async function handleNewDishe() {

    // Verificação do campo name
    if (!name) {
      alert("Por favor, informe o nome do prato");
      return;
    }
    // Verificação dos ingredientes
    if (!ingredientes || ingredientes.length === 0) {
      alert("Por favor, adicione pelo menos um ingrediente.");
      return;
    }

    // Verificação do campo newIngrediente
    if (newIngrediente) {
      alert(
        "Ops... Um ingrediente ficou esquecido no formulário. Confirme o ingrediente ou deixe o campo vazio!"
      );
      return;
    }

    if (!value) {
      alert("Por favor, informe o valor do prato");
      return;
    }
    if (!description) {
      alert("Por favor, adicione uma descrição do prato");
      return;
    }

    if (!imageFile) {
      alert("Por favor, adicione uma foto do prato");
      return;
    }

    const fileForm = new FormData();
    fileForm.append("image", imageFile);
    fileForm.append("name", name);
    fileForm.append("description", description);
    fileForm.append("category", category);
    fileForm.append("value", value);
    fileForm.append("ingredientes",ingredientes); // Converte array para string se necessário
    console.log(fileForm)
    
    try {
      // Requisição à API para criar um novo prato
      await api.post(`/pratos`, fileForm);
    

      // Mensagem de sucesso
      alert("Prato criado com sucesso!");
      navigate("/");
    } catch (error) {
      // Tratamento de erros da API
      if (error.response && error.response.data) {
        // Exibe a mensagem de erro retornada pelo backend
        alert(`Erro: ${error.response.data.message}`);
      } else {
        // Erro genérico (ex: problemas de rede)
        alert("Erro ao criar o prato. Tente novamente mais tarde.");
      }
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
        <motion.form initial="hidden" animate="visible" variants={formVariants}>
        <Link to="/">
          <CaretLeft /> voltar
        </Link>
          <h1>Criar Prato</h1>

{
  image && 
  <div className="imgPreview">
    <span>Imagem Selecionada</span>
  <img src={image} alt="" />
  </div>
}


          <div className="formPartOne">
            <label className="imgFood" htmlFor="ImgFood">
              Imagem do prato
              <div>
                <UploadSimple />
                <span>Selecione uma imagem</span>
                <input type="file" onChange={handleNewImage} id="ImgFood" />
              </div>
            </label>

            <Input
              maxLength="30"
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
                  <option value="refeição">Refeição</option>
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
              type="number"
              placeholder="19,99"
              onChange={(e) => {formatarValor(e.target.value);
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
            <Button title="Salvar Prato" onClick={handleNewDishe} disabled={isFormValid} />
          </div>
        </motion.form>
      </Main>
      <Footer />
    </Container>
  );
}
