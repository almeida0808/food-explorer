import styled from "styled-components";
export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: Roboto;

  padding: 0.5rem 0.9rem;
  border-radius: 6px;
  display: flex;
  width: max-content;
  height: 26px;
  gap: 6px;
  align-items: center;
  font-size: 1rem;
  button {
    display: flex;
    align-items: center;
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    svg {
      font-size: 0.9rem;
    }
  }
`;
