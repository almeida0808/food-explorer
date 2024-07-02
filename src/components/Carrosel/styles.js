import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
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

      .left {
        background: linear-gradient(
          270deg,
          rgba(9, 9, 121, 0) 0%,
          rgba(0, 0, 0, 0.847887323943662) 67%
        );
        margin-left: -2px;
      }

      .right {
        display: flex;
        justify-content: right;
        background: linear-gradient(
          90deg,
          rgba(9, 9, 121, 0) 0%,
          rgba(0, 0, 0, 0.847887323943662) 67%
        );

        button {
          justify-content: right;
        }
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
