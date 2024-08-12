import { Container, Main } from "./styles";
import { CardFood } from "../../components/Card-food";
import frutasBanner from "../../assets/frutas-banner.png";
import { CarrosselFood } from "../../components/Carrosel";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

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
      const response = api.get(`/pratos?name=${search}`);
      setDishes((await response).data.pratos);
      console.log((await response).data.pratos)
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

        <CarrosselFood dishes={dishes} isAdmin={isAdmin} title="Refeições">
          {dishes && dishes.map((dishe) => (
            <CardFood
            key={String(dishe.id)}
            data={dishe}
            />
          ))}
        </CarrosselFood>
      </Main>
      <Footer />
    </Container>
  );
}
