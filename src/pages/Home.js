import styled from "styled-components";

const Wrapper = styled.div`
    height: inherit;
    padding-top: 3rem;
`;

const BigTxt = styled.h3`
  color: rgb(57, 32, 5);
  text-align: center;
  font-size: 3rem;
  font-weight: bolder;
  line-height: 1.5;
`;

const GradaBigTxt = styled.h3`
  background-image: linear-gradient(to left, ${(props) => props.leftColor} 30%, ${(props) => props.rightColor});
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(0,0,0,0);
  text-align: center;
  font-size: 3rem;
  font-weight: bolder;
  line-height: 1.5;
`;

function Home() {
    return (
      <>
        <Wrapper>
          <BigTxt>Improve Your</BigTxt>
          <GradaBigTxt rightColor="rgb(255, 175, 88)" leftColor="rgb(255, 65, 65)">Favorite Language</GradaBigTxt>
          <BigTxt>With Natives</BigTxt>
        </Wrapper>
      </>
    );
  }
  
  export default Home;