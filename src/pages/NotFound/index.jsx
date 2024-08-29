import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Container, Main } from "./styles";
import { motion } from "framer-motion";
import { useQuantity } from "../../hooks/QuantityContext";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { SmileyXEyes } from "@phosphor-icons/react";

export function NotFound({ ...rest }) {

  const { getTotalQuantity, quantities } = useQuantity();

  const errorVariants = {
    hidden: {  scale:0 },
    visible: {
      scale: 1,
      transition: {
        delay: 0,
        duration: 0.9,
      },
    },
  };

  return (
    <Container>
      <Menu totalQuantity={getTotalQuantity()}  />
      <Main>
        <motion.div  initial="hidden"
         animate="visible" 
         variants={errorVariants} className="error">
          <h1>404</h1>
          <h2> NOT FOUND</h2>
          <SmileyXEyes />
        </motion.div>
      </Main>
      <Footer />
    </Container>
  );
}
