import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    font-size: 20px;
    display: flex;
    justify-content: center;
    gap: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    a {
        text-align: center;
        flex: 1;
        text-decoration: none;
        color: black;
        font-weight: 500;
        font-size: 15px;
        letter-spacing: -0.01rem;
    }
    
    @media only screen and (max-device-width : 1023px) {
        gap: 1rem;
    }
    /* / 스마트폰 모바일(가로) / */
    @media only screen and (max-device-width : 767px) {
      opacity: 0;
      z-index: -1;
      flex-direction: column;
      justify-content: flex-start;
      top: 0;
      transform: translate(0, 0);
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(255, 243, 229, 1);
      padding-top: 1rem;
      a {
        padding: 5px 0;
        flex: inherit;
      }
    }
`;

function NavBar({ handleRouteClick }) {
  return (
    <>
      <Nav>
        <Link to="/" onClick={() => handleRouteClick('/')}>
          Home
        </Link>
        <Link to="/Note" onClick={() => handleRouteClick('/Note')}>
          Notes
        </Link>
        <Link to="/ToDoList" onClick={() => handleRouteClick('/ToDoList')}>
          ToDoList
        </Link>
        <Link to="/Pomodoro" onClick={() => handleRouteClick('/Pomodoro')}>
          Pomodoro
        </Link>
      </Nav>
    </>
  );
}

export default NavBar;