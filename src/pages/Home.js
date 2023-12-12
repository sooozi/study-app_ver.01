import styled from "styled-components";
import Button from '../components/Button';

const Wrapper = styled.div`
    padding-top: 3rem;
    text-align: center;
`;

const BigTxt = styled.h3 `
  text-align: center;
  font-size: 3rem;
  font-weight: bolder;
  letter-spacing: -0.1rem;
  line-height: 1.4;
  color: rgb(57, 32, 5);
`;

const GradaBigTxt = styled(BigTxt) `
  background-image: linear-gradient(to right, ${(props) => props.leftColor} 30%, ${(props) => props.rightColor} 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(0, 0, 0, 0);
`;

const Description = styled.p`
    color: rgb(165, 159, 159);
    text-align: center;
    font-weight: 100;
    line-height: 1.4;
    margin: 2rem 0 3rem;
`;


function Home() {
    return (
      <>
        <Wrapper>
          <BigTxt>Hello! Friend👋</BigTxt>
          <GradaBigTxt leftColor="rgb(255, 175, 88)" rightColor="rgb(255, 65, 65)">Enjoy Study App</GradaBigTxt>
          <BigTxt>With Zipcoak</BigTxt>
          <Description>
            Make your study time delightful with the Zipcoak study app!<br></br>
            Hope you enjoy it! 😉
          </Description>
          <Button buttonText={<span style={{ fontWeight: 'bold' }}>Get Started</span>} showArrow={false} isGradButton={true} />
        </Wrapper>
      </>
    );
  }
  
  export default Home;