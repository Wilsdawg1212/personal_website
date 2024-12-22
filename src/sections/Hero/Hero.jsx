import styles from "./HeroStyle.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import instagramLight from "../../assets/instagram-light.svg";
import instagramDark from "../../assets/instagram-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

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
          onClick={toggleTheme}
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
            <img src={instagramIcon} alt="Instagram Icon" />
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
        <p className={styles.description}>
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
