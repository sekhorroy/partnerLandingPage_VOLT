import styles from "./header.module.css";
import Image from "next/image";
import {
  getParamsLink,
  getScreenX,
  isMobile,
  redirectTo,
  redirectToFaq,
  redirectToPartner,
  redirectToVoltApp,
} from "@/configs/utils";
import { ButtonComponent } from "@/components/button";
import { ButtonTypeTokens } from "@/components/button/type";
import { HeaderProps, HeaderType } from "@/components/header/type";
import { useState } from "react";
import { Divider } from "@/components/divider";
import { useRouter } from "next/router";

export const PartnerHeader: React.FunctionComponent<HeaderProps> = ({
  type,
}) => {
  const [open, setOpen] = useState(false);
  const _isMobile: boolean = isMobile();
  const url = useRouter().asPath;

  const handleMenuOpenClose = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <>
      <div
        className={
          _isMobile
            ? type === HeaderType.CONTACT_US
              ? styles.headerContactUs
              : styles.header
            : type === HeaderType.CONTACT_US
            ? styles.headerWebContactUs
            : styles.headerWeb
        }
        style={{
          width: "100%",
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <div
          className={
            type === HeaderType.CONTACT_US
              ? styles.headerContentContactUs
              : styles.headerContent
          }
        >
          <div
            className={styles.headerLeft}
            style={
              _isMobile
                ? {
                    paddingLeft: 0,
                  }
                : {}
            }
          >
            <div
              onClick={() => redirectTo("/partner", "_self")}
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                top: 2,
              }}
            >
              <Image
                priority
                src="/images/VoltPartnerLogo.svg"
                height={_isMobile ? 20 : 29}
                width={120}
                alt="Volt partner logo"
              />
            </div>
          </div>
          <div
            className={styles.headerRight}
            style={
              _isMobile
                ? {
                    paddingRight: 16,
                  }
                : {}
            }
          >
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
                <img
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
                  onClick={() => redirectTo(`/partner#faq`, "_self")}
                >
                  FAQs
                </div>
                <div
                  className={styles.headerLinksContainer}
                  onClick={() => redirectTo("/about", "_self")}
                >
                  About us
                </div>
                <div
                  className={styles.headerLinksContainer}
                  onClick={() => redirectTo("/contact", "_self")}
                >
                  Contact us
                </div>
                <div
                  className={styles.headerLinksContainer}
                  onClick={() => redirectToPartner(url)}
                >
                  <ButtonComponent
                    label="Log in"
                    type={ButtonTypeTokens.OUTLINE_LARGE}
                    fontSize={14}
                  />
                </div>
                <div
                  className={styles.headerLinksContainer}
                  onClick={() => redirectToPartner(url)}
                >
                  <ButtonComponent
                    label="Empanel now"
                    type={ButtonTypeTokens.PRIMARY_LARGE}
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
          style={{
            position: "absolute",
            top: 44,
            width: "100%",
            boxSizing: "border-box",
          }}
          onClick={()=>handleMenuOpenClose()}
        >
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
            onClick={() => redirectTo(`/partner#faq`, "_self")}
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
            onClick={() => redirectTo("/about", "_self")}
          >
            About us
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
            onClick={() => redirectToPartner(url)}
          >
            Log in
          </div>
          <div
            className={styles.menuItem}
            style={{
              paddingLeft: 16,
              paddingTop: 16,
              paddingBottom: 16,
            }}
            onClick={() => redirectToPartner(url)}
          >
            Empanel now
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
