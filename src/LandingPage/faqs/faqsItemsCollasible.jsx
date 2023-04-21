import styles from "./faqs.module.css"
import React, { useState } from "react";
import Image from "next/image";
import {isMobile} from "@/configs/utils";
const DownArrowVector =  "/images/chevron-down.svg";
const UpArrowVector = "/images/chevron-up1.svg";

const FaqCollapsible = (props) => {
  const [open, setOPen] = useState(false);
  const _isMobile = isMobile()

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className={styles.FaqCollapsibleContainer}>
        <div className={styles.Faqs_ContainerQuestionItem} onClick={toggle}>
            <h4 className={styles.Faqs_ContainerQuestionItemQuestion}>
                {props.question}
            </h4>
            <div className={styles.Faqs_ContainerQuestionArrowVector}>
                {
                    !open? <Image src={DownArrowVector} alt="down vector" height={20} width={20}/>:<Image src={UpArrowVector} alt="up vector" height={20} width={20}/>
                }
            </div>

        </div>
        {open && (
            <div className={styles.Faqs_ContainerToggleContainer}>
                <div className={styles.Faqs_ContainerToggleContainerContent}>
                    {props.answer()}
                </div>
            </div>
        )}
    </div>
    
  );
};
export default FaqCollapsible;