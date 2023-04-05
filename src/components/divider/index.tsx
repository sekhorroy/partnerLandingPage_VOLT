import React from "react";
import styles from "./divider.module.css";
import Image from "next/image";
import {DividerProps} from "@/components/divider/type";

export const Divider: React.FunctionComponent<DividerProps> = ({
    width= '100%',
    height= 1
}) => {
  return (
    <>
     <div className={styles.dividerContainer} style={{
         width: width,
         height: height
     }}>
     </div>
    </>
  );
};
