import { getScreenX, isMobile } from "@/configs/utils";
import { useMemo } from "react";
import styles from "./connectSection.module.css";
import { Divider } from "@/components/divider";
import Image from "next/image";

export default function ConnectSection() {
  const _isMobile: boolean = isMobile();
  const width = getScreenX();

  const _child = useMemo(() => {
    return (
      <>
        <div
          className={styles.connectContainer}
          style={{
            width: width,
          }}
        >
          <div
            className={styles.connectContainerC1}
            style={_isMobile ? {
              paddingBottom: 48,
                paddingLeft: 16,
                paddingRight: 16
            }: {}}
          >
            {/*<Divider />*/}
            <h4 className={styles.connectContainerC1T1} style={{
              paddingTop: 40
            }}>
              Connect with us on social media!
            </h4>
            <div className={styles.connectContainerC1T2}>
              Help your clients retain their investments and deliver better
              outcomes
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 24,
                paddingTop: 32
              }}
              className={styles.shareIconsContainer}
            >
              <Image
                src={"./images/instagramContactUs.svg"}
                alt={"contact image 1"}
                width={48}
                height={48}
              />
              <Image
                src={"./images/linkedInContactUs.svg"}
                alt={"contact image 1"}
                width={48}
                height={48}
              />
              <Image
                src={"./images/twitterContactUs.svg"}
                alt={"contact image 1"}
                width={48}
                height={48}
              />
              <Image
                src={"./images/youtubeContactUs.svg"}
                alt={"contact image 1"}
                width={48}
                height={48}
              />
            </div>
            <h4 className={styles.connectContainerC1T3} style={{
              paddingTop: 48
            }}>
              Come say hello at our office HQ
            </h4>
            <div className={styles.connectContainerC1T4}>
              Ground Floor, EBC Space 3 166, 19th Main Rd, Sector 4, HSR Layout
              Bengaluru, Karnataka 560102
            </div>
            <div
              className={styles.getDirection}
              style={{
                display: "flex",
                flexDirection: "row",
                paddingTop: 16
              }}
            >
              {"Get directions >"}
            </div>
          </div>
        </div>
      </>
    );
  }, [_isMobile, width]);

  return _child;
}
