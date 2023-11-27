import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Memo from './pages/Memo';
import Pomodoro from './pages/Pomodoro';
import ToDoList from './pages/Memo';
import NavBar from './layout/NavBar';
import styled from "styled-components";

const AppWrap = styled.div`
  background: rgba(255, 255, 255, .5);
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
