import { Container, Main } from "./styles";
import { CardFood } from "../../components/Card-food";
import frutasBanner from "../../assets/frutas-banner.png";
import { CarrosselFood } from "../../components/Carrosel";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
export function Home({  ...rest }) {

const {user} = useAuth()

  const [role, setRole ] = useState(user.role)
const isAdmin = role == "admin"

  return (
    
    <Container>
      <Menu isAdmin={isAdmin} onClick={()=> console.log(isAdmin)
}/>
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
