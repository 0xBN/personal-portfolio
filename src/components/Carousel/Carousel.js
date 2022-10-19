import React from 'react';
import styles from './styles.module.css';
import { nanoid } from 'nanoid';

export const Carousel = ({ imageList }) => {
  const [active, setActive] = React.useState('0');
  const show = (imageList) => {
    const list = [];
    for (let i in imageList) {
      list.push(
        <div
          key={nanoid()}
          data-active={i === active ? true : false}
          className={[styles.slide, i].join(' ')}
        >
          <img src={imageList[i]} alt='' />
        </div>
      );
    }

    return list;
  };

  const handleClick = (e) => {
    let slidesLen = e.target.parentElement.lastChild.children.length;
    let offset = e.target.dataset.carouselButton === 'next' ? 1 : -1;

    let newIndex = (Number(active) + offset).toString();
    let maxIndex = (slidesLen - 1).toString();

    setActive(newIndex);
    if (newIndex > maxIndex) setActive('0');
    if (newIndex < 0) setActive(maxIndex);
  };
  return (
    <div className={styles.carouselContainer}>
      <button
        onClick={handleClick}
        data-carousel-button='prev'
        className={[styles.prevButton].join(' ')}
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <path d='M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z' />
        </svg>
      </button>
      <button
        onClick={handleClick}
        data-carousel-button='next'
        className={[styles.nextButton].join(' ')}
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <path d='M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z' />
        </svg>
      </button>

      <div data-slides className={[styles.slides].join(' ')}>
        {show(imageList)}
      </div>
    </div>
  );
};
