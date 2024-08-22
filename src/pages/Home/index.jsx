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

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/pratos?name=${search}`);
      const fetchedDishes = response.data.pratos.map(dish => ({
        ...dish,
        quantity: quantities[dish.id] || 0 // Define a quantidade inicial para cada prato com base no contexto
      }));
      setDishes(fetchedDishes);
    }
    
    fetchDishes();
  }, [search, quantities]); // Inclua 'quantities' como dependência para garantir a atualização correta

  return (
    <Container>
      <Menu totalQuantity={getTotalQuantity()} onSearch={handleSearchChange} isAdmin={isAdmin} />
      <Main>
        <section className="banner">
          <img src={frutasBanner} alt="" />
          <div className="background-banner">
            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </div>
        </section>

        {dishes.filter((dish) => dish.category === "refeição").length > 0 && (
          <CarrosselFood title="Pratos Principais">
            {dishes
              .filter((dish) => dish.category === "refeição")
              .map((dish) => (
                <SwiperSlide className="cards" key={dish.id}>
                  <CardFood isAdmin={isAdmin} data={dish} quantity={dish.quantity} />
                </SwiperSlide>
              ))}
          </CarrosselFood>
        )}

        {dishes.filter((dish) => dish.category === "sobremesa").length > 0 && (
          <CarrosselFood title="Sobremesas">
            {dishes
              .filter((dish) => dish.category === "sobremesa")
              .map((dish) => (
                <SwiperSlide className="cards" key={dish.id}>
                  <CardFood isAdmin={isAdmin} data={dish} quantity={dish.quantity} />
                </SwiperSlide>
              ))}
          </CarrosselFood>
        )}

        {dishes.filter((dish) => dish.category === "bebida").length > 0 && (
          <CarrosselFood title="Bebidas">
            {dishes
              .filter((dish) => dish.category === "bebida")
              .map((dish) => (
                <SwiperSlide className="cards" key={dish.id}>
                  <CardFood isAdmin={isAdmin} data={dish} quantity={dish.quantity} />
                </SwiperSlide>
              ))}
          </CarrosselFood>
        )}
      </Main>
      <Footer />
    </Container>
  );
}
