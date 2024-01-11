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
        display: none;
    }
`;

function NavBar() {
  return (
    <>
      <Nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/Note">
          Notes
        </Link>
        <Link to="/ToDoList">
          ToDoList
        </Link>
        <Link to="/Pomodoro">
          Pomodoro
        </Link>
      </Nav>
    </>
  );
}

export default NavBar;