import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const bigTxt = css`
  text-align: center;
  font-size: 3rem;
  font-weight: bolder;
  letter-spacing: -0.1rem;
  line-height: 1.5;
  color: rgb(57, 32, 5);
`;

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

  .bigTxt {
    ${bigTxt}
  }

  .gradientText {
    ${bigTxt}
    background-image: linear-gradient(to left, var(--leftColor) 30%, var(--rightColor));
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
  }

`;

export default GlobalStyle;