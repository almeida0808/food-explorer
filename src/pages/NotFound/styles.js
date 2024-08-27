import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  display: grid;
  grid-template-areas:
    "menu"
    "main"
    "footer";

  grid-template-rows: auto auto max-content;
`;

export const Main = styled.main`
  overflow: hidden;
  margin: 0 auto;
  height: max-content;
  width: 90%;
  grid-area: main;
  display: flex;
  flex-direction: column;

  > h1 {
  }
`;
