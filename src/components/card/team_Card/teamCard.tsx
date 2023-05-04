import { isMobile, redirectTo } from "@/configs/utils";
import { useMemo } from "react";
import styles from "./teamComponentCard.module.css";
import { CardProps, CardTypes } from "@/components/card/types";
import Image from "next/image";
import {Icons} from "@/configs/imageRegistry";

export const TeamCard: React.FunctionComponent<CardProps> = ({
  leftIcon = null,
  type = CardTypes.TEAM_CARD,
  title,
  subTitle,
  name,
  imageUrl,
  linkedInUrl,
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
                  width: 150,
                  cursor: "pointer",
                }
              : {
                  paddingTop: 16,
                  height: "fit-content",
                  width: 200,
                  cursor: "pointer",
                }
          }
          onClick={() =>
            redirectTo(
              linkedInUrl ? linkedInUrl : "",
              _isMobile ? "_self" : "_blank"
            )
          }
        >
          <div className={styles.cardContainerImage}>
            {imageUrl && imageUrl != "" ? (
              <img
                src={imageUrl}
                width={_isMobile ? 88 : 120}
                height={_isMobile ? 88 : 120}
              />
            ) : (
              <div
                className={styles.noImageContainer}
                style={
                  _isMobile
                    ? {
                        width: 88,
                        height: 88,
                      }
                    : {
                        width: 120,
                        height: 120,
                      }
                }
              >
                <Image
                  src={Icons.USER_GREY}
                  alt={"user grey image"}
                  width={48}
                  height={48}
                />
              </div>
            )}
          </div>
          <div
            style={{
              height: 0,
            }}
          >
            <Image
              src={Icons.LINKED_IN_2}
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
            {name}
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
            {title}
          </div>

          {subTitle ? (
            <div
              style={
                _isMobile
                  ? {
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: 14,
                      paddingTop: 14,
                    }
                  : {
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: 16,
                      paddingTop: 16,
                    }
              }
              className={styles.cardContainerT3}
            >
              {subTitle}
            </div>
          ) : (
            <></>
          )}
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
