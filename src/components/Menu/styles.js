import styled from "styled-components";

export const Container = styled.div`
  grid-area: menu;
  width: 100%;
  top: 0;

  nav {
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    position: absolute;
    z-index: 10;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }
  .options {
    margin: 0 auto;
    width: 90%;
    //   right: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    .pesquisar {
      display: flex;
      gap: 1rem;
      padding: 12px 14px;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      margin-top: 34px;
      svg {
        font-size: 2rem;
      }
      input {
        width: 100%;
        border: none;
        background: none;
        outline: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
    ul {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      button {
        background: none;
        display: flex;
        justify-content: initial;
        border: none;
        color: white;
        padding: 10px 10px 10px 0;
        font-family: Poppins;
        font-size: 1.8rem;
        font-weight: 200;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      }

      a {
      }
    }
  }
`;
