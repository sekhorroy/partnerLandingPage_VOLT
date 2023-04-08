import styles from "./footer.module.css";
import React, { location } from "react";
import { EXTERNAL_URLS } from "../../configs/config";
import { Links, privacyLink } from "../../configs/links";
import Image from "next/image";
import { handleOurPartnerLinks, isMobile, redirectTo } from "@/configs/utils";
import Link from "next/link";

function Footer() {
  const _isMobile = isMobile();

  return (
    <div
      className={styles.FooterContainer}
      style={{
        paddingTop: 40,
      }}
    >
      <div
        className={styles.FooterContainer_Top}
        style={{
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        <div className={styles.VoltLogoContainer}>
          <img
            src={"/images/VoltIcon.svg"}
            alt="linkedIn icon"
            width={84}
            height={32}
          />
        </div>
        <div className={styles.FooterHelpSectionContainer}>
          <div
            className={styles.FooterHelpSectionContainerAnchor}
            onClick={() => redirectTo("/")}
          >
            Home
          </div>
          <div
            className={styles.FooterHelpSectionContainerAnchor}
            onClick={() => redirectTo("/contactus")}
          >
            Contact
          </div>
          <div
            className={styles.FooterHelpSectionContainerAnchor}
            onClick={() => redirectTo("/aboutus")}
          >
            About us
          </div>
        </div>
      </div>
      <div className={styles.FooterContainer_Bottom}>
        <div
          className={styles.FooterFollowUsContainer}
          style={{
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <div className={styles.FollowUsTextContainer}>Follow us</div>
          <div>
            <a className={styles.shareAnchorContainer}>
              <Image
                src={"/images/twitter.svg"}
                alt="twitter icon"
                width={32}
                height={32}
              />
            </a>
          </div>
          <div>
            <a className={styles.shareAnchorContainer}>
              <img
                src={"/images/Instagram.svg"}
                alt="instagram icon"
                width={32}
                height={32}
              />
            </a>
          </div>
          <div>
            <a
              href={EXTERNAL_URLS.LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className={styles.shareAnchorContainer}
            >
              <img
                src={"/images/LinkedIn.svg"}
                alt="linkedIn icon"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
        {!_isMobile ? (
          <div
            className={styles.FooterContainer_Bottom1}
            style={{
              width: "50%",
              justifyContent: "flex-end",
              paddingBottom: 0,
              paddingRight: 16,
            }}
          >
            <div onClick={() => handleOurPartnerLinks(Links.STARTUP_INDIA)}>
              <Image
                src={"/images/startUpIndia.svg"}
                alt={"start up india"}
                width={152}
                height={59}
              />
            </div>
            <div onClick={() => handleOurPartnerLinks(Links.DPIIT)}>
              <Image
                src={"/images/startUpRegistration.svg"}
                alt={"start up registration"}
                width={152}
                height={59}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {_isMobile ? (
        <div className={styles.FooterContainer_Bottom1}>
          <div onClick={() => handleOurPartnerLinks(Links.STARTUP_INDIA)}>
            <Image
              src={"/images/startUpIndia.svg"}
              alt={"start up india"}
              width={152}
              height={59}
            />
          </div>
          <div onClick={() => handleOurPartnerLinks(Links.DPIIT)}>
            <Image
              src={"/images/startUpRegistration.svg"}
              alt={"start up registration"}
              width={152}
              height={59}
            />
          </div>
        </div>
      ) : (
        <></>
      )}

      {_isMobile ? (
        <div className={styles.VoltLegalContainer}>
          <div className={styles.VoltLegalT1}>
            ©2023 SALTER TECHNOLOGIES PRIVATE LIMITED | Legal | Privacy
          </div>
          <div className={styles.VoltLegalT2}>CIN: U72200KA2022PTC158631</div>
        </div>
      ) : (
        <div
          className={styles.VoltLegalContainer}
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            maxWidth: 1024,
          }}
        >
          <div className={styles.VoltLegalT1}>
            ©2023 SALTER TECHNOLOGIES PRIVATE LIMITED | Legal | Privacy
          </div>
          <div className={styles.VoltLegalT2}>CIN: U72200KA2022PTC158631</div>
        </div>
      )}
    </div>
  );
}

export default Footer;
