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
  grid-template-rows: max-content auto max-content;
`;

export const Main = styled.main`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  grid-area: main;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  max-width: 80%;
  align-items: center;
  font-family: Poppins;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  .voltar {
    a:first-child {
      margin: 25px 0;
      text-decoration: none;
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      display: flex;
      gap: 0.6rem;
      align-items: center;
      font-size: 1.3rem;
      font-weight: 400;
    }

    width: 100%;
  }
  .food {
    display: flex;
    flex-direction: column;
    img {
      width: 200px;
      height: 200px;
      object-fit: cover;

      justify-content: center;
      margin: 0 auto;
      border-radius: 50%;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    > h1 {
      text-align: center;
      font-weight: 400;
      font-size: 1.8rem;
      padding-top: 1.5rem;
    }

    p {
      text-align: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-weight: 400;
      padding-top: 0.5rem;
      padding-bottom: 1rem;
    }

    > .ingredientes {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      flex-wrap: wrap;
      padding: 1.5rem 0 4rem;
    }

    .addFood {
      display: flex;
      flex-direction: row;
      gap: 10px;
      .quantidade {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 500;
        gap: 8px;

        button {
          background: none;
          border: none;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          font-size: 1.5rem;
        }
      }
      .buttonRed {
        margin: 0;
        font-size: 0.9rem;
        font-weight: 300;
        padding: 9px 40px;

        span {
          display: flex;
          align-items: center;
          gap: 8px;
          svg {
            font-size: 1.8rem;
          }
        }
      }
    }
  }

  .addFood {
    margin-top: 24px;
    .buttonRed {
      padding: 12px 24px;
    }
  }

  @media (min-width: 1024px) {
    .voltar {
      display: flex;
      align-items: center;
    }

    .buttonBack {
      width: 100%;
      display: flex;
    }

    .food {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 45px;

      img {
        width: 350px;
        height: 350px;
      }

      .details {
        max-width: 690px;
        flex-direction: column;
        gap: 24px;
        h1,
        p {
          text-align: left;
          padding: 0;
        }
        .ingredientes {
          justify-content: left;
          padding: 0;
        }

        .buttonRed {
          padding: 0;
          width: 150px;
          margin: 0;
        }
      }
    }
    .buttonRed {
      padding: 12px;
    }
  }
`;
