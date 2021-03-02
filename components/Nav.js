// Component
import Link from "next/link";
import Nav from "react-bootstrap/Nav";

// Styles
import styles from "../styles/Nav.module.css";

const AppNav = () => {
  return (
    <Nav defaultActiveKey="/" as="ul" className={`${styles.wrapper}`}>
      <div className="container">
        <div className="content">
          <div>
            <Nav.Item as="li">
              <Link href="/">Home</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link href="/posts" eventKey="link-1">
                Posts
              </Link>
            </Nav.Item>
          </div>

          <div>
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
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default AppNav;
