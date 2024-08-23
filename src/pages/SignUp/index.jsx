import { Container } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/Text-button";
import { useMediaQuery } from "react-responsive";
import { useState } from "react"; // STATES DO REACT
import { api } from "../../services/api"; // IMPORTA AS CONFIGS DO AXIOS
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Importa o framer-motion

export function SignUp() {
  //CRIAMOS ESTADOS PRA GUARDAR OS DADOS DO USUÁRIO
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    // FUNÇÃO QUE VAI ENVIAR OS DADOS PRO BACKEND
    if (!name || !email || !password) {
      alert("Preencha todos os campos");
      return;
    }
    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário criado com sucesso");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar usuário");
        }
      });
  }

  // Variantes para a animação da logo (loop de piscar)
  const logoVariants = {
    initial: { opacity: 1 },
    animate: {
      opacity: [1,1, 0,1, 1], // Pisca de opaco para transparente e volta
      transition: {
        duration: 4, // Tempo de um ciclo de piscar
        repeat: Infinity, // Repetir indefinidamente
      },
    },
  };

  // Variantes para a animação do formulário (entrada)
  const formVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5, // Duração da animação
        ease: "easeOut", // Curva de animação
      },
    },
  };


  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <Container>
      {/* Animação de piscar para a logo */}
      <motion.div
        variants={logoVariants}
        initial="initial"
        animate="animate"
      >
        <Logo />
      </motion.div>

      {/* Animação de entrada para o formulário */}
      <motion.form
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        {isDesktop && <h1>Crie sua conta</h1>}
        <Input
          title="Nome"
          onChange={(e) => setName(e.target.value)} // ATUALIZA O ESTADO
          placeholder="Seu nome"
        />
        <Input
          title="Email"
          onChange={(e) => setEmail(e.target.value)} // ATUALIZA O ESTADO
          placeholder="exemplo@email.com"
        />
        <Input
          type="password"
          title="Senha"
          onChange={(e) => setPassword(e.target.value)} // ATUALIZA O ESTADO
          placeholder="No mínimo 6 caracteres"
        />
        <Button title="Criar conta" onClick={handleSignUp} />{" "}
        {/*ACIONA A FUNÇÃO QUE ENVIA OS DADOS PRO BACKEND */}
        <Link to="/">
          <TextButton title="Já tenho uma conta" />
        </Link>
      </motion.form>
    </Container>
  );
}
