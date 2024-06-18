import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: max-content auto max-content;
`;

export const Main = styled.main`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  grid-area: main;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 80%;
  align-items: center;
  font-family: Poppins;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > button:first-child {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;
    gap: 0.6rem;
    align-items: center;

    margin: 2.2rem 15rem 1rem 0;

    font-size: 1.5rem;
    font-weight: 400;
  }
  > img {
    width: 16rem;
  }

  > h1 {
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
      font-size: 0.8rem;
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

  .eYyrhx {
  }
`;
