import { Container } from "./styles";
import { Logo } from "../Logo";
import { motion } from "framer-motion";

export function Footer({...rest}) {
  const bannerVariants = {
    hidden: { opacity: 0.5, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0, 
        duration: 0.5,
      },
    },
  };
  return (
      <motion.div variants={bannerVariants} initial="hidden" animate="visible"> 
    <Container>

<Logo className="logo"/>
<span>© 2023 - Todos os direitos reservados.</span>
    </Container>
      </motion.div>
  );
 
}
