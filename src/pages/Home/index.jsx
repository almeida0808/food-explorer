import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { CardFood } from "../../components/Card-food";
import frutasBanner from "../../assets/frutas-banner.png";
import maracuja from "../../assets/maracuja.png"

export function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <section className="banner">
          <div className="elements">
            <img src={frutasBanner} alt="" />
            <div className="texto">
              <h2>Sabores inigualáveis</h2>
              <p>
                Sinta o cuidado do preparo com <br />
                ingredientes selecionados.
              </p>
            </div>
          </div>
        </section>
        <CardFood title={"Suco de Maracujá"}like={false} value={"19,90"} imageUrl={maracuja}/>
      </Main>
    </Container>
  );
}
