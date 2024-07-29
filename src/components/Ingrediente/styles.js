import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin-bottom: 0.8rem;
  border-radius: 1rem;
  padding-left: 1.6rem;

  > button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    margin-right: 1.6rem;
    svg {
      font-size: 2.2rem;
    }
  }

  .button-delete {
    color: red;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.VIOLET};
  }

  > input {
    height: 5.6rem;
    width: 100%;
    padding: 1.3rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    background: transparent;

    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
