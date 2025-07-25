import Work from '../Work/Work';
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.welcomeSection}>
      <h1 className={styles.welcomeTitle}>Hey I am Yura</h1>
      <p className={styles.welcomeSubtitle}>a web developer</p>

      <Work />
    </div>
  );
}

export default Home;
