import styles from "./header.module.css";
import Image from "next/image";
import {
  getScreenX,
  isMobile,
  redirectTo,
  redirectToFaq,
  redirectToPartner,
} from "@/configs/utils";
import { ButtonComponent } from "@/components/button";
import { ButtonTypeTokens } from "@/components/button/type";
import { HeaderProps, HeaderType } from "@/components/header/type";

export const PartnerHeader: React.FunctionComponent<HeaderProps> = ({
  type,
}) => {
  const _isMobile: boolean = isMobile();
  const width = getScreenX();
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
          width: width,
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
            <Image
              priority
              src="/images/VoltPartnerLogo.svg"
              height={_isMobile ? 20 : 29}
              width={120}
              alt="Volt partner logo"
            />
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
              <div>
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
                  onClick={() => redirectTo("/aboutus")}
                >
                  About us
                </div>
                <div
                  className={styles.headerLinksContainer}
                  onClick={redirectToFaq}
                >
                  FAQs
                </div>
                <div
                  className={styles.headerLinksContainer}
                  onClick={redirectToPartner}
                >
                  <ButtonComponent
                    label="Get Started"
                    type={ButtonTypeTokens.OUTLINE_LARGE}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
