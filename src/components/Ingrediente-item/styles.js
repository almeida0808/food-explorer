import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.5rem 0.8rem;
  height: 26px;
  width: max-content;
  font-family: Roboto;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

  border: 1px dashed ${({ theme }) => theme.COLORS.LIGHT_500};
  border-radius: 6px;
  input {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    outline: none;
    max-width: 70px;

    &::placeholder {
      font-family: Roboto;
      font-size: 1rem;
      width: min-content;
    }
  }

  button {
    display: flex;
    align-items: center;
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    svg {
      font-size: 10px;
      color: ${({ theme, isNew }) =>
        isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    }
  }
`;
