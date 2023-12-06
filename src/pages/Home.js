import styled from "styled-components";
// import textStyles from "../style/Text.module.css";

const Wrapper = styled.div`
    height: inherit;
    padding-top: 3rem;
`;

function Home() {
    return (
      <>
        <Wrapper>
          {/* <BigTxt>Improve Your</BigTxt>
          <GradaBigTxt rightColor="rgb(255, 175, 88)" leftColor="rgb(255, 65, 65)">Favorite Language</GradaBigTxt>
          <BigTxt>With Natives</BigTxt> */}
          <h3 className="bigTxt">Improve Your</h3>
          <h3 className="gradientText" style={{ '--leftColor': 'rgb(255, 65, 65)', '--rightColor': 'rgb(255, 175, 88)' }}>Favorite Language</h3>
          <h3 className="bigTxt">With Natives</h3>
        </Wrapper>
      </>
    );
  }
  
  export default Home;