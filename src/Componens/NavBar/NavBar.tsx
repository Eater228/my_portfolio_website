import { Link } from 'react-router';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
