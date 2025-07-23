import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.content}>
        <p className={styles.text}>
          I’m a passionate software engineer with a strong background in JavaScript and front-end development.
          I specialize in building responsive web applications using React, TypeScript, and modern CSS techniques.
          With over a year and a half of hands-on experience, I’ve developed several projects, including landing pages,
          product catalogs, and full-featured applications both individually and as a team lead.
        </p>
        <p className={styles.text}>
          I hold a Master’s degree in Software Engineering and currently study social analytics and philosophy,
          which enriches my approach to problem-solving and human-centered design. I enjoy combining technology
          with insights from psychology and user behavior to create intuitive and effective digital experiences.
        </p>
      </div>
      <div className={styles.cvContainer}>
        <a
          href="https://drive.google.com/file/d/1DOJT2S7NWGwVMKaYE9LBDgE6YQ7pIl1q/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cvCard}
        >
            <img
              src="https://i.pinimg.com/736x/fb/93/71/fb9371b1445b2d119779f0f3923fd951.jpg"
              alt="CV Preview"
              className={styles.cvImage}
            />
          <div className={styles.cvInfo}>
            <div className={styles.cvText}>
              <h3>Yurii Olekssiko</h3>
              <p>Click to view my resume and learn more about my experience and skills.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default About;
