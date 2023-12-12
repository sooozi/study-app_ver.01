import toast, { Toaster } from 'react-hot-toast';
import styled, { StyleSheetManager, css } from "styled-components";
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
  ${({ leftColor, rightColor }) => css`
    background-image: linear-gradient(to right, ${leftColor} 30%, ${rightColor} 70%);
  `}
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

const ToastBox = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto;
  button {
    margin: 0 !important;
  }
  .btn_hide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;


function Home() {
    const PreparingNotify = () => toast('Preparing...!', {
      icon: '🙇‍♀️',
    });

    return (
      <>
        <Wrapper>
          <BigTxt>Hello! Friend👋</BigTxt>
          <StyleSheetManager shouldForwardProp={(prop) => prop !== 'leftColor' && prop !== 'rightColor'}>
            <GradaBigTxt leftColor="rgb(255, 175, 88)" rightColor="rgb(255, 65, 65)">Enjoy Study App</GradaBigTxt>
          </StyleSheetManager>
          <BigTxt>With Zipcoak</BigTxt>
          <Description>
            Make your study time delightful with the Zipcoak study app!<br></br>
            Hope you enjoy it! 😉
          </Description>
          <ToastBox>
            <Button buttonText={<span style={{ fontWeight: 'bold' }}>Get Started</span>} showArrow={false} isGradButton={true} />
            <button className="btn_hide" onClick={PreparingNotify} />
          </ToastBox>
          <Toaster position="top-right" />
        </Wrapper>
      </>
    );
  }
  
  export default Home;