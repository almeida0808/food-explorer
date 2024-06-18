import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 1rem;
  font-family: Roboto;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  padding-bottom: 2rem;
  gap: 8px;
  > input {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    border-radius: 5px;

    padding: 0.87rem 0.75rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    &::placeholder {
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_600};
    }
  }
`;
