import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body{
    background-color: #ffff0026;
  }
`;

export default GlobalStyle;