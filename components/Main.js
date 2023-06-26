import NavBar from "./navbar";
import styles from "../styles/font.module.css"

export default function Main({ children }) {
  return (
    <>
      <NavBar/>
      <div className={styles.container} >{children}</div>
    </>
  );
}
