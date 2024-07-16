/* eslint-disable react/prop-types */
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import styles from "./carousel.module.css";
const CarouselItem = ({ image, title, name, id, activeIndex, start, stop , next, prev}) => {
  return (
    <div
      className={
        id === activeIndex
          ? `${styles.carousel__item} ${styles.active}`
          : `${styles.carousel__item}`
      }
    >
      <div className={styles.image__wrapper}>
        <img
          onMouseEnter={stop}
          onMouseLeave={start}
          className={styles.image_responsive}
          src={image}
          alt={name}
        />
      </div>
      <div>
        <p>{title}</p>
      </div>
      <button onClick={prev}>
        <RiArrowDropLeftLine />
      </button>
      <button onClick={next}>
        <RiArrowDropRightLine />
      </button>
    </div>
  );
};

export default CarouselItem;
