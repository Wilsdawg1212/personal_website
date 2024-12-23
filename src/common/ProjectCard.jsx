import React from "react";

function ProjectCard() {
  return (
    <a href="https://wrappify.wilsonide.com/" target="_blank">
      <img className="hover" src={wrappify} alt="Wrappify logo" />
      <h3>Wrappify</h3>
      <p>Custom Spotify Wraps site</p>
    </a>
  );
}

export default ProjectCard;
