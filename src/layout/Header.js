import { default as React, useState } from 'react';
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
        display: flex;
        align-items: center;
        justify-content: center;
        /* position: relative; */
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-image: linear-gradient(45deg, rgb(255, 175, 88) 20%, rgb(255, 65, 65) 100%);
        color: #fff;
        &.open {
            /* Add styles for open state if needed */
        }
    }
`;

const HamburgerMenuIcon = ({ isOpen, onClick }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" onClick={onClick}>
    <polyline
      id="globalnav-menutrigger-bread-bottom"
      className={`globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom ${isOpen ? 'open' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      points={isOpen ? "3 15, 15 3" : "2 12, 16 12"}
    >
      <animate
        id="globalnav-anim-menutrigger-bread-bottom-open"
        attributeName="points"
        keyTimes="0;0.5;1"
        dur="0.4s"
        begin="indefinite"
        fill="freeze"
        calcMode="spline"
        keySplines="0.42, 0, 0.58, 1;0, 0, 0.58, 1"
        values={isOpen ? " 3 15, 15 3; 9 9, 9 9" : " 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"}
      ></animate>
      <animate
        id="globalnav-anim-menutrigger-bread-bottom-close"
        attributeName="points"
        keyTimes="0;0.5;1"
        dur="0.4s"
        begin="indefinite"
        fill="freeze"
        calcMode="spline"
        keySplines="0.42, 0, 0.58, 1;0, 0, 0.58, 1"
        values={isOpen ? " 9 9, 9 9; 3 15, 15 3" : " 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"}
      ></animate>
    </polyline>
    <polyline
      id="globalnav-menutrigger-bread-top"
      className={`globalnav-menutrigger-bread globalnav-menutrigger-bread-top ${isOpen ? 'open' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      points={isOpen ? "3 3, 15 15" : "2 5, 16 5"}
    >
      <animate
        id="globalnav-anim-menutrigger-bread-top-open"
        attributeName="points"
        keyTimes="0;0.5;1"
        dur="0.4s"
        begin="indefinite"
        fill="freeze"
        calcMode="spline"
        keySplines="0.42, 0, 0.58, 1;0, 0, 0.58, 1"
        values={isOpen ? " 3 3, 15 15; 9 9, 9 9" : " 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"}
      ></animate>
      <animate
        id="globalnav-anim-menutrigger-bread-top-close"
        attributeName="points"
        keyTimes="0;0.5;1"
        dur="0.4s"
        begin="indefinite"
        fill="freeze"
        calcMode="spline"
        keySplines="0.42, 0, 0.58, 1;0, 0, 0.58, 1"
        values={isOpen ? " 9 9, 9 9; 3 3, 15 15" : " 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"}
      ></animate>
    </polyline>
  </svg>
);

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
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
      };
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
            <HamburgerMenu className={isMenuOpen ? 'open' : ''}>
                <HamburgerMenuIcon isOpen={isMenuOpen} onClick={toggleMenu} />
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