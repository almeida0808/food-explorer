import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;

export const Main = styled.main`
  max-width: 90%;
  margin: 0 auto;
  height: max-content;
  > .banner {
    position: relative;
    height: 100px;
    background: ${({ theme }) => theme.COLORS.GRADIENT_200};
    margin: 50px auto 0;
    width: 100%;

    > .elements {
      position: absolute;
      bottom: 0;
      display: flex;

      img {
        width: 11.9rem;
        height: 9.3rem;
      }
    }

    .texto {
      height: min-content;
      display: flex;
      flex-direction: column;
      gap: 3px;
      padding-top: 3.4rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: Poppins;

      h2 {
        font-weight: 500;
        font-size: 1.09rem;
        width: max-content;
      }

      p {
        font-weight: 300;
        font-size: 0.7rem;
        width: max-content;
      }
    }
  }
`;
