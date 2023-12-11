import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  font-size: 20px;
  display: flex;
  justify-content: center;
  gap: 2rem;
  a {
    text-align: center;
    flex: 1;
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: -0.01rem;
  }
`;

function NavBar() {
  return (
    <>
      <Nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/Memo">
          Memo
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