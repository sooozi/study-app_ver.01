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
    position: relative;
    margin-bottom: 1rem;
    /* / 스마트폰 모바일(가로) / */
    @media only screen and (max-device-width : 767px) {
      padding: 0 0 0 0.25rem;
    }
`;

const LogoWrap = styled.div`
    
`;

const HamburgerMenu = styled.button`
    border: 0;
    background-color: transparent;
    padding: 0;
    /* / 스마트폰 모바일(가로) / */
    @media only screen and (max-device-width : 767px) {
        /* display: none; */
        position: relative;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-image: linear-gradient(45deg, rgb(255, 175, 88) 20%, rgb(255, 65, 65) 100%);
        color: #fff;
    }
`;

const UserWrap = styled.div`
    display: flex;
    gap: 5px;
    /* / 스마트폰 모바일(가로) / */
    @media only screen and (max-device-width : 767px) {
        display: none;
    }
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
            <LogoWrap>ZIPCOAK</LogoWrap>
            <HamburgerMenu>
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
            </HamburgerMenu>
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