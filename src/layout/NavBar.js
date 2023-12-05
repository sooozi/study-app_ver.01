import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 3rem;
  text-align: start;
  font-size: 20px;
  display: flex;
  justify-content: center;
`;

function NavBar() {
  return (
    <>
      <Nav>
        <Link to="/" style={{ textDecoration: "none", marginRight: "3rem", color: "black" }}>
          Home
        </Link>
        <Link to="/Memo" style={{ textDecoration: "none",marginRight: "3rem", color: "black" }}>
          Memo
        </Link>
        <Link to="/ToDoList" style={{ textDecoration: "none", marginRight: "3rem",color: "black" }}>
          ToDoList
        </Link>
        <Link to="/Pomodoro" style={{ textDecoration: "none", color: "black" }}>
          Pomodoro
        </Link>
      </Nav>
    </>
  );
}

export default NavBar;