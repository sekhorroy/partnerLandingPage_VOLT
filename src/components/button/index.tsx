import {
  ButtonProps,
  ButtonTypeTokens,
  ButtonWidthTypeTokens,
} from "@/components/button/type";
import React, { useMemo } from "react";
import styles from "./button.module.css";
import Image from "next/image";

export const ButtonComponent: React.FunctionComponent<ButtonProps> = ({
  label = "Test",
  type = ButtonTypeTokens.PRIMARY_LARGE,
  onClick,
  width = ButtonWidthTypeTokens.CONTENT,
  leftIcon = undefined,
  imageUrl,
    fontSize,
}) => {
  const handleClick = () => {
    onClick && onClick();
  };
  const styleType =
    type === ButtonTypeTokens.PRIMARY_LARGE
      ? styles.buttonPrimaryLarge
      : type === ButtonTypeTokens.OUTLINE_TRANSPARENT_LARGE
      ? styles.buttonOutlineTransparentLarge
      : styles.buttonOutlineLarge;
  const _style =
    width === ButtonWidthTypeTokens.FULL
      ? {
          width: "100%",
          paddingRight: 0,
          paddingLeft: 0,
        }
      : {
          width: "fit-content",
          paddingRight: 40,
          paddingLeft: 40,
        };

  const _child = useMemo(
    () => (
      <>
        <div className={styleType} onClick={handleClick} style={_style}>
          {leftIcon ? (
            <div
              style={{
                paddingRight: 9,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={leftIcon.url}
                alt={leftIcon.alt || "test"}
                width={leftIcon.width}
                height={leftIcon.height}
              />
            </div>
          ) : (
            <></>
          )}
          {imageUrl ? (
            <div
              style={{
                paddingRight: 9,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src={imageUrl} alt={"button"} width={24} height={24} />
            </div>
          ) : (
            <></>
          )}
          <div style={fontSize ? {
              fontSize: fontSize
          } : {
              fontSize: 16
          }}>
              {label}
          </div>
        </div>
      </>
    ),
    [type, width, label, leftIcon]
  );

  return _child;
};
