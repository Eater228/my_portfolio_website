import styles from './Work.module.scss';

const Work = () => {
  return (
    <div className={styles.projectSection}>
      <h2 className={styles.header}>These are some of my projects</h2>

      <div className={styles.grid}>
        <a
          href="https://eater228.github.io/react_phone-catalog/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <div className={styles.projectTile}>
            <img 
              src="https://i.pinimg.com/736x/88/b6/ba/88b6ba3b95a1c4f4527fa743ea20f30a.jpg" 
              alt="project" 
              className={styles.image} 
            />
            <p className={styles.title}>
              <span className={styles.code}>&lt;</span>
              Phone Catalog
              <span className={styles.code}>/&gt;</span>
            </p>
          </div>
        </a>
        <a
          href='https://eater228.github.io/Portfolio_ToDoList/'
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <div className={styles.projectTile}>
            <img 
              src="https://i.pinimg.com/736x/5d/2e/30/5d2e300f9d694707e0fe2cd985925594.jpg" 
              alt="project" 
              className={styles.image} 
            />
            <p className={styles.title}>
              <span className={styles.code}>&lt;</span>
              Todos List
              <span className={styles.code}>/&gt;</span>
            </p>
          </div>
        </a>
        <a
          href='https://eater228.github.io/Portfolio_Game2048/'
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <div className={styles.projectTile}>
            <img 
              src="https://i.pinimg.com/736x/c0/80/72/c08072e4e934c6acb0d589c455103f6e.jpg" 
              alt="project" 
              className={styles.image} 
            />
            <p className={styles.title}>
              <span className={styles.code}>&lt;</span>
              Game 2048
              <span className={styles.code}>/&gt;</span>
            </p>
          </div>
        </a>
        <a
          href='https://eater228.github.io/Portfolio_landingPage/'
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <div className={styles.projectTile}>
            <img 
              src="https://i.pinimg.com/736x/51/b9/15/51b915d2aa33d3ad9402734eae9afa94.jpg" 
              alt="project" 
              className={styles.image} 
            />
            <p className={styles.title}>
              <span className={styles.code}>&lt;</span>
              Landing Page
              <span className={styles.code}>/&gt;</span>
            </p>
          </div>
        </a>
        <a
          href='https://eater228.github.io/react_people-table-advanced/#/people'
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <div className={styles.projectTile}>
            <img 
              src="https://i.pinimg.com/736x/b0/ac/c0/b0acc05e48287dc370221da853a7c19d.jpg" 
              alt="project" 
              className={styles.image} 
            />
            <p className={styles.title}>
              <span className={styles.code}>&lt;</span>
              Filter View
              <span className={styles.code}>/&gt;</span>
            </p>
          </div>
        </a>
      </div>
      <a
        href="https://github.com/Eater228?tab=repositories"
        className={styles.showAllButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Show all <i className="fas fa-chevron-right"></i>
      </a>
    </div >
  );
}

export default Work;
