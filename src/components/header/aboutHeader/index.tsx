import styles from "./header.module.css";
import Image from "next/image";
import {
  getScreenX,
  isMobile,
  redirectTo,
  redirectToPartner,
  redirectToVoltApp,
} from "@/configs/utils";
import { ButtonComponent } from "@/components/button";
import { ButtonTypeTokens } from "@/components/button/type";
import { HeaderProps, HeaderType } from "@/components/header/type";
import { Divider } from "@/components/divider";
import { useState } from "react";

export const AboutHeader: React.FunctionComponent<HeaderProps> = ({ type }) => {
  const _isMobile: boolean = isMobile();
  const [open, setOpen] = useState(false);
  const width = getScreenX();
  const handleMenuOpenClose = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <>
      <div
        className={
          _isMobile ? styles.headerContactUs : styles.headerWebContactUs
        }
        style={{
          width: "100%",
        }}
      >
        <div className={styles.headerContentContactUs}>
          <div
            className={styles.headerLeft}
            style={_isMobile ? { paddingLeft: 0 } : { paddingLeft: 16 }}
          >
            <div
              onClick={() => redirectTo("/", "_self")}
              style={{
                cursor: "pointer",
              }}
            >
              <Image
                priority
                src="/images/VoltBlue.svg"
                height={_isMobile ? 20 : 24}
                width={95}
                alt="Volt money logo"
              />
            </div>
          </div>
          <div className={styles.headerRight}>
            {_isMobile ? (
              <div onClick={handleMenuOpenClose}>
                <Image
                  priority
                  src="/images/ThreeBar.svg"
                  height={12}
                  width={18}
                  alt="Volt partner logo"
                />
              </div>
            ) : (
              <></>
            )}
            {!_isMobile ? (
              <div className={styles.headerRightWebContent}>
                <div
                  className={styles.headerLinksContainer}
                  onClick={() => redirectTo("/", "_self")}
                >
                  Home
                </div>
                <div
                  className={styles.headerLinksContainer}
                  onClick={() => redirectTo("/contact", "_self")}
                >
                  Contact us
                </div>
                <div>
                  <ButtonComponent
                    label="Check available limit"
                    type={ButtonTypeTokens.OUTLINE_TRANSPARENT_LARGE}
                    fontSize={14}
                    onClick={() => redirectToVoltApp()}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {open ? (
        <div
          className={styles.menuContainer}
          style={{
            position: "absolute",
            top: 44,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/*<div*/}
          {/*  className={styles.menuItem}*/}
          {/*  style={{*/}
          {/*    paddingLeft: 16,*/}
          {/*    paddingTop: 16,*/}
          {/*    paddingBottom: 16,*/}
          {/*  }}*/}
          {/*  onClick={() => redirectTo("/aboutus")}*/}
          {/*>*/}
          {/*  About us*/}
          {/*</div>*/}
          {/*<Divider />*/}
          <div
            className={styles.menuItem}
            style={{
              paddingLeft: 16,
              paddingTop: 16,
              paddingBottom: 16,
            }}
            onClick={() => redirectTo("/", "_self")}
          >
            Home
          </div>
          <Divider />
          <div
            className={styles.menuItem}
            style={{
              paddingLeft: 16,
              paddingTop: 16,
              paddingBottom: 16,
            }}
            onClick={() => redirectTo("/contact", "_self")}
          >
            Contact us
          </div>
          <Divider />
          <div
            className={styles.menuItem}
            style={{
              paddingLeft: 16,
              paddingTop: 16,
              paddingBottom: 16,
            }}
            onClick={() => redirectToVoltApp()}
          >
            Check available limit
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
