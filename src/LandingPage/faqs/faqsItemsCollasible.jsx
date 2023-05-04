import styles from "./faqs.module.css";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Icons} from "@/configs/imageRegistry";

const FaqCollapsible = (props) => {
  const [open, setOPen] = useState( true);

  const toggle = () => {
    setOPen(!open);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setOPen(false);
    }, 250);
  }, []);

  return (
    <div className={styles.FaqCollapsibleContainer}>
      <div className={styles.Faqs_ContainerQuestionItem} onClick={toggle}>
        <h4 className={styles.Faqs_ContainerQuestionItemQuestion}>
          {props.question}
        </h4>
        <div className={styles.Faqs_ContainerQuestionArrowVector}>
          {!open ? (
            <Image
              src={Icons.CHEVRON_DOWN}
              alt="down vector"
              height={20}
              width={20}
            />
          ) : (
            <Image src={Icons.CHEVRON_UP} alt="up vector" height={20} width={20} />
          )}
        </div>
      </div>
      {open && (
        <div className={styles.Faqs_ContainerToggleContainer}>
          <div className={styles.Faqs_ContainerToggleContainerContent}>
            <props.answer />
          </div>
        </div>
      )}
    </div>
  );
};
export default FaqCollapsible;
