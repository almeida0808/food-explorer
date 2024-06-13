import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.RED_300};
  border: none;
  border-radius: 5px;

  padding: 0.75rem;
  height: 3rem;
  width: 100%;
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
