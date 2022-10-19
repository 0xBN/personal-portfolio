import React from 'react';
import styles from './styles.module.css';
import { Carousel, TechnologyButtons } from 'components';
import { nanoid } from 'nanoid';

export const ProjectCard = ({ data, id }) => {
  if (!data) return;
  const {
    title,
    mainPic,
    images,
    technologies,
    live,
    source,
    description,
    features,
    challenges,
  } = data;

  return (
    <div className={styles.projectCardContainer}>
      <h3 className={styles.projectName}>{title}</h3>
      <Carousel imageList={images} />

      <div className={styles.techStack}>
        {technologies.map((item) => (
          <TechnologyButtons key={nanoid()} tech={item} />
        ))}
      </div>

      <hr />
      <ul>
        <li>
          <strong>Description: </strong>
          {description}
        </li>
        <li>
          <strong>Challenges: </strong>
          {challenges}
        </li>
      </ul>

      <div className={styles.projectLinks}>
        <strong>View:</strong>
        <a href={live} target='_blank' rel='noreferrer'>
          Live{' '}
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z' />
          </svg>
        </a>
        <a href={source} target='_blank' rel='noreferrer'>
          Code <i className='devicon-github-original' />
        </a>
      </div>
    </div>
  );
};
