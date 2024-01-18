import toast, { Toaster } from 'react-hot-toast';
import styled, { StyleSheetManager, css } from "styled-components";
import Button from '../components/Button';

const Wrapper = styled.div`
    padding-top: 5rem;
    text-align: center;
`;

const BigTxt = styled.h3 `
    text-align: center;
    font-size: 3rem;
    font-weight: bolder;
    letter-spacing: -0.1rem;
    line-height: 1.4;
    color: rgb(57, 32, 5);
    /* / 스마트폰 모바일(가로) / */
    @media only screen and (max-device-width : 767px) {
        font-size: 2.5rem;
    }
    /* / 스마트폰 모바일(세로) / */
    @media only screen and (max-device-width : 479px) {
        font-size: 2rem;
    }
    /* / 스마트폰 모바일(아이폰 SE) / */
    @media only screen and (max-device-width : 374px) {
        font-size: 1.5rem;
    }
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
    /* / 스마트폰 모바일(가로) / */
    @media only screen and (max-device-width : 767px) {
        font-size: 12px;
    }
`;

const ToastBox = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto;
  button {
    margin: 0 !important;
    height: 45px;
    padding: 0 2rem;
    /* / 스마트폰 모바일(가로) / */
    @media only screen and (max-device-width : 767px) {
        height: 40px;
        padding: 0 1.5rem;
    }
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
    const StartNotify = () => toast('Click Menu!',
    {
      icon: '🖱️',
      style: {
        borderRadius: '10px',
        background: '#ffbe77',
        color: '#fff',
        fontWeight: '600',
      },
    }
  );

    return (
      <>
        <Wrapper>
          <BigTxt>Hello! Friend👋</BigTxt>
          <StyleSheetManager shouldForwardProp={(prop) => prop !== 'leftColor' && prop !== 'rightColor'}>
            <GradaBigTxt leftColor="rgb(255, 175, 88)" rightColor="rgb(255, 65, 65)">Enjoy Study App</GradaBigTxt>
          </StyleSheetManager>
          <BigTxt>With Zipcoak</BigTxt>
          <Description>
            Make your study time delightful<br className="mo"></br> with the Zipcoak study app!<br></br>
            Hope you enjoy it! 😉
          </Description>
          <ToastBox>
            <Button buttonText={<span style={{ fontWeight: 'bold' }}>Get Started</span>} showArrow={false} isGradButton={true} />
            <button className="btn_hide" onClick={StartNotify} />
          </ToastBox>
          <Toaster position="top-center" />
        </Wrapper>
      </>
    );
  }
  
  export default Home;