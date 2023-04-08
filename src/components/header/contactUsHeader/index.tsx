import styles from "./header.module.css";
import Image from "next/image";
import {getScreenX, isMobile} from "@/configs/utils";
import { ButtonComponent } from "@/components/button";
import { ButtonTypeTokens } from "@/components/button/type";
import { HeaderProps, HeaderType } from "@/components/header/type";

export const ContactUsHeader: React.FunctionComponent<HeaderProps> = ({
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
            width: width
        }}
      >
        <div
          className={
            type === HeaderType.CONTACT_US
              ? styles.headerContentContactUs
              : styles.headerContent
          }
        >
          <div className={styles.headerLeft} style={{}}>
            <Image
              priority
              src="/images/VoltPartnerLogo.svg"
              height={_isMobile ? 20 : 29}
              width={120}
              alt="Volt partner logo"
            />
          </div>
          <div className={styles.headerRight}>
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
                <div>About us</div>
                <div>Blog</div>
                <div>FAQs</div>
                <div>
                  <ButtonComponent
                    label="Get Started"
                    type={ButtonTypeTokens.OUTLINE_TRANSPARENT_LARGE}
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
