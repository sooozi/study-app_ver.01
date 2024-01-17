import { default as React, useEffect, useState } from 'react';
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

const HamburgerMenu = styled.div`
    /* / 스마트폰 모바일(가로) / */
    @media only screen and (max-device-width : 767px) {
        &.open {
            nav {
                opacity: 1;
                z-index: 1;
            }
        }
    }
`;

const HamburgerMenuBtn = ({ isOpen, onClick }) => {
    const [animationClass, setAnimationClass] = useState('');
    const [elapsedTime, setElapsedTime] = useState(0);
  
    useEffect(() => {
      let intervalId;
  
      if (isOpen) {
        // Set an interval to update the color gradually over 5 seconds
        intervalId = setInterval(() => {
          setElapsedTime((prevElapsedTime) => prevElapsedTime + 100);
        }, 100);
  
        // After 5 seconds, clear the interval and apply the 'open' class
        setTimeout(() => {
          clearInterval(intervalId);
          setAnimationClass('open');
        }, 5000);
      } else {
        // If isOpen is false, reset the elapsedTime and remove the 'open' class
        setElapsedTime(0);
        setAnimationClass('');
      }
  
      return () => {
        clearInterval(intervalId);
      };
    }, [isOpen]);
  
    return (
        <StyledButton type="button" onClick={onClick} isOpen={isOpen} animationClass={animationClass}>
            <HamburgerMenuIcon isOpen={isOpen} />
        </StyledButton>
    );
};

const StyledButton = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0;

  @media only screen and (max-device-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: linear-gradient(45deg, rgb(255, 175, 88) 20%, rgb(255, 65, 65) 100%);
    color: #fff;
    position: relative;
    z-index: 1;
    &.${props => props.animationClass} {
        svg {
            color: red !important;
        }
    }
    transition: transform 2s ease-in-out;
  }
`;

const HamburgerIcon = styled.svg`
    display: block;
    margin: auto;
    width: 30px;
    height: 30px;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform 5s ease-in-out;
    path {
        color: #fff;
    }
`;

// 햄버거 메뉴 아이콘을 감싸는 버튼 스타일
const Buttons = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;

  /* 메뉴가 열렸을 때의 스타일 */
  &:hover ${HamburgerIcon} {
    transform: rotate(45deg);
  }
`;

const HamburgerMenuIcon = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMenuOpen(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <Buttons onClick={toggleMenu}>
        <HamburgerIcon>
          {isMenuOpen ? (
            // 엑스 아이콘
            <g transform="rotate(45 12 12)">
              <path d="M6 12H18" />
              <path d="M6 12H18" />
            </g>
          ) : (
            // 햄버거 메뉴 아이콘
            <>
              <path d="M3 12H21" />
              <path d="M3 6H21" />
            </>
          )}
        </HamburgerIcon>
      </Buttons>
    </div>
  );
};
  
  

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
                <HamburgerMenuBtn isOpen={isMenuOpen} onClick={toggleMenu} />
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