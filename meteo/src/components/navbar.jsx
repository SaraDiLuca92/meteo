import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <ul className="nav">
      <li>
        <a href="default.asp">Home</a>
      </li>
      <li>
        <a href="news.asp">News</a>
      </li>
      <li>
        <a href="contact.asp">Contact</a>
      </li>
      <li>
        <a href="about.asp">About</a>
      </li>
    </ul>
  );
}

export default BasicExample;
