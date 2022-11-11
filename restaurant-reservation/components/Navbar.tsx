import styles from "../styles/Navbar.module.css"

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.listItem}>Hours & Locations</li>
        <li className={styles.listItem}>About</li>
        <li className={styles.listItem}>Menu</li>
        <li className={styles.listItem}>Reservations</li>
      </ul>
      <div className={styles.loginItem}>Login</div>
    </div>
  )
};
