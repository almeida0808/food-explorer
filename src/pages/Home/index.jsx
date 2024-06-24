import { Container, Main } from "./styles";
import { CardFood } from "../../components/Card-food";
import frutasBanner from "../../assets/frutas-banner.png";
import { CarrosselFood } from "../../components/Carrosel";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { useState } from "react";
export function Home({ isAdmin = false, ...rest }) {

  return (
    <Container>
      <Menu isAdmin={isAdmin}/>
      <Main>
        <section className="banner">
          <img src={frutasBanner} alt="" />

          <div className="background-banner">
            <div>
              <h2>Sabores inigualáveis</h2>
              <p>
                Sinta o cuidado do preparo com
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
