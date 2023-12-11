import React from 'react';
import styled from "styled-components";
import Header from './layout/Header';
import GlobalStyle from './style/GlobalStyle';

const AppWrap = styled.div`
  background: rgba(255, 243, 229, 1);
  width: 90%;
  height: 80%;
  border-radius: 3rem;
  overflow: hidden;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrap>
        <Header />  
      </AppWrap>
    </>
  );
}

export default App;
