import { Container } from "./styles";
import { CardFood } from "../Card-food";
import maracuja from "../../assets/maracuja.png";
import { useMediaQuery } from "react-responsive";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useRef, useState } from "react";

export function CarrosselFood({ title,children, like = false, DisheCategory,isAdmin, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: 768 }); // verifica se tem tamanho de desktop
  const carrosel = useRef(null);


  const [ category, setCategory ] = useState(DisheCategory)
  
  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carrosel.current.offsetWidth);
    carrosel.current.scrollLeft -= 350;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carrosel.current.scrollLeft += 350;
  };

  return (
    <Container className="carrosel">
      <h2>{title}</h2>

      <div className="PreviewFoods">
        {isDesktop && (
          <div className="arrows">
            <div className="left">
              <button onClick={handleLeftClick}>{<CaretLeft />}</button>
            </div>
            <div className="right">
              <button onClick={handleRightClick}>{<CaretRight />}</button>
            </div>
          </div>
        )}
        <section className="cards" ref={carrosel}>
          
     {children}
        
        </section>
      </div>
    </Container>
  );
}
