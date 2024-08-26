import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  overflow-y: hidden;
  .swiper {
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 18px;
  }

  > h2 {
    margin: 0 0 0 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 1.12rem;
    font-weight: 400;
  }

  .cards {
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-behavior: smooth;
    gap: 1rem;
    position: relative;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 24px;
      font-weight: 600;
      z-index: 40;
    }

    .arrows {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      position: absolute;
      width: 91%;

      button {
        border: none;
        display: flex;
        font-size: 50px;
        color: white;
        align-items: center;
        z-index: 1;
        background: none;
      }

      .left,
      .right {
        width: 230px;
        height: 413px;
        display: flex;
        z-index: 1;
      }
    }
  }

  @media (min-width: 1024px) {
    .arrows {
      width: 90.5%;
      .left,
      .right {
        height: 497px;
      }
    }
  }
`;
