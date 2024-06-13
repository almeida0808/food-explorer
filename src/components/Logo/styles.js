import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
  > img {
    width: 2.7rem;
  }
  div {
    display: flex;
    flex-direction: column;

    h1 {
      font-family: Roboto;
      font-size: 2.3rem;
      font-style: normal;
      font-weight: 700;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    small {
      display: none;
      color: ${({ theme }) => theme.COLORS.BLUE_200};
    }
  }
`;
