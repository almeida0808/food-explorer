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

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2rem;
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

  > .buttonRed {
    display: none;
    font-weight: 300;
  }

  > .signOut {
    display: none;
  }
`;
