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

  button {
    cursor: pointer;
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

  textarea::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(255, 219, 184, 1);
    background-color: rgba(255, 219, 184, 0.5);
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 20px;
  }
  *::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
    border-radius: 20px;
  }
  *::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(255, 175, 88);
    border-radius: 20px;
  }

  br.mo {
    display: none;
    @media only screen and (max-device-width : 767px) {
      display: block;
    }
  }
`;

export default GlobalStyle;