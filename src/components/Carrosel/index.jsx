import { Container } from "./styles";
import { useMediaQuery } from "react-responsive";
import { Navigation, Pagination  , A11y } from 'swiper/modules';

import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function CarrosselFood({
  title,
  children,
  like = false,
  DisheCategory,
  isAdmin,
  ...rest
}) {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 560 });


  return (
    <Container className="carrosel">
      <h2>{title}</h2>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        breakpoints={{
          320: {
            slidesPerView: 2,  // 1 slide visível para telas pequenas
          },
          640: {
            slidesPerView: 3,
          },
          1024: {

            slidesPerView: 4,  // 3 slides visíveis para telas grandes
          },
          1440: {
            slidesPerView: 5,  // 4 slides visíveis para telas extra grandes
          },
        }}
        loop={true}
        >
        {children}
      </Swiper>

{/* 
{isMobile ?   <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={"s"}
        loop={true}
        >
        {children}
      </Swiper> : <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        loop={true}
        navigation
        >
        {children}
      </Swiper>}

     */}

      {/* <div className="PreviewFoods">
  <Swiper  modules={[Navigation,Pagination]} navigation pagination>
        {children}
        </Swiper>
      </div> */}
    </Container>
  );
}
