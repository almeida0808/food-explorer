import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: max-content;
  margin: -40px auto;
  display: flex;
  place-content: center;
  flex-direction: column;
  > div:first-child {
    margin-bottom: 70px;
    justify-content: center;
  }

  > form:last-child {
    grid-area: form;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-areas: "logo form";

    gap: 100px;

    form {
      padding: 42px;
      display: flex;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      border-radius: 8px;

      h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: Poppins;
        font-weight: 400;
        text-align: center;
        padding-bottom: 32px;
      }
      input {
        margin: 0;
        width: 240px;
      }
    }
  }

  @media (min-width: 1024px) {
    form {
      padding: 64px;

      input {
        width: 340px;
      }
    }
  }
`;
