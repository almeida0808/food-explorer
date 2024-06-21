import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  border: none;
  padding: 4rem 1.4rem 1.4rem;
  display: flex;
  width: 100%;
  height: max-content;
  justify-content: space-between;
  align-items: center;

  .menu {
    display: flex;
    gap: 1rem;
    position: relative;
    button {
      background: none;
      border: none;

      display: flex;
      align-items: center;

      svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 2rem;
      }
    }
    h1 {
      font-family: Poppins;
      font-weight: 400;
      color: white;
    }
  }
  .list {
    background: none;
    border: none;

    display: flex;
    align-items: center;
    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2rem;
    }
  }

  > .logo {
    svg {
      font-size: 1.8rem;
    }
    h1 {
      font-size: 1.4rem;
    }
  }

  > .pedidos {
    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      font-size: 1.75rem;
      right: 1rem;
      align-items: center;
      position: absolute;
    }
    button {
      position: relative;
      bottom: 4px;
      left: 10px;
      width: 1.25rem;
      height: 1.25rem;
      background-color: ${({ theme }) => theme.COLORS.RED_300};
      border: none;
      border-radius: 50%;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-weight: 300;
      font-size: 0.9rem;
    }
  }

  .headerDesktop {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    width: 100%;

    button {
      border: none;
      border-radius: 5px;
    }
    .logo {
      svg {
        font-size: 1.8rem;
      }
      h1 {
        font-size: 1.4rem;
      }
    }

    .pesquisar {
      display: flex;
      align-items: center;
      gap: 1rem;
      border-radius: 5px;
      padding: 12px 14px;
      height: 48px;
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};

      svg {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
      input {
        width: 100%;
        border: none;
        background: none;
        outline: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        &::placeholder {
          font-size: 0.8rem;
        }
      }
    }

    .pedidos,
    .newPrato {
      height: 48px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 290px;
      background-color: ${({ theme }) => theme.COLORS.RED_300};
      border: none;
      border-radius: 5px;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: Poppins;
      font-weight: 400;

      svg {
        font-size: 1.6rem;
      }
    }
    .signOut {
      display: flex;
      align-items: center;
      background: none;

      svg {
        color: white;
        font-size: 1.6rem;
      }
    }
  }

  @media (min-width: 500px) {
    padding: 24px 80px;

    > .pedidos {
      svg {
        right: 5.6rem;
      }
    }
  }

  @media (min-width: 769px) {
    padding: 24px 80px;

    > .pedidos {
      svg {
        right: 5rem;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 24px 80px;
  }
`;
