import React from 'react';
import styles from './styles.module.css';
import profilePic from '../../shared/brian2.png';

export const Navlist = ({ setOpen, setOverlay }) => {
  const [aboutMeDiv, setAboutMeDiv] = React.useState(null);
  const [mainIntroDiv, setMainIntroDiv] = React.useState(null);
  const [projectsDiv, setProjectsDiv] = React.useState(null);
  const [skillsDiv, setSkillsDiv] = React.useState(null);
  const [contactDiv, setContactDiv] = React.useState(null);

  React.useEffect(() => {
    setAboutMeDiv(document.querySelector('.sectionAbout'));
    setMainIntroDiv(document.querySelector('.sectionMainIntro'));
    setProjectsDiv(document.querySelector('.sectionProjects'));
    setSkillsDiv(document.querySelector('.sectionSkills'));
    setContactDiv(document.querySelector('.sectionContact'));
  }, []);

  const scrollTo = (div) => {
    div.parentElement.classList.add('quickShow');
    console.log(div);
    div.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
    setOverlay(false);
  };

  return (
    <div className={styles.navlist}>
      <div className={styles.profilePictureContainer}>
        <img
          onClick={() => {
            scrollTo(mainIntroDiv);
          }}
          className={styles.profilePicture}
          src={profilePic}
          alt=''
        />
      </div>

      <ul>
        <li
          onClick={() => {
            scrollTo(aboutMeDiv);
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z' />
          </svg>{' '}
          About
        </li>
        <li
          onClick={() => {
            scrollTo(projectsDiv);
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M16,15H9V13H16V15M19,11H9V9H19V11M19,7H9V5H19V7M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M21,1A2,2 0 0,1 23,3V17C23,18.11 22.11,19 21,19H7A2,2 0 0,1 5,17V3C5,1.89 5.89,1 7,1H21M7,3V17H21V3H7Z' />
          </svg>{' '}
          Projects
        </li>
        <li
          onClick={() => {
            scrollTo(skillsDiv);
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z' />
          </svg>{' '}
          Skills
        </li>
        <li
          onClick={() => {
            scrollTo(contactDiv);
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z' />
          </svg>{' '}
          Contact
        </li>
        <li>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M14,20V19C14,17.67 11.33,17 10,17C8.67,17 6,17.67 6,19V20H14M10,12A2,2 0 0,0 8,14A2,2 0 0,0 10,16A2,2 0 0,0 12,14A2,2 0 0,0 10,12Z' />
          </svg>{' '}
          Resume
        </li>
      </ul>
    </div>
  );
};
