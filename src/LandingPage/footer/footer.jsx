import styles from "./footer.module.css";
import React, { location } from "react";
import { EXTERNAL_URLS } from "../../configs/config";
import { privacyLink } from "../../configs/links";
import Image from "next/image";
import { isMobile } from "@/configs/utils";

function Footer() {
  const _isMobile = isMobile();

  return (
    <div className={styles.FooterContainer} style={{
      paddingTop: 40
    }}>
      <div className={styles.FooterContainer_Top}>
        <div className={styles.VoltLogoContainer}>
          <img
            src={"/images/VoltIcon.svg"}
            alt="linkedIn icon"
            width={84}
            height={32}
          />
        </div>
        <div className={styles.FooterHelpSectionContainer}>
          <a className={styles.FooterHelpSectionContainerAnchor}>Home</a>
          <a className={styles.FooterHelpSectionContainerAnchor}>Contact</a>
          <a className={styles.FooterHelpSectionContainerAnchor}>About us</a>
        </div>
      </div>
      <div className={styles.FooterContainer_Bottom}>
        <div className={styles.FooterFollowUsContainer}>
          <div className={styles.FollowUsTextContainer}>Follow us</div>
          <div>
            <a>
              <Image
                src={"/images/twitter.svg"}
                alt="twitter icon"
                width={32}
                height={32}
              />
            </a>
          </div>
          <div>
            <a>
              <img
                src={"/images/Instagram.svg"}
                alt="instagram icon"
                width={32}
                height={32}
              />
            </a>
          </div>
          <div>
            <a href={EXTERNAL_URLS.LINKEDIN} target="_blank" rel="noreferrer">
              <img
                src={"/images/Instagram.svg"}
                alt="linkedIn icon"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
          {
              !_isMobile ? (
                  <div className={styles.FooterContainer_Bottom1}
                    style={{
                      width: '50%',
                      justifyContent: 'flex-end',
                      paddingBottom: 0
                    }}
                  >
                      <Image
                          src={"/images/startUpIndia.svg"}
                          alt={"start up india"}
                          width={152}
                          height={59}
                      />
                      <Image
                          src={"/images/startUpRegistration.svg"}
                          alt={"start up registration"}
                          width={152}
                          height={59}
                      />
                  </div>
              ) : (<></>)
          }
      </div>
      {_isMobile ? (
        <div className={styles.FooterContainer_Bottom1}>
          <Image
            src={"/images/startUpIndia.svg"}
            alt={"start up india"}
            width={152}
            height={59}
          />
          <Image
            src={"/images/startUpRegistration.svg"}
            alt={"start up registration"}
            width={152}
            height={59}
          />
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
          <div className={styles.VoltLegalContainer} style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            maxWidth: 1024
          }}>
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
