import { isMobile } from "@/configs/utils";
import { useMemo } from "react";
import styles from "./investorComponentCard.module.css";
import { CardProps, CardTypes } from "@/components/card/types";
import Image from "next/image";

export const InvestorCard: React.FunctionComponent<CardProps> = ({
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
        <div className={styles.cardContainer} style={_isMobile ? {
            maxWidth: 290
        } : {
            maxWidth: 352,
            minWidth: 352
        }}>
          <div className={styles.cardContainerLeft}>
              {
                  imageUrl && imageUrl != '' ? (
                      <img src={imageUrl} width={80} height={80} />
                  ) : (
                      <div
                          className={styles.noImageContainer}
                          style={
                              _isMobile
                                  ? {
                                      width: 80,
                                      height: 80,
                                  }
                                  : {
                                      width: 80,
                                      height: 80,
                                  }
                          }
                      >
                          <Image
                              src={"/images/userGrey.svg"}
                              alt={"user grey image"}
                              width={48}
                              height={48}
                          />
                      </div>
                  )
              }
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
                  left: 50,
                  bottom: 30,
                }}
              />
            </div>
          </div>
          <div className={styles.cardContainerRight}>
            <div
              className={styles.cardContainerT1}
              style={
                _isMobile
                  ? {
                      fontSize: 16,
                    }
                  : {
                      fontSize: 18,
                    }
              }
            >
              {title}
            </div>
            <div className={styles.cardContainerT2}>{subTitle}</div>
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
