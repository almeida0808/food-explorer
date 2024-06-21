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

  > .banner {
    margin-top: 2.6rem;
    position: relative;
    > img {
      width: 12rem;
      height: 9rem;
      position: absolute;
      bottom: 0px;
      left: -1.6rem;
      z-index: 5;
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
          width: 180px;
        }
      }
    }

    @media (min-width: 1024px) {
      margin-top: 130px;
      img {
        bottom: 66px;
        left: -60px;
        width: 560px;
        height: 320px;
      }

      .backround-banner {
        height: 200px;

        > div {
          left: 520px;
          top: 45px;

          h2 {
            font-size: 35px;
          }

          p {
            font-size: 16px;
            width: 380px;
          }
        }
      }
    }

    @media (min-width: 1300px) {
      .backround-banner {
        height: 200px;

        > div {
          left: 520px;
          top: 45px;

          h2 {
            font-size: 45px;
          }

          p {
            font-size: 16px;
            width: 100%;
          }
        }
      }
    }
  }
`;
