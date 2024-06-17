import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1.5rem;
  > h2 {
    // ESTILO DO TITULO
    margin: 0 0 1.5rem 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 1.12rem;
    font-weight: 400;
  }

  > .PreviewFoods {
    // ESTILO DA DIV QUE GUARDA OS CARDS
    display: flex;
    flex-direction: row; // faz com qu os cards fiquem tudo em uma linha só
    overflow-x: auto; // caso tenha mais de um item ele ativa o scroll , x por causa de ser na vertical
    scroll-behavior: smooth; // deixa o  scroll mais suave
    gap: 1rem; // distancia de um card pro outro

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
