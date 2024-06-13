import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 :root{
font-size: 16px;

@media (max-width:768px) {
    font-size: 14px;

}

 }
 body{
background-color: ${({ theme }) => theme.COLORS.DARK_400};

input{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
}

button{
    cursor: pointer;
    font-family: "Poppins", sans-serif;
  font-weight: 500;
transition: filter 0.3s;
  &:hover{
    filter: brightness(0.8);

  }
}
 }
 `;
