import { isMobile } from "@/configs/utils";
import { TabComponentProps } from "@/components/tabComponent/type";
import { useCallback, useMemo, useState } from "react";
import styles from "./cardComponentTestimony.module.css";
import { CardProps, CardTypes } from "@/components/card/types";
import Image from "next/image";

export const TestimonyCard: React.FunctionComponent<CardProps> = ({
  leftIcon = null,
  type = CardTypes.TESTIMONY,
  title,
  subTitle,
  name,
}) => {
  const _isMobile: boolean = isMobile();

  const paddingStyle = _isMobile ? {
    paddingLeft: 16,
    paddingRight: 16,
  } : {}

  const _child = useMemo(() => {
    return (
      <>
        <div className={styles.cardContainer} style={_isMobile ? {
          paddingTop: 16,
            minHeight: 414
        }: {
            paddingTop: 16,
            minHeight: 323
        }}>
          <div
            className={styles.cardContainerImage}
            style={{
              paddingLeft: 16,
              paddingRight: 16,
            }}
          >
            {leftIcon ? (
              <img
                src={leftIcon.url}
                height={leftIcon.height}
                width={leftIcon.width}
                alt={leftIcon.alt ? leftIcon.alt : ""}
              />
            ) : (
              <></>
            )}
          </div>
          <div
            className={styles.cardContainer1}
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 12
            }}
          >
            {name ? name : ""}
          </div>
          <div
            className={styles.cardContainer2}
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              paddingBottom: 16,
              paddingTop: 4
            }}
          >
            {title ? title : ""}
          </div>
          <div
            className={styles.cardContainer3}
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 16,
              paddingBottom: 16
            }}
          >
            {subTitle ? subTitle : ""}
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
