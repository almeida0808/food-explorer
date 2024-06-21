import styled from "styled-components";
export const Container = styled.div`
  display: flex;

  align-items: center;
  gap: 10px;
  .exagon {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
  }
  div {
    width: max-content;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    h1 {
      font-family: Roboto;
      font-size: 2.3rem;
      font-style: normal;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    small {
      color: ${({ theme }) => theme.COLORS.BLUE_200};
    }
  }
`;
