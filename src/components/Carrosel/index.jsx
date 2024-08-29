import { Container } from "./styles";
import { useMediaQuery } from "react-responsive";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function CarrosselFood({
  title,
  children,
  like = false,
  DisheCategory,

  ...rest
}) {
  const isSmallMobile = useMediaQuery({ minWidth: 300, maxWidth: 374 });
  const isMobile = useMediaQuery({ minWidth: 375, maxWidth: 574 });
  const isTablet = useMediaQuery({ minWidth: 575, maxWidth: 1299 });
  const isDesktop = useMediaQuery({ minWidth: 1300, maxWidth: 1699 });
  const isLargeDesktop = useMediaQuery({ minWidth: 1700 });
 
  // Definir a animação com delays para cada slide
  const slideVariants = {
    hidden: { opacity: 0, scale: 0. },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3, // Ajuste o delay entre os itens
        duration: 0.5,
      },
    }),
  };

  return (
    <Container className="carrosel">
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        loop={true}
        slidesPerView={
          isSmallMobile
            ? 1.8
            : isMobile
            ? 2
            : isTablet
            ? 3
            : isDesktop
            ? 4
            : isLargeDesktop
            ? 5
            : 1
        }
        navigation={isTablet || isDesktop || isLargeDesktop}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>
            <motion.div
              custom={index}
              initial="hidden"
              animate="visible"
              variants={slideVariants}
            >
              {child}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
