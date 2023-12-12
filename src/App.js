import React from 'react';
import styled from "styled-components";
import Header from './layout/Header';
import GlobalStyle from './style/GlobalStyle';


const AppWrap = styled.div`
  background: rgba(255, 243, 229, 1);
  width: 90%;
  max-width: 1280px;
  height: 90%;
  border-radius: 3rem;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrap>
        <Container>
          <Header />    
        </Container>
      </AppWrap>
    </>
  );
}

export default App;
