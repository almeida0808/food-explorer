import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  border: none;
  padding: 60px 22px 22px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 32px;
  }

  > .logo {
    img {
      width: 2rem;
    }
    h1 {
      font-size: 1.6rem;
    }
  }

  > .pedidos {
    svg {
      font-size: 28px;
      right: 20px;
      align-items: center;
      position: absolute;
    }
    button {
      position: relative;
      bottom: 4px;
      left: 10px;
      width: 20px;
      height: 20px;
      background-color: ${({ theme }) => theme.COLORS.RED_300};
      border: none;
      border-radius: 50%;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-weight: 300;
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
