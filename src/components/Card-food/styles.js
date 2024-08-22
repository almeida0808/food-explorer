import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  width: 150px;
  display: flex;
  height: ${(props) => (props.isAdmin ? "max-content" : "250px")};
  flex-direction: column;
  place-content: center;
  padding: ${(props) => (props.isAdmin ? "8px" : "16px")};

  flex: none;

  text-align: center;

  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
    filter: saturate(1.2);
  }

  button:first-child {
    border: none;
    background: none;
    width: max-content;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > .like,
  .edit {
    cursor: pointer;

    position: relative;
    font-size: 1.6rem;
    left: 110px;
    top: 14px;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  > img {
    object-fit: cover;

    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin: 0 auto;
  }

  > .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.2rem;
    font-weight: 300;
    font-family: Poppins;
    padding-top: 0.56rem;

    transition: all 0.2s;
    &:hover {
      transform: scale(1.05);

      cursor: pointer;
    }
  }

  > .value {
    font-size: 1rem;
    font-family: Roboto;
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
    padding-top: 0.5rem;
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
    padding-top: 0;
    gap: 15px;
    width: 235px;
    height: ${(props) => (props.isAdmin ? "max-content" : "410px")};

    box-sizing: border-box;
    .like,
    .edit {
      font-size: 32px;
      left: 180px;
      top: 25px;
    }

    img {
      width: 140px;
      height: 140px;
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
    padding: ${(props) => (props.isAdmin ? "12px" : "24px")};
    height: ${(props) => (props.isAdmin ? "400px" : "500px")};
    width: 300px;

    gap: 15px;
    .like,
    .edit {
      font-size: 34px;
      left: 220px;
      top: 18px;
    }

    img {
      width: 176px;
      height: 176px;
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
