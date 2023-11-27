import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      style={{
        backgroundColor: "white",
        padding: "25px",
        textAlign: "start",
        fontSize: "20px",
      }}
    >
      <Link
        to="/"
        style={{ textDecoration: "none", marginRight: "25px", color: "black" }}
      >
        Home
      </Link>
      <Link to="/Memo" style={{ textDecoration: "none",marginRight: "25px", color: "black" }}>
        Memo
      </Link>
      <Link to="/ToDoList" style={{ textDecoration: "none", marginRight: "25px",color: "black" }}>
        ToDoList
      </Link>
      <Link to="/Pomodoro" style={{ textDecoration: "none", color: "black" }}>
        Pomodoro
      </Link>
    </nav>
  );
}

export default NavBar;