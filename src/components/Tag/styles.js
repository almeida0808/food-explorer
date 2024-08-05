import styled from "styled-components";

export const Container = styled.span`
  font-size: 16px;
  font-family: Poppins;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 5px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;
