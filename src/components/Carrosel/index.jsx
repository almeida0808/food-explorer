import { Container } from "./styles";
import { CardFood } from "../Card-food";
import maracuja from "../../assets/maracuja.png";
import { useMediaQuery } from "react-responsive";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useRef, useState } from "react";

export function CarrosselFood({ title, like = false, DisheCategory,isAdmin, ...rest }) {
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
          
          <CardFood
            title={"Suco de Maracujá"}
            like={like}
            isAdmin={isAdmin}
            value={"19,90"}
            imageUrl="https://s3-alpha-sig.figma.com/img/2a3a/f2da/858bcacaf0fdef44b4e289c158179e28?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J1AFsKIs0nsPxInM5htX71nPs8KSTDe7t11~d9bBKnuWdK0PVBY5RcSDX2uD9rsNYKXpqw9-twHFmSbwq~QxVtgC9SGLBPO5ui5Og6kd2d3ib0xXNnnqF~qtXjTYj5trL-hyPXmPFLDleBpSLckxlpPqiuVVxwqBQ3BABFiR0lO9F9Ed0Si9KUPMwNr84X-4kRxDm46E3j7PW~O5Xs1BmgycR~OCy3D5ECQFv60ytAvXMfHetfGNj5XT5ScQtb2zk4jSn8AS7Xy3P1WeInuJAAK83FL1YbgtGJPjrFkPKmtTxETPnZdD2tFQEC9g4Avnk7u12xc3RFWJZ57KNvq2jg__"
          />
        </section>
      </div>
    </Container>
  );
}
