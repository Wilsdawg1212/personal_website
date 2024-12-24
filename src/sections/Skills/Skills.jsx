import styles from "./SkillsStyles.module.css";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import checkMarkLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
    const { theme, toggleTheme } = useTheme();

    const checkMarkIcon = theme === "light" ? checkMarkLight : checkMarkDark;
  return (
    <section id="Skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        <SkillList src={checkMarkIcon} skill="CSS"/>
        <SkillList src={checkMarkIcon} skill="JavaScript"/>
        <SkillList src={checkMarkIcon} skill="Node"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java"/>
        <SkillList src={checkMarkIcon} skill="Python"/>
        <SkillList src={checkMarkIcon} skill="Rust"/>
        <SkillList src={checkMarkIcon} skill="C"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git"/>
        <SkillList src={checkMarkIcon} skill="PyTorch"/>
        <SkillList src={checkMarkIcon} skill="Django"/>
        <SkillList src={checkMarkIcon} skill="React"/>
      </div>
    </section>
  );
}

export default Skills;
