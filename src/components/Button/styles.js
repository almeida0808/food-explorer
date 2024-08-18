import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.COLORS.RED_100 : theme.COLORS.RED_300};
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-family: Poppins;

  padding: 0.75rem;
  height: 3rem;
  width: 100%;
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
