import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import Button from '../components/Button';
import Home from '../pages/Home';
import Memo from '../pages/Memo';
import Pomodoro from '../pages/Pomodoro';
import ToDoList from '../pages/ToDoList';
import NavBar from './NavBar';

const HeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 5rem;
`;

const LogoWrap = styled.div`

`;

const UserWrap = styled.div`
 
`;

function Header() {
    return (
      <>
        <HeaderWrap>
            <LogoWrap>logo</LogoWrap>
            <NavBar />
            <UserWrap>
                <Button buttonText="Login" showArrow={false} isBorderButton={true} style={{ marginRight: "0.5rem"}}/>
                <Button buttonText="Sign up" showArrow={false} isGradButton={true} />
            </UserWrap>
        </HeaderWrap>
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
  
  export default Header;