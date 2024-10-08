import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  display: grid;

  grid-template-areas:
    "menu"
    "main"
    "footer";

  grid-template-rows: auto auto max-content;
`;

export const Main = styled.main`
  margin: 0 auto;
  grid-area: main;
  min-width: 90%;
  max-width: 90%;

  .imgPreview {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: max-content;
    span {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      font-size: 1rem;
    }
    img {
      border: solid 1px ${({ theme }) => theme.COLORS.LIGHT_400};
      width: 70px;
      height: 70px;
      border-radius: 50%;
      object-fit: cover;
      overflow: hidden;
      margin: 0 auto;
      margin-bottom: 18px;
    }
  }
  form {
    > a:first-child {
      font-family: "Poppins", sans-serif;
      text-decoration: none;
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      display: flex;
      gap: 0.6rem;
      align-items: center;
      font-size: 1rem;
      font-weight: 400;
      margin: 2.2rem 15rem 1rem 0;

      font-weight: 400;
    }
    width: 100%;
    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: Poppins;
      font-weight: 400;
      font-size: 1.8rem;
      padding-bottom: 2rem;
    }
    label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 1rem;
      font-family: Roboto;
      font-weight: 400;
    }

    input {
      font-family: "Roboto", sans-serif;
      font-weight: 300;
    }

    > .formPartOne {
      .imgFood {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding-bottom: 2rem;
        div {
          background-color: ${({ theme }) => theme.COLORS.DARK_900};
          font-family: Poppins;
          color: ${({ theme }) => theme.COLORS.LIGHT_200};
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 5px;
          height: 46px;

          svg {
            font-size: 1.5rem;
          }

          span {
            font-size: 1rem;
          }
          input {
            display: none;
          }
        }
      }

      .foodCategory {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding-bottom: 2rem;

        select {
          font-family: "Roboto", sans-serif;
          font-weight: 300;
          font-size: 1rem;

          color: ${({ theme }) => theme.COLORS.LIGHT_400};

          width: 100%;
          padding: 0.87rem 0.75rem;
          background-color: ${({ theme }) => theme.COLORS.DARK_900};

          border: none;
          border-radius: 5px;

          appearance: none;
          -moz-appearance: none;
          -webkit-appearance: none;
          -ms-appearance: none;
        }
        .selectWrapper {
          position: relative;
          display: inline-block;
        }

        .selectWrapper select {
          padding-right: 30px;
        }

        .selectWrapper .icon {
          color: ${({ theme }) => theme.COLORS.LIGHT_400};
          font-size: 1rem;
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }
      }
    }

    > .formPartTwo {
      .tags {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 2rem;
        width: 100%;

        #ingredientes {
          background-color: ${({ theme }) => theme.COLORS.DARK_900};
          border-radius: 5px;
          padding: 10px 12px;
          display: flex;
          justify-content: initial;
          align-items: center;
          gap: 8px;
          height: max-content;
          flex-wrap: wrap;
          min-width: 100%;
        }
      }
    }

    .descrição {
      display: flex;
      flex-direction: column;
      gap: 8px;

      > textarea {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        padding: 10px 9px;
        height: 10rem;
        border: none;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        resize: none;
      }
    }

    .buttons {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
      > button:first-child {
        font-size: 1rem;
        font-weight: 400;
      }
      > button:last-child {
        font-weight: 400;

        font-size: 1rem;
        transition: all 0.3s;
      }
    }

    @media (min-width: 1024px) {
      max-width: 1400px;
      margin: 0 auto;

      .formPartOne,
      .formPartTwo {
        display: flex;
        align-items: center;
        gap: 32px;
      }
      .imgPreview {
        img {
          width: 100px;
          height: 100px;
        }
      }
      .formPartOne {
        .imgFood {
          width: 100%;

          div {
            height: 44px;
          }
        }
        .name {
          font-size: 16px;
        }

        .foodCategory {
          width: 230px;
          select {
            font-size: 16px;
          }
        }
      }

      .formPartTwo {
        .tags {
          display: flex;
          flex-direction: column;
          gap: 8px;

          margin-bottom: 2rem;

          #ingredientes {
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            border-radius: 5px;
            padding: 10px 12px;
            display: flex;
            justify-content: initial;
            align-items: center;
            gap: 8px;
            flex-wrap: nowrap;
            overflow: scroll;
            height: max-content;
            width: 590px;

            &::-webkit-scrollbar {
              height: 5px;
              width: 100%;
            }
            &::-webkit-scrollbar-track {
              background-color: ${({ theme }) => theme.COLORS.DARK_700};
            }

            &::-webkit-scrollbar-thumb {
              background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
            }

            span {
              background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
            }
          }
        }
        .preço {
          width: 130px;

          font-size: 16px;
        }
      }

      .buttons {
        justify-content: end;
        button {
          width: 170px;
        }
      }
    }
  }
`;
