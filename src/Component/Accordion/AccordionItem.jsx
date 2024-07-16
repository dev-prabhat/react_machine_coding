/* eslint-disable react/prop-types */
import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import styles from "./accordionItem.module.css";

const AccordionItem = ({ title, description }) => {
  const [showAccordionDropDown, setShowAccordionDropDown] = useState(false);
  return (
    <div className={styles.accordionItem__wrapper}>
      <div
        className={styles.heading__div}
        onClick={() => setShowAccordionDropDown((prev) => !prev)}
      >
        <h2>{title}</h2>
        <button className={styles.close__btn}>
          {showAccordionDropDown ? (
            <RiArrowDropUpLine size='20px' color="black" />
          ) : (
            <RiArrowDropDownLine size='20px' color="black" />
          )}
        </button>
      </div>
      <div>{showAccordionDropDown && <p>{description}</p>}</div>
    </div>
  );
};

export default AccordionItem;
