import { isMobile } from "@/configs/utils";
import { useMemo } from "react";
import styles from "./cardContactUs.module.css";
import { CardProps, CardTypes } from "@/components/card/types";
import Image from "next/image";
import { ButtonComponent } from "@/components/button";
import {
  ButtonTypeTokens,
  ButtonWidthTypeTokens,
} from "@/components/button/type";

export const ContactUsCard: React.FunctionComponent<CardProps> = ({
  leftIcon = null,
  type = CardTypes.VOLT_BENEFIT,
  title,
  subTitle,
  cta,
  ctaLabel,
    imageUrl
}) => {
  const _isMobile: boolean = isMobile();
  const _child = useMemo(() => {
    return (
      <>
        <div className={styles.cardContainer} style={{
          paddingTop: 24,
          paddingBottom: 24,
          paddingRight: 24,
          paddingLeft: 24
        }}>
          <div className={styles.cardContainerLeft} style={{
            paddingBottom: 16
          }}>
            {imageUrl ? (
              <Image
                priority
                src={imageUrl ? imageUrl : ''}
                height={40}
                width={40}
                alt={"contact image 1"}
              />
            ) : (
              <></>
            )}
          </div>
          <div className={styles.cardContainerRight} style={{
            paddingBottom: 16
          }}>
            <div className={styles.cardContainerRightT1}>{title}</div>
            <div className={styles.cardContainerRightT2}>{subTitle}</div>
          </div>
          {cta ? (
              <>
                <ButtonComponent
                    label={ctaLabel ? ctaLabel : "Test"}
                    type={ButtonTypeTokens.OUTLINE_TRANSPARENT_LARGE}
                    width={ButtonWidthTypeTokens.FULL}
                />
              </>
          ) : (
              <></>
          )}
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
