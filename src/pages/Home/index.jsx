import { Container, Main } from "./styles";
import { CardFood } from "../../components/Card-food";
import frutasBanner from "../../assets/frutas-banner.png";
import { CarrosselFood } from "../../components/Carrosel";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { SwiperSlide } from "swiper/react";
import { useQuantity } from "../../hooks/QuantityContext";
import { motion } from "framer-motion";

export function Home({ ...rest }) {
  const { user } = useAuth();
  const [role, setRole] = useState(user.role);
  const isAdmin = role === "admin";
  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState([]);
  const { getTotalQuantity, quantities } = useQuantity();

  function handleSearchChange(newSearch) {
    setSearch(newSearch);
  }
console.log(dishes.length >= 1)
  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/pratos?name=${search}`);
      const fetchedDishes = response.data.pratos.map((dish) => ({
        ...dish,
        quantity: quantities[dish.id] || 0,
      }));
      setDishes(fetchedDishes);
    }

    fetchDishes();
  }, [search, quantities]);

  const carrosselVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };
  const bannerVariants = {
    hidden: { opacity: 0.5, y: -100 },
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
    <Container>
      <Menu
        totalQuantity={getTotalQuantity()}
        onSearch={handleSearchChange}
        isAdmin={isAdmin}
      />
      <Main>
        <motion.section
          custom={2}
          initial="hidden"
          animate="visible"
          variants={bannerVariants}
          className="banner"
        >
          <img src={frutasBanner} alt="" />
          <div className="background-banner">
            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </div>
        </motion.section>
{dishes.length >= 1 ?
<div>
  {dishes.filter((dish) => dish.category === "refeição").length > 0 && (
    <motion.div
      custom={0}
      initial="hidden"
      animate="visible"
      variants={carrosselVariants}
    >
      <CarrosselFood title="Pratos Principais">
        {dishes
          .filter((dish) => dish.category === "refeição")
          .map((dish) => (
            <SwiperSlide className="cards" key={dish.id}>
              <CardFood
                isAdmin={isAdmin}
                data={dish}
                quantity={dish.quantity}
              />
            </SwiperSlide>
          ))}
      </CarrosselFood>
    </motion.div>
  )}

  {dishes.filter((dish) => dish.category === "sobremesa").length > 0 && (
    <motion.div
      custom={1}
      initial="hidden"
      animate="visible"
      variants={carrosselVariants}
    >
      <CarrosselFood title="Sobremesas">
        {dishes
          .filter((dish) => dish.category === "sobremesa")
          .map((dish) => (
            <SwiperSlide className="cards" key={dish.id}>
              <CardFood
                isAdmin={isAdmin}
                data={dish}
                quantity={dish.quantity}
              />
            </SwiperSlide>
          ))}
      </CarrosselFood>
    </motion.div>
  )}

  {dishes.filter((dish) => dish.category === "bebida").length > 0 && (
    <motion.div
      custom={2}
      initial="hidden"
      animate="visible"
      variants={carrosselVariants}
    >
      <CarrosselFood title="Bebidas">
        {dishes
          .filter((dish) => dish.category === "bebida")
          .map((dish) => (
            <SwiperSlide className="cards" key={dish.id}>
              <CardFood
                isAdmin={isAdmin}
                data={dish}
                quantity={dish.quantity}
              />
            </SwiperSlide>
          ))}
      </CarrosselFood>
    </motion.div>
  )}
</div>
      : <div className="NotFound">
        <h1>Nenhum prato encontrado</h1>
      </div>
      }
      </Main>
      <Footer />
    </Container>
  );
}
