import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
    font-family: sans-serif;
  }
  html{
    font-size: 62.5%;
  }
  body {
    background-color: ${({ darkMode }) => (darkMode ? "#0C151D" : "#E9EBEC")};
  }
  p,svg,a,label,input,textarea{
    color: ${({ darkMode }) => (darkMode ? "#A3ABB2" : "#575757")};
    font-size: 1.6rem;
  }
  h1{
    color: ${({ darkMode }) => (darkMode ? "#F1F2F4" : "#3D3D3D")};
    font-size: 3.2rem;
  }
  h2{
    color: ${({ darkMode }) => (darkMode ? "#F1F2F4" : "#3D3D3D")};
    font-size: 2rem;
  }
  button{
    cursor: pointer;
  }
  .btn{
      width: 60px;
      padding: 10px 5px;
      background-color: #007bff;
      color: #ffffff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background-color: #0056b3;
      }
  }

  .grid-heading{
    margin: 0 auto;
    grid-column: 1/-1;
  }

  @media (min-width: 540px){
    p,svg,a,label,input,textarea{
    font-size: 1.8rem;
    }
    h1{
    font-size: 3.6rem;
    }
    h2{
      font-size: 2.2rem;
    }
  }
  @media (min-width: 740px){
    p,svg,a,label,input,textarea{
    font-size: 2rem;
    }
    h1{
    font-size: 3.8rem;
    }
   h2{
      font-size: 2.4rem;
    }
    .btn{
      width: 70px;
    }
  }
  @media (min-width: 1040px){
    p,svg,a,label,input,textarea{
    font-size: 2.2rem;
    }
    h1{
    font-size: 4rem;
    }
    h2{
      font-size: 2.8rem;
    }
    .btn{
      width: 80px;
    }
  }
  @media (min-width: 1240px){
    p,svg,a,label,input,textarea{
    font-size: 2.4rem;
    }
    h1{
    font-size: 4.6rem;
    }
    h2{
      font-size: 3rem;
    }
  }
  
`;
export default GlobalStyles;
