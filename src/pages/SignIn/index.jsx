import { Container } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/Text-button";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { motion } from "framer-motion";

export function SignIn() {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn({ email, password });
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

  return (
    <Container>
      {/* Animação de piscar para a logo */}
      <motion.div
        variants={logoVariants}
        initial="initial"
        animate="animate"
      >
        <Logo class/>
      </motion.div>

      {/* Animação de entrada para o formulário */}
      <motion.form
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        {isDesktop && <h1>Faça seu login</h1>}

        <Input
          title="Email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="exemplo@email.com"
        />
        <Input
          type="password"
          title="Senha"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="No mínimo 6 caracteres"
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">
          <TextButton title="Criar uma Conta" />
        </Link>
      </motion.form>
    </Container>
  );
}
