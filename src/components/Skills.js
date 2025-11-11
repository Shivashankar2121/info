import React from 'react';

const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Git', 'TailwindCSS'];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
