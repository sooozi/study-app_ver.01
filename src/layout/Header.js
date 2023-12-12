import React from 'react';
import toast from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import Button from '../components/Button';
import Home from '../pages/Home';
import Note from '../pages/Note';
import Pomodoro from '../pages/Pomodoro';
import ToDoList from '../pages/ToDoList';
import NavBar from './NavBar';

const HeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0;
    position: relative;
`;

const LogoWrap = styled.div`
    
`;

const UserWrap = styled.div`
    display: flex;
    gap: 5px;
`;

const ToastBox = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto;
  button {
    margin: 0 !important;
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

function Header() {
    const PreparingNotify = () => toast('Preparing...!', {
        icon: '🙇‍♀️',
        style: {
          fontWeight: '600',
        },
    });

    return (
      <>
        <HeaderWrap>
            <LogoWrap>logo</LogoWrap>
            <NavBar />
            <UserWrap>
                <ToastBox>
                    <Button buttonText="Login" showArrow={false} isBorderButton={true} />
                    <button className="btn_hide" onClick={PreparingNotify} />
                </ToastBox>
                <ToastBox>
                    <Button buttonText="Sign up" showArrow={false} isGradButton={true} />
                    <button className="btn_hide" onClick={PreparingNotify} />
                </ToastBox>
            </UserWrap>
        </HeaderWrap>
        <Routes>
            <Route>
                <Route path='/' element={<Home />} />
                <Route path='/Note' element={<Note />} />
                <Route path='/Pomodoro' element={<Pomodoro />} />
                <Route path='/ToDoList' element={<ToDoList />} />
            </Route>
        </Routes>
      </>
    );
  }
  
  export default Header;