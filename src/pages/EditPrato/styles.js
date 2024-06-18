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

  > button:first-child {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;
    gap: 0.6rem;
    align-items: center;

    margin: 2.2rem 15rem 1rem 0;

    font-size: 1rem;
    font-weight: 400;
  }

  form {
    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: Poppins;
      font-weight: 400;
      font-size: 1.8rem;
      padding-bottom: 2rem;
    }
    label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 1rem;
      font-family: Roboto;
      font-weight: 400;
    }
    .foodCategory {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding-bottom: 2rem;

      select {
        padding: 0.87rem 0.75rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border: none;
        border-radius: 5px;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        width: 100%;

        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        -ms-appearance: none;
      }
      .selectWrapper {
        position: relative;
        display: inline-block;
      }

      .selectWrapper select {
        padding-right: 30px; /* espaço para o ícone */
      }

      .selectWrapper .icon {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        font-size: 1rem;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none; /* para que o ícone não interfira na interação com o select */
      }
    }

    .tags {
      display: flex;
      flex-direction: column;
      gap: 8px;

      margin-bottom: 2rem;

      #ingredientes {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 5px;
        padding: 5px 10px;
        display: flex;
        justify-content: initial;
        gap: 8px;
        flex-wrap: wrap;
      }
    }

    .descrição {
      display: flex;
      flex-direction: column;
      gap: 8px;

      > textarea {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        padding: 10px 9px;
        height: 10rem;
        border: none;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_600};
        resize: none;
      }
    }

    .buttons {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
      > button:first-child {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
      }
      > button:last-child {
        background-color: ${({ theme }) => theme.COLORS.RED_100};
        transition: all 0.3s;
        &:hover {
          background-color: ${({ theme }) => theme.COLORS.RED_300};
        }
      }
    }
  }
`;
