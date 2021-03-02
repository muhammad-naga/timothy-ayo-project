// Components
import Nav from "./Nav";

//Styles
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="container">
        <main className={styles.content}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
