import React from 'react';
import styles from './styles.module.css';
import { ProjectCard } from 'components';
import { projects } from '../../projectData';

export const Projects = ({ isWindowSmall }) => {
  const show = (projects) => {
    const list = [];
    for (let key in projects) {
      list.push(
        <div className={styles.projectCard} key={key} id={key}>
          <ProjectCard data={projects[key]} />
        </div>
      );
    }
    return list;
  };
  return (
    <div
      className={[styles.containerProjects, 'sectionProjects', 'section'].join(
        ' '
      )}
    >
      <div className='sectionTitle'>
        <h2 className={isWindowSmall ? 'textCenter' : null}>Projects</h2>
      </div>

      <div className={styles.cardsContainer}>
        {show(projects)}
        <ProjectCard />
        <ProjectCard />
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </div>
    </div>
  );
};
