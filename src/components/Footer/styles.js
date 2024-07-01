import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 1.2rem 0;
  justify-content: space-evenly;
  align-items: center;
  height: max-content;
  margin-top: 2rem;
  width: 100%;

  position: relative;
  bottom: 0;

  .logo {
    gap: 01px;
    h1,
    svg {
      font-size: 12px;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  > span {
    font-family: Poppins;
    font-size: 0.75rem;
    font-weight: 100;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
`;
