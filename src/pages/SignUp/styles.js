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

  > div:last-child {
    display: flex;
    flex-direction: column;
  }
`;
