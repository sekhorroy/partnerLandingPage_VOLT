import styles from "./header.module.css";
import Image from "next/image";
import {
  getScreenX,
  isMobile,
  redirectTo,
  redirectToPartner, redirectToPartnerLanding,
  redirectToVoltApp,
} from "@/configs/utils";
import { ButtonComponent } from "@/components/button";
import { ButtonTypeTokens } from "@/components/button/type";
import { HeaderProps, HeaderType } from "@/components/header/type";
import { Divider } from "@/components/divider";
import { useState } from "react";
import {BaseLink} from "@/configs/constants";

export const InvestorHeader: React.FunctionComponent<HeaderProps> = ({
  type,
    maxWidth,
}) => {
  const _isMobile: boolean = isMobile();
  const [open, setOpen] = useState(false);
  const width = getScreenX();
  const handleMenuOpenClose = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <>
      <div
        className={_isMobile ? styles.header : styles.headerWeb}
        style={{
          width: "100%",
        }}
      >
        <div className={styles.headerContent} style={{
          maxWidth: maxWidth ? maxWidth : 1024
        }}>
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
                width={94}
                alt="Volt money logo"
                style={{
                  paddingLeft: 16,
                }}
              />
            </div>
          </div>
          <div className={styles.headerRight}>
            {_isMobile ? (
              <div
                onClick={handleMenuOpenClose}
                style={{
                  width: 70,
                  height: 40,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Image
                  priority
                  src="/images/ThreeBar.svg"
                  height={12}
                  width={18}
                  alt="Volt partner logo"
                />
              </div>
            ) : (<></>)}
            {!_isMobile ? (
              <div className={styles.headerRightWebContent}>
                <div
                  className={styles.headerLinksContainer}
                  onClick={() => redirectTo(`${BaseLink}/#volt_benefits`, "_self")}
                >
                  Benefits
                </div>
                <div
                  className={styles.headerLinksContainer}
                  onClick={() => redirectTo(`${BaseLink}/#faq`, "_self")}
                >
                  FAQs
                </div>
                <div
                  className={styles.headerLinksContainer}
                  onClick={() => redirectToPartnerLanding()}
                >
                  Partner with us
                </div>
                <div
                  className={styles.headerLinksContainer}
                  onClick={() => redirectTo("/contact", "_self")}
                >
                  Contact us
                </div>
                <div>
                  <ButtonComponent
                    label="Sign in"
                    type={ButtonTypeTokens.OUTLINE_TRANSPARENT_LARGE}
                    onClick={() => redirectToVoltApp()}
                    fontSize={14}
                  />
                </div>
                <div>
                  <ButtonComponent
                    label="Check available limit"
                    type={ButtonTypeTokens.PRIMARY_LARGE}
                    onClick={() => redirectToVoltApp()}
                    fontSize={14}
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
          onClick={()=>handleMenuOpenClose()}
          style={{
            position: "absolute",
            top: 44,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            className={styles.menuItem}
            style={{
              paddingLeft: 16,
              paddingTop: 16,
              paddingBottom: 16,
            }}
            onClick={() => redirectTo(`${BaseLink}/#volt_benefits`, "_self")}
          >
            Benefits
          </div>
          <Divider />
          <div
            className={styles.menuItem}
            style={{
              paddingLeft: 16,
              paddingTop: 16,
              paddingBottom: 16,
            }}
            onClick={() => redirectTo(`${BaseLink}/#faq`, "_self")}
          >
            FAQs
          </div>
          <Divider />
          <div
            className={styles.menuItem}
            style={{
              paddingLeft: 16,
              paddingTop: 16,
              paddingBottom: 16,
            }}
            onClick={() => redirectToPartnerLanding()}
          >
            Partner with us
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
            Sign in
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
