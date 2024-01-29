import React from 'react';
import { Toaster } from 'react-hot-toast';
import styled from "styled-components";
import Header from './layout/Header';


const AppWrap = styled.div`
    background: rgba(255, 243, 229, 1);
    width: 100%;
    max-width: 1080px;
    border-radius: 3rem;
    padding: 2rem;
    margin: 0 50px;
    height: 85vh;
    @media only screen and (max-device-width : 767px) {
        border-radius: 2rem;
        padding: 1rem;
        margin: 0 1rem;
        max-width: 500px;
        width: -webkit-fill-available;
    }
    @media only screen and (max-device-width : 320px) {
        padding: 1rem 5px;
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    @media only screen and (max-device-width : 767px) {
        width: auto;
        margin: 0 .25rem;
        /* overflow: hidden; */
    }
`;

function App() {
  // const PreparingNotify = () => toast('Preparing...!', {
  //   icon: '🙇‍♀️',
  //   style: {
  //     fontWeight: '600',
  //   },
  // });

  return (
    <>
      <AppWrap>
        <Container>
          <Header /> 
        </Container>
        <Toaster position="top-center" />   
      </AppWrap>
      {/* <GlobalStyle /> */}
    </>
  );
}

export default App;
