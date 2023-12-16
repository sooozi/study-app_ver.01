import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: "Montserrat";
    color: rgb(57, 32, 5);
  }

  #root {
    background-color: rgba(255, 219, 184, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  textarea::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.1);
    border-radius: 5px;
    background-color: rgba(238, 238, 238,0.3);
  }

  textarea::-webkit-scrollbar {
    width: 5px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(255, 219, 184, 1);
    background-color: rgba(255, 219, 184, 0.5);
  }
`;

export default GlobalStyle;