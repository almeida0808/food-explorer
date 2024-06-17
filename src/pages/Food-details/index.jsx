import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { CardFood } from "../../components/Card-food";
import frutasBanner from "../../assets/frutas-banner.png";
import { CarrosselFood } from "../../components/Carrosel";
import { Footer } from "../../components/Footer";
export function FoodDetails({ isAdmin = true, ...rest }) {
  return (
    <Container>
      <Header isAdmin={isAdmin}/>
      <Main>
        <section className="banner">
          <img src={frutasBanner} alt="" />

          <div className="backround-banner">
            <div>
              <h2>Sabores inigualáveis</h2>
              <p>
                Sinta o cuidado do preparo com <br />
                ingredientes selecionados.
              </p>
            </div>
          </div>
        </section>

        <CarrosselFood isAdmin={isAdmin} title="Refeições" />
        <CarrosselFood isAdmin={isAdmin} title="Pratos Principais" />
        <CarrosselFood isAdmin={isAdmin} title="Bebidas" />
      </Main>
      <Footer />
    </Container>
  );
}
