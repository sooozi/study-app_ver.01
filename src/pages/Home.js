import styled from "styled-components";
// import textStyles from "../style/Text.module.css";

const Wrapper = styled.div`
    height: inherit;
    padding-top: 3rem;
`;

const BigTxt = styled.h3 `
  text-align: center;
  font-size: 3rem;
  font-weight: bolder;
  letter-spacing: -0.1rem;
  line-height: 1.5;
  color: rgb(57, 32, 5);
`;

const GradaBigTxt = styled(BigTxt) `
  background-image: linear-gradient(to right, ${(props) => props.leftColor} 30%, ${(props) => props.rightColor} 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(0, 0, 0, 0);
`;

function Home() {
    return (
      <>
        <Wrapper>
          <BigTxt>Improve Your</BigTxt>
          <GradaBigTxt leftColor="rgb(255, 175, 88)" rightColor="rgb(255, 65, 65)">Favorite Language</GradaBigTxt>
          <BigTxt>With Natives</BigTxt>
        </Wrapper>
      </>
    );
  }
  
  export default Home;