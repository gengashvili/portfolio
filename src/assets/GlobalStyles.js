import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: non;
    text-decoration: none;
  }
  html{
    font-size: 62.5%;
  }
  body {
    background-color: ${({darkMode})=>darkMode?'#0C151D':'#E9EBEC'};
  }
  p{
    color: ${({darkMode})=>darkMode?'#A3ABB2':'#575757'};
    font-size: 1.6rem;
  }
  h1{
    color: ${({darkMode})=>darkMode?'#F1F2F4':'#3D3D3D'};
    font-size: 3.2rem;
  }
  
`;
export default GlobalStyles;

