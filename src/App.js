import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import { default as Memo, default as ToDoList } from './pages/Memo';
import Pomodoro from './pages/Pomodoro';

const AppWrap = styled.div`
  background: rgba(255, 243, 229, 1);
  width: 90%;
  height: 80%;
  border-radius: 3rem;
  overflow: hidden;
`;

function App() {
  return (
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
  );
}

export default App;
