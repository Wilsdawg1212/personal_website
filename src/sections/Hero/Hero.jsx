import styles from "./HeroStyle.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/cv.pdf";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Wilson Ide"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Wilson
          <br />
          Ide
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="https://instagram.com/wilson_ide" target="_blank">
            <img src={twitterIcon} alt="Instagram Icon" />
          </a>
          <a href="https://github.com/Wilsdawg1212" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/wilson-ide-3b3087291"
            target="_blank"
          >
            <img src={linkedinIcon} alt="linkedin Icon" />
          </a>
        </span>
        <p>
          Dedicated to exploring the world of computer science and intelligence.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
