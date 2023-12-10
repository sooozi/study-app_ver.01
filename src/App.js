import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import Memo from './pages/Memo';
import Pomodoro from './pages/Pomodoro';
import ToDoList from './pages/ToDoList';
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
        <NavBar />
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='/Memo' element={<Memo />} />
            <Route path='/Pomodoro' element={<Pomodoro />} />
            <Route path='/ToDoList' element={<ToDoList />} />
          </Route>
        </Routes>
      </AppWrap>
    </>
  );
}

export default App;
