import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styled from "styled-components";
import Header from './layout/Header';
import GlobalStyle from './style/GlobalStyle';


const AppWrap = styled.div`
  background: rgba(255, 243, 229, 1);
  width: 100%;
  max-width: 1080px;
  border-radius: 3rem;
  padding: 2rem;
  margin: 0 50px;
  height: 85vh;
`;

const Container = styled.div`
  /* max-width: 1000px; */
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

function App() {
  const PreparingNotify = () => toast('Preparing...!', {
    icon: '🙇‍♀️',
    style: {
      fontWeight: '600',
    },
  });

  return (
    <>
      <GlobalStyle />
      <AppWrap>
        <Container>
          <Header /> 
        </Container>
        <Toaster position="top-center" />   
      </AppWrap>
    </>
  );
}

export default App;
