import { Container } from "./styles";
import { useMediaQuery } from "react-responsive";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function CarrosselFood({
  title,
  children,
  like = false,
  DisheCategory,
  isAdmin,
  ...rest
}) {
  const isSmallMobile = useMediaQuery({ minWidth: 300, maxWidth: 374 });
  const isMobile = useMediaQuery({ minWidth: 375, maxWidth: 574 });
  const isTablet = useMediaQuery({ minWidth: 575, maxWidth: 1299 }); // Intervalo para tablets
  const isDesktop = useMediaQuery({ minWidth: 1300, maxWidth:1699 });
  const isLargeDesktop = useMediaQuery({ minWidth: 1700 });

  return (
    <Container className="carrosel">
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        loop={true}
        slidesPerView={
          isSmallMobile ? 1.8 : isMobile ? 2 : isTablet ? 3 : isDesktop ? 4 : isLargeDesktop ? 5 : 1 // Caso não se enquadre em nenhum dos casos acima, exibe 1 slide
        }
        navigation={isTablet || isDesktop ||isLargeDesktop} // Ativa navegação para tablets e desktops
      >
        {children}
      </Swiper>
    </Container>
  );
}
