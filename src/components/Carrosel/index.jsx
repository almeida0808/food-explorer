import { Container } from "./styles";
import { CardFood } from "../Card-food";
import maracuja from "../../assets/maracuja.png";
import { useMediaQuery } from "react-responsive";
import { Divide } from "@phosphor-icons/react";

export function CarrosselFood({ title,like= false, isAdmin, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: 768 }); // verifica se tem tamanho de desktop


  return (
    <Container className="carrosel">
      
      <h2>{title}</h2>

{isDesktop & (<div></div>)}
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
        />  <CardFood
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
