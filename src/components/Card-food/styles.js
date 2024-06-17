import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  width: 13.1rem;
  display: flex;
  flex-direction: column;

  flex: none;

  text-align: center;
  padding: 1.5rem;
  padding-top: 0;

  > .like,
  .edit {
    position: relative;
    font-size: 1.8rem;
    left: 8.75rem;
    top: 10px;
  }

  > img {
    width: 5.8rem;
    margin: 0 auto;
  }

  > .title {
    font-size: 0.9rem;

    font-family: Poppins;
    padding-top: 0.56rem;
  }

  > .value {
    font-family: Roboto;
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    padding-top: 0.56rem;
  }
  > .AddFood {
    .quantidade {
      display: flex;
      justify-content: center;

      gap: 8px;
      padding: 0.56rem 0 0.56rem;

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
    .buttonRed {
      background: ${({ theme }) => theme.COLORS.RED_300};

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 1rem;
      font-weight: 400;

      border: none;
      margin: 0px;
      width: 100%;
      padding: 4px 0;
      border-radius: 5px;
    }
  }
`;
