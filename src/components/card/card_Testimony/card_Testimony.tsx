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
  const [_hide, setHide] = useState(true);

  const paddingStyle = _isMobile
    ? {
        paddingLeft: 16,
        paddingRight: 16,
      }
    : {};

  const handleClick = () => {
    setHide(!_hide);
  };

  const max_WordLength = 182;

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
                  height: 'fit-content',
                }
          }
        >
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
              paddingTop: 12,
            }}
          >
            {name ? name : ""}
          </div>
          <div
            className={styles.cardContainer2}
            style={_isMobile ? {
              paddingLeft: 16,
              paddingRight: 16,
              paddingBottom: 16,
              paddingTop: 4,
            } : {
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 16,
                paddingTop: 4,
                minHeight: 60
            }}
          >
            {title ? title : ""}
          </div>
          <div
            className={styles.cardContainer3}
            style={
              _isMobile
                ? {
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 16,
                    paddingBottom: 16,
                    height: 'fit-content',
                  }
                : {
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 16,
                    paddingBottom: 16,
                    height: "fit-content",
                    minHeight: 131
                  }
            }
          >
            <div
              className={styles.readMoreContainer}
              style={
                _hide
                  ? {
                      height: 75,
                      overflow: "hidden",
                    }
                  : {
                        height: 'fit-content'
                    }
              }
            >
              {subTitle ? subTitle : ""}
            </div>
            <div
              style={{
                color: "#1434CB",
                  fontSize: 14,
                  cursor: 'pointer'
              }}
              onClick={handleClick}
            >
              { (subTitle && (subTitle.length < max_WordLength)) ? "" : _hide ? "Read more" : "Read less" }
            </div>
          </div>
        </div>
      </>
    );
  }, [type, _hide]);

  return (
    <>
      <div>{_child}</div>
    </>
  );
};
