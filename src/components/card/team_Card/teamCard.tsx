import { isMobile } from "@/configs/utils";
import { useMemo } from "react";
import styles from "./teamComponentCard.module.css";
import { CardProps, CardTypes } from "@/components/card/types";

export const TeamCard: React.FunctionComponent<CardProps> = ({
  leftIcon = null,
  type = CardTypes.TEAM_CARD,
  title,
  subTitle,
  name,
  imageUrl,
}) => {
  const _isMobile: boolean = isMobile();

  const _child = useMemo(() => {
    return (
      <>
        <div
          className={styles.cardContainer}
          style={
            _isMobile
              ? {
                  paddingTop: 16,
                  height: "fit-content",
                }
              : {
                  paddingTop: 16,
                  height: "fit-content",
                }
          }
        >
          <div className={styles.cardContainerImage}>
            <img
              src={imageUrl}
              width={_isMobile ? 88 : 120}
              height={_isMobile ? 88 : 120}
            />
          </div>
          <div
            style={{
              height: 0,
            }}
          >
            <img
              src={"/images/LinkedIn2.svg"}
              alt={"LinkedIn teams icon"}
              width={_isMobile ? 32 : 36}
              height={_isMobile ? 32 : 36}
              style={{
                position: "relative",
                left: 30,
                bottom: 38,
              }}
            />
          </div>
          <div
            style={
              _isMobile
                ? {
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: 16,
                    paddingTop: 16,
                  }
                : {
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 600,
                    fontSize: 18,
                    paddingTop: 16,
                  }
            }
            className={styles.cardContainerT1}
          >
            {title}
          </div>
          <div
            style={
              _isMobile
                ? {
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: 14,
                  }
                : {
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: 16,
                  }
            }
            className={styles.cardContainerT2}
          >
            {subTitle}
          </div>
        </div>
      </>
    );
  }, [type, _isMobile]);

  return (
    <>
      <div>{_child}</div>
    </>
  );
};
