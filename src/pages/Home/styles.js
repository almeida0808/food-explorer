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
    margin-top: 2.6rem;
    position: relative;
    > img {
      width: 12rem;
      height: 9rem;
      position: absolute;
      bottom: 0px;
      left: -1.6rem;
      z-index: 10;
    }
    .backround-banner {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      background: ${({ theme }) => theme.COLORS.GRADIENT_200};
      height: 7rem;
      display: flex;
      margin: 0 0 4rem 15px;

      flex-direction: column;
      gap: 3px;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: Poppins;

      > div {
        position: absolute;
        top: 1.5rem;
        left: 11rem;
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
  }
`;
