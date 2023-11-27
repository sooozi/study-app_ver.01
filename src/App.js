import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Memo from './pages/Memo';
import Pomodoro from './pages/Pomodoro';
import ToDoList from './pages/ToDoList';
import NavBar from './layout/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/Memo' element={<Memo />} />
        <Route path='/Pomodoro' element={<Pomodoro />} />
        <Route path='/ToDoList' element={<ToDoList />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
