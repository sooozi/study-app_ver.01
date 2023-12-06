import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import './Text.module.css';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: "Montserrat";
  }

  #root {
    background-color: rgba(255, 219, 184, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

export default GlobalStyle;