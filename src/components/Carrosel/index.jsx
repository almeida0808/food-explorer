import { Container } from "./styles";
import { CardFood } from "../Card-food";
import maracuja from "../../assets/maracuja.png";
import { useMediaQuery } from "react-responsive";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useRef } from "react";

export function CarrosselFood({ title, like = false, isAdmin, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: 768 }); // verifica se tem tamanho de desktop
  const carrosel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carrosel.current.offsetWidth);
    carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carrosel.current.scrollLeft += carrosel.current.offsetWidth;
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
          {/* esse são os cards dos produtods mas pode ter quantos quiser, provavelmente você vai pega=los de um banco de dados */}
         
          <CardFood
            title={"Suco de Maracujá"}
            like={like}
            isAdmin={isAdmin}
            value={"19,90"}
            imageUrl="https://s3-alpha-sig.figma.com/img/2a3a/f2da/858bcacaf0fdef44b4e289c158179e28?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J1AFsKIs0nsPxInM5htX71nPs8KSTDe7t11~d9bBKnuWdK0PVBY5RcSDX2uD9rsNYKXpqw9-twHFmSbwq~QxVtgC9SGLBPO5ui5Og6kd2d3ib0xXNnnqF~qtXjTYj5trL-hyPXmPFLDleBpSLckxlpPqiuVVxwqBQ3BABFiR0lO9F9Ed0Si9KUPMwNr84X-4kRxDm46E3j7PW~O5Xs1BmgycR~OCy3D5ECQFv60ytAvXMfHetfGNj5XT5ScQtb2zk4jSn8AS7Xy3P1WeInuJAAK83FL1YbgtGJPjrFkPKmtTxETPnZdD2tFQEC9g4Avnk7u12xc3RFWJZ57KNvq2jg__"
          />
          <CardFood
            title={"Suco de Maracujá"}
            like={like}
            isAdmin={isAdmin}
            value={"19,90"}
            imageUrl="https://s3-alpha-sig.figma.com/img/3963/9111/6d672c4f830cbb8c6c5536ade350b379?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rk5ljBezCQcvB7T0CktfqeS-1Qt5PMR0h-w6KwW9EKqF75lJutMJaucIw5BSWngtcCXHRp6DD7fMTWcU3IDQ4Xg9Ua9ehuK2uLoTzGJ-vbhWaUwwfkfo5uQJhGS2LlOGtbM5jlhusSiwn~1vRyN-GiQu-aG1NPJVeXawxizd5jDdpYMVOU9X5p2bMzztsWlQRortiXAad~J06RY4-WCippyz9Q7GF~oGx0nyGpDB5A5sseiCpIPD2hF-wD5oAgM5TrMg0ONipKLpuZyapcKJWkWxp5xfCrZWnL8AslrbYzzb1-grVAA8Br1XsJNtx0UrypKvx7XzHq6G9i2u7hdovA__"
          />{" "}
          <CardFood
            title={"Suco de Maracujá"}
            like={like}
            isAdmin={isAdmin}
            value={"19,90"}
            imageUrl={maracuja}
          /> <CardFood
          title={"Suco de Maracujá"}
          like={like}
          isAdmin={isAdmin}
          value={"19,90"}
          imageUrl="https://s3-alpha-sig.figma.com/img/2a3a/f2da/858bcacaf0fdef44b4e289c158179e28?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J1AFsKIs0nsPxInM5htX71nPs8KSTDe7t11~d9bBKnuWdK0PVBY5RcSDX2uD9rsNYKXpqw9-twHFmSbwq~QxVtgC9SGLBPO5ui5Og6kd2d3ib0xXNnnqF~qtXjTYj5trL-hyPXmPFLDleBpSLckxlpPqiuVVxwqBQ3BABFiR0lO9F9Ed0Si9KUPMwNr84X-4kRxDm46E3j7PW~O5Xs1BmgycR~OCy3D5ECQFv60ytAvXMfHetfGNj5XT5ScQtb2zk4jSn8AS7Xy3P1WeInuJAAK83FL1YbgtGJPjrFkPKmtTxETPnZdD2tFQEC9g4Avnk7u12xc3RFWJZ57KNvq2jg__"
        />
        <CardFood
          title={"Suco de Maracujá"}
          like={like}
          isAdmin={isAdmin}
          value={"19,90"}
          imageUrl="https://s3-alpha-sig.figma.com/img/3963/9111/6d672c4f830cbb8c6c5536ade350b379?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rk5ljBezCQcvB7T0CktfqeS-1Qt5PMR0h-w6KwW9EKqF75lJutMJaucIw5BSWngtcCXHRp6DD7fMTWcU3IDQ4Xg9Ua9ehuK2uLoTzGJ-vbhWaUwwfkfo5uQJhGS2LlOGtbM5jlhusSiwn~1vRyN-GiQu-aG1NPJVeXawxizd5jDdpYMVOU9X5p2bMzztsWlQRortiXAad~J06RY4-WCippyz9Q7GF~oGx0nyGpDB5A5sseiCpIPD2hF-wD5oAgM5TrMg0ONipKLpuZyapcKJWkWxp5xfCrZWnL8AslrbYzzb1-grVAA8Br1XsJNtx0UrypKvx7XzHq6G9i2u7hdovA__"
        />{" "}
        <CardFood
          title={"Suco de Maracujá"}
          like={like}
          isAdmin={isAdmin}
          value={"19,90"}
          imageUrl={maracuja}
        /> <CardFood
        title={"Suco de Maracujá"}
        like={like}
        isAdmin={isAdmin}
        value={"19,90"}
        imageUrl="https://s3-alpha-sig.figma.com/img/2a3a/f2da/858bcacaf0fdef44b4e289c158179e28?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J1AFsKIs0nsPxInM5htX71nPs8KSTDe7t11~d9bBKnuWdK0PVBY5RcSDX2uD9rsNYKXpqw9-twHFmSbwq~QxVtgC9SGLBPO5ui5Og6kd2d3ib0xXNnnqF~qtXjTYj5trL-hyPXmPFLDleBpSLckxlpPqiuVVxwqBQ3BABFiR0lO9F9Ed0Si9KUPMwNr84X-4kRxDm46E3j7PW~O5Xs1BmgycR~OCy3D5ECQFv60ytAvXMfHetfGNj5XT5ScQtb2zk4jSn8AS7Xy3P1WeInuJAAK83FL1YbgtGJPjrFkPKmtTxETPnZdD2tFQEC9g4Avnk7u12xc3RFWJZ57KNvq2jg__"
      />
      <CardFood
        title={"Suco de Maracujá"}
        like={like}
        isAdmin={isAdmin}
        value={"19,90"}
        imageUrl="https://s3-alpha-sig.figma.com/img/3963/9111/6d672c4f830cbb8c6c5536ade350b379?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rk5ljBezCQcvB7T0CktfqeS-1Qt5PMR0h-w6KwW9EKqF75lJutMJaucIw5BSWngtcCXHRp6DD7fMTWcU3IDQ4Xg9Ua9ehuK2uLoTzGJ-vbhWaUwwfkfo5uQJhGS2LlOGtbM5jlhusSiwn~1vRyN-GiQu-aG1NPJVeXawxizd5jDdpYMVOU9X5p2bMzztsWlQRortiXAad~J06RY4-WCippyz9Q7GF~oGx0nyGpDB5A5sseiCpIPD2hF-wD5oAgM5TrMg0ONipKLpuZyapcKJWkWxp5xfCrZWnL8AslrbYzzb1-grVAA8Br1XsJNtx0UrypKvx7XzHq6G9i2u7hdovA__"
      />{" "}
      <CardFood
        title={"Suco de Maracujá"}
        like={like}
        isAdmin={isAdmin}
        value={"19,90"}
        imageUrl={maracuja}
      /> <CardFood
      title={"Suco de Maracujá"}
      like={like}
      isAdmin={isAdmin}
      value={"19,90"}
      imageUrl="https://s3-alpha-sig.figma.com/img/2a3a/f2da/858bcacaf0fdef44b4e289c158179e28?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J1AFsKIs0nsPxInM5htX71nPs8KSTDe7t11~d9bBKnuWdK0PVBY5RcSDX2uD9rsNYKXpqw9-twHFmSbwq~QxVtgC9SGLBPO5ui5Og6kd2d3ib0xXNnnqF~qtXjTYj5trL-hyPXmPFLDleBpSLckxlpPqiuVVxwqBQ3BABFiR0lO9F9Ed0Si9KUPMwNr84X-4kRxDm46E3j7PW~O5Xs1BmgycR~OCy3D5ECQFv60ytAvXMfHetfGNj5XT5ScQtb2zk4jSn8AS7Xy3P1WeInuJAAK83FL1YbgtGJPjrFkPKmtTxETPnZdD2tFQEC9g4Avnk7u12xc3RFWJZ57KNvq2jg__"
    />
    <CardFood
      title={"Suco de Maracujá"}
      like={like}
      isAdmin={isAdmin}
      value={"19,90"}
      imageUrl="https://s3-alpha-sig.figma.com/img/3963/9111/6d672c4f830cbb8c6c5536ade350b379?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rk5ljBezCQcvB7T0CktfqeS-1Qt5PMR0h-w6KwW9EKqF75lJutMJaucIw5BSWngtcCXHRp6DD7fMTWcU3IDQ4Xg9Ua9ehuK2uLoTzGJ-vbhWaUwwfkfo5uQJhGS2LlOGtbM5jlhusSiwn~1vRyN-GiQu-aG1NPJVeXawxizd5jDdpYMVOU9X5p2bMzztsWlQRortiXAad~J06RY4-WCippyz9Q7GF~oGx0nyGpDB5A5sseiCpIPD2hF-wD5oAgM5TrMg0ONipKLpuZyapcKJWkWxp5xfCrZWnL8AslrbYzzb1-grVAA8Br1XsJNtx0UrypKvx7XzHq6G9i2u7hdovA__"
    />{" "}
    <CardFood
      title={"Suco de Maracujá"}
      like={like}
      isAdmin={isAdmin}
      value={"19,90"}
      imageUrl={maracuja}
    />
        </section>
      </div>
    </Container>
  );
}
