import { getScreenX, isMobile, redirectTo } from "@/configs/utils";
import { useMemo } from "react";
import styles from "./connectSection.module.css";
import { Divider } from "@/components/divider";
import Image from "next/image";
import { Links } from "@/configs/constants";

export default function ConnectSection() {
  const _isMobile: boolean = isMobile();
  const width = getScreenX();

  const _child = useMemo(() => {
    return (
      <>
        <div
          className={styles.connectContainer}
          style={{
            width: "100%",
          }}
        >
          <div
            className={styles.connectContainerC1}
            style={
              _isMobile
                ? {
                    paddingBottom: 48,
                    paddingLeft: 16,
                    paddingRight: 16,
                  }
                : {}
            }
          >
            {/*<Divider />*/}
            <h4
              className={styles.connectContainerC1T1}
              style={{
                paddingTop: 40,
              }}
            >
              Connect with us on social media
            </h4>
            <div className={styles.connectContainerC1T2}>
              Stay up-to-date with our latest products by following us
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 24,
                paddingTop: 32,
              }}
              className={styles.shareIconsContainer}
            >
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={() => redirectTo(Links.Instagram)}
              >
                <Image
                  src={"./images/instagramContactUs.svg"}
                  alt={"contact image 1"}
                  width={48}
                  height={48}
                />
              </div>
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={() => redirectTo(Links.Linkedin)}
              >
                <Image
                  src={"./images/linkedInContactUs.svg"}
                  alt={"contact image 1"}
                  width={48}
                  height={48}
                />
              </div>
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={() => redirectTo(Links.Twitter)}
              >
                <Image
                  src={"./images/twitterContactUs.svg"}
                  alt={"contact image 1"}
                  width={48}
                  height={48}
                />
              </div>
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={() => redirectTo(Links.Youtube)}
              >
                <Image
                  src={"./images/youtubeContactUs.svg"}
                  alt={"contact image 1"}
                  width={48}
                  height={48}
                />
              </div>
            </div>
            <h4
              className={styles.connectContainerC1T3}
              style={{
                paddingTop: 48,
              }}
            >
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
                paddingTop: 16,
                cursor: "pointer",
              }}
              onClick={() => redirectTo(Links.OfficeLocation, "_blank")}
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
