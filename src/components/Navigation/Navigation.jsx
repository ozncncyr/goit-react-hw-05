import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <h1 className={styles.webTitle}>Ozzie's MovieDB</h1>
      <div className={styles.webLogo}>
        <h2>Powered by </h2>
        <img
          height={"30px"}
          src="https://www.drupal.org/files/project-images/29c6fee-blue_short.png"
        ></img>
      </div>
    </nav>
  );
};

export default Navigation;
