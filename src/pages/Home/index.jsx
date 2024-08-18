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

export function Home({ ...rest }) {
  const { user } = useAuth();
  const [role, setRole] = useState(user.role);
  const isAdmin = role == "admin";

  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState([]);

  function handleSearchChange(newSearch) {
    setSearch(newSearch);
  }
  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/pratos?name=${search}`);
      setDishes(response.data.pratos);
    }
    
    fetchDishes();
  }, [search]);
  
  console.log(dishes);
  return (
    <Container>
      <Menu onSearch={handleSearchChange} isAdmin={isAdmin} />
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

      {dishes.filter((dish) => dish.category == "refeição").length > 0 && (
        <CarrosselFood title="Pratos Principais">
          {dishes
            .filter((dish) => dish.category == "refeição")
            .map((dish) => (<SwiperSlide className="cards">
            <CardFood isAdmin={isAdmin} key={String(dish.id)} data={dish} />
          </SwiperSlide>))}
        </CarrosselFood>
      )}


        {dishes.filter((dish) => dish.category == "sobremesa").length > 0 && (
          <CarrosselFood title="Sobremesas">
            {dishes
              .filter((dish) => dish.category == "sobremesa")
              .map((dish) => (<SwiperSlide className="cards">
              <CardFood  isAdmin={isAdmin} key={String(dish.id)} data={dish} />
            </SwiperSlide>))}
          </CarrosselFood>
        )}

{dishes.filter((dish) => dish.category == "bebida").length > 0 && (
          <CarrosselFood title="Bebidas">
            {dishes
              .filter((dish) => dish.category == "bebida")
              .map((dish) => (<SwiperSlide className="cards">
              <CardFood isAdmin={isAdmin} key={String(dish.id)} data={dish} />
            </SwiperSlide>))}
          </CarrosselFood>
        )}

      </Main>
      <Footer />
    </Container>
  );
}
