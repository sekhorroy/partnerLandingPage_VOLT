import styles from "./appSection.module.css";
import { isMobile, redirectTo } from "@/configs/utils";
import { Links } from "@/configs/constants";
import { Icons } from "@/configs/imageRegistry";
import Image from "next/image";
export const AppSection = () => {
  const _isMobile = isMobile();

  return (
    <div className={styles.appSectionContainer}>
      <div
        className={styles.appSectionContainerC1}
        style={
          !_isMobile
            ? {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 40,
                paddingLeft: 40,
                paddingRight: 40,
                paddingBottom: 22,
              }
            : {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingLeft: 40,
                paddingRight: 40,
                paddingBottom: 16,
              }
        }
      >
        <div
          className={styles.appSectionContainerC1Left}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className={styles.appSectionContainerC1LeftT1}
            style={
              _isMobile
                ? { textAlign: "center", paddingTop: 54, fontWeight: 400 }
                : {}
            }
          >
            Download volt money
          </div>
          <div
            className={styles.appSectionContainerC1LeftT2}
            style={
              _isMobile
                ? { textAlign: "center", paddingTop: 8, fontSize: 24 }
                : {
                    paddingTop: 16,
                    fontSize: 32,
                  }
            }
          >
            Get credit line in 5 minutes on Volt Money app
          </div>
          <div
            style={
              _isMobile
                ? {
                    display: "flex",
                    flexDirection: "row",
                    gap: 16,
                    paddingTop: 24,
                    justifyContent: "center",
                  }
                : {
                    display: "flex",
                    flexDirection: "row",
                    gap: 26,
                    paddingTop: 40,
                  }
            }
          >
            <div>
              <Image
                src={Icons.GET_IT_ON_GOOGLE}
                width={_isMobile ? 139 : 166}
                height={_isMobile ? 40 : 48}
                onClick={() => redirectTo(Links.AppPlayStore, "_blank")}
                style={{
                  cursor: "pointer",
                }}
                alt={"volt_money_play_store_image"}
              />
            </div>
            <div>
              <Image
                src={Icons.GET_IT_ON_IOS}
                width={_isMobile ? 139 : 166}
                height={_isMobile ? 40 : 48}
                onClick={() => redirectTo(Links.IosAppStore, "_blank")}
                style={{
                  cursor: "pointer",
                }}
                alt={"volt_money_ios_image"}
              />
            </div>
          </div>
          {!_isMobile ? (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 16,
                  paddingTop: 40,
                }}
              >
                <div>
                  <Image
                    src={Icons.VOLT_APP_QR_CODE}
                    width={75}
                    height={75}
                    alt={"Volt app qr code"}
                  />
                </div>
                <div className={styles.appSectionContainerQRDivider}></div>
                <div className={styles.appSectionContainerC1LeftT3}>
                  Scan QR code to get the Volt Money app
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        {!_isMobile ? (
          <>
            <div className={styles.appSectionContainerC1Right}>
              <Image
                src={Icons.IPHONE_DOUBLE_MOCK}
                width={424}
                height={400}
                className={styles.test}
                alt={"Volt_money_iphone_mock"}
              />
            </div>
          </>
        ) : (
          <></>
        )}
        {_isMobile ? (
          <>
            <div
              style={{
                paddingTop: 12,
              }}
            >
              <Image
                src={Icons.IPHONE_DOUBLE_MOCK}
                width={300}
                height={283}
                className={styles.test}
                alt={"Volt_money_iphone_mock"}
              />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
