import { isMobile } from "@/configs/utils";
import { TabComponentProps } from "@/components/tabComponent/type";
import { useCallback, useMemo, useState } from "react";
import styles from "./cardComponent.module.css";
import { CardProps, CardTypes } from "@/components/card/types";
import Image from "next/image";

export const BenefitCard: React.FunctionComponent<CardProps> = ({
  leftIcon = null,
  type = CardTypes.VOLT_BENEFIT,
  title,
  subTitle,
}) => {
  const _isMobile: boolean = isMobile();

  const _child = useMemo(() => {
    return (
      <>
        <div className={styles.cardContainer}>
          <div className={styles.cardContainerLeft}>
            {leftIcon ? (
              <Image
                priority
                src={leftIcon.url}
                height={leftIcon.height}
                width={leftIcon.width}
                alt={leftIcon.alt ? leftIcon.alt : ""}
              />
            ) : (
              <></>
            )}
          </div>
          <div className={styles.cardContainerRight}>
            <div className={styles.cardContainerRightT1}>{title}</div>
            <div className={styles.cardContainerRightT2}>{subTitle}</div>
          </div>
        </div>
      </>
    );
  }, [type]);

  return (
    <>
      <div>{_child}</div>
    </>
  );
};
