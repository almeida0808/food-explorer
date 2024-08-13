import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;

  .swiper {
  }
  .swiper-button-prev,
  .swiper-button-next {
  }

  > h2 {
    // ESTILO DO TITULO
    margin: 0 0 0 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 1.12rem;
    font-weight: 400;
  }

  .cards {
    // ESTILO DA DIV QUE GUARDA OS CARDS
    display: flex;
    flex-direction: row; // faz com qu os cards fiquem tudo em uma linha só
    overflow-x: scroll; // caso tenha mais de um item ele ativa o scroll , x por causa de ser na vertical
    scroll-behavior: smooth; // deixa o  scroll mais suave
    gap: 1rem; // distancia de um card pro outro
    position: relative;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 24px;
      font-weight: 600;
      z-index: 40;
    }

    .arrows {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      position: absolute;
      width: 91%;

      button {
        border: none;
        display: flex;
        font-size: 50px;
        color: white;
        align-items: center;
        z-index: 1;
        background: none;
      }

      .left,
      .right {
        width: 230px;
        height: 413px;
        display: flex;
        z-index: 1;
      }
    }
  }

  @media (min-width: 1024px) {
    .arrows {
      width: 90.5%;
      .left,
      .right {
        height: 497px;
      }
    }
  }
`;
