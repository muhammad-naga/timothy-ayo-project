// Component
import Link from "next/link";
import Nav from "react-bootstrap/Nav";

// Styles
import styles from "../styles/Nav.module.css";

const AppNav = () => {
  return (
    <Nav
      defaultActiveKey="/"
      as="ul"
      className={`${styles.wrapper} justify-content-center`}
    >
      <Nav.Item as="li">
        <Link href="/">Home</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link href="/posts" eventKey="link-1">
          Posts
        </Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link href="/login" eventKey="link-2">
          Login
        </Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link href="/register" eventKey="link-2">
          Register
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default AppNav;
