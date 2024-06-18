import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.5rem 0.9rem;
  width: 96px;
  height: 26px;

  background: none;

  border: 1px dashed ${({ theme }) => theme.COLORS.LIGHT_500};
  border-radius: 6px;

  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  font-size: 1rem;
  font-family: Roboto;

  input {
    background: none;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    width: 100%;
  }
  button {
    display: flex;
    align-items: center;
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    svg {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
