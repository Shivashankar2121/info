import React from 'react';

const projectList = [
  { title: 'Project One', description: 'Description of project one', link: '#' },
  { title: 'Project Two', description: 'Description of project two', link: '#' },
  { title: 'Project Three', description: 'Description of project three', link: '#' },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
