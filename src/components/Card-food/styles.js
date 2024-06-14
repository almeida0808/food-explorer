import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  width: 210px;
  height: 290px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  place-content: center;
  text-align: center;

  > .like {
    position: relative;
    font-size: 2rem;
    left: 135px;
    top: 10px;
  }

  > img {
    width: 80px;
    margin: 0 auto;
  }

  > .title {
    font-family: Poppins;
    font-size: 1rem;
  }

  > .value {
    font-family: Roboto;
    font-weight: 300;
  }

  > .quantidade {
    display: flex;
    justify-content: center;
    gap: 8px;
    button {
      border: none;
      background: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    span {
      font-family: Roboto;
      font-weight: 300;
    }
  }

  > button {
    margin: 0;
  }
`;
