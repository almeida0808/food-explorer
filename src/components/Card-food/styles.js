import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  width: 12.1rem;
  display: flex;
  flex-direction: column;

  flex: none;

  text-align: center;
  padding: 1.5rem;

  a:first-child {
    background: none;
    width: max-content;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > .like,
  .edit {
    cursor: pointer;

    position: relative;
    font-size: 1.6rem;
    left: 8.4rem;
    top: 14px;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  > img {
    border-radius: 50%;
    width: 5.2rem;
    margin: 0 auto;
  }

  > .title {
    font-size: 0.8rem;

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
      flex-direction: row;

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

  @media (min-width: 768px) {
    padding: 24px;
    padding-top: 0;
    gap: 15px;
    width: 250px;
    .like,
    .edit {
      font-size: 32px;
      left: 190px;
      top: 25px;
    }

    img {
      width: 140px;
    }

    .title {
      padding: 0;

      font-weight: 700;
      font-size: 20px;
    }

    .value {
      padding: 0;

      font-size: 24px;
    }

    .description {
      padding: 0;

      font-family: Roboto;
      font-weight: 300;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > .AddFood {
      display: flex;
      gap: 16px;
      .quantidade {
        gap: 16px;
        font-size: 18px;

        button {
          font-size: 18px;
        }
      }
      .buttonRed {
        font-size: 16px;
      }
    }
  }
  @media (min-width: 1024px) {
    padding: 24px;
    gap: 15px;
    width: 300px;
    .like,
    .edit {
      font-size: 34px;
      left: 220px;
      top: 18px;
    }

    img {
      width: 176px;
    }

    .title {
      padding: 0;

      font-weight: 700;
      font-size: 24px;
    }

    .value {
      padding: 0;

      font-size: 32px;
    }

    > .AddFood {
      display: flex;
      gap: 16px;
      .quantidade {
        gap: 16px;
        font-size: 24px;

        button {
          font-size: 24px;
        }
      }
      .buttonRed {
        font-size: 16px;
      }
    }
  }
`;
