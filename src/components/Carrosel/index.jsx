import { Container } from "./styles";
import { CardFood } from "../Card-food";
import maracuja from "../../assets/maracuja.png";

export function CarrosselFood({ title,like= false, isAdmin, ...rest }) {
  return (
    <Container className="carrosel">
      <h2>{title}</h2>

      <section className="PreviewFoods">
        {/* esse são os cards dos produtods mas pode ter quantos quiser, provavelmente você vai pega=los de um banco de dados */}
        <CardFood
          title={"Suco de Maracujá"}
          like={like}
          isAdmin={isAdmin}
          value={"19,90"}
          imageUrl={maracuja}
        />
        <CardFood
          title={"Suco de Maracujá"}
          like={like}
          isAdmin={isAdmin}
          value={"19,90"}
          imageUrl={maracuja}
        />{" "}
        <CardFood
          title={"Suco de Maracujá"}
          like={like}
          isAdmin={isAdmin}
          value={"19,90"}
          imageUrl={maracuja}
        />
          <CardFood
          title={"Suco de Maracujá"}
          like={like}
          isAdmin={isAdmin}
          value={"19,90"}
          imageUrl={maracuja}
        />
      </section>
    </Container>
  );
}
