import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import wrappify from "../../assets/viberr.png";
import dogReader from "../../assets/dog-reader.png";
import aFF from "../../assets/atl-food.jpg";
import blockviz from "../../assets/blockchainviz.jpg"
import bviz from "../../assets/bviz2.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={wrappify}
          link="https://wrappify.wilsonide.com/"
          h3="Wrappify"
          p="Custom Spotify Wraps"
        />
        <ProjectCard
          src={dogReader}
          link="https://huggingface.co/WillyIde545/dog_classifier"
          h3="Dog Reader"
          p="Dog Breed Classifier"
        />
        <ProjectCard
          src={aFF}
          link="https://github.com/Connor5190/CS2340-Project-1"
          h3="ATL Food Finder"
          p="Find ATL restaurants"
        />
        <ProjectCard 
        src={bviz}
        link="https://blockchain-visualizer.wilsonide.com/"
        h3="Blockchain Visualizer"
        p="See live Base blocks"
        />
      </div>
    </section>
  );
}

export default Projects;
