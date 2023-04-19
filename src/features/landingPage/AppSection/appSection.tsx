import styles from "./appSection.module.css";
import { isMobile } from "@/configs/utils";
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
              <img
                src={"./images/getItOnGoogle.svg"}
                width={_isMobile ? 139 : 166}
                height={_isMobile ? 40 : 48}
              />
            </div>
            <div>
              <img
                src={"./images/downloadOnAppStore.svg"}
                width={_isMobile ? 139 : 166}
                height={_isMobile ? 40 : 48}
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
                  <img
                    src={"./images/voltAppQrCode.svg"}
                    width={75}
                    height={75}
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
              <img
                src={"./images/iPhoneDoubleStylizedMockup.svg"}
                width={424}
                height={400}
                className={styles.test}
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
              <img
                src={"./images/iPhoneDoubleStylizedMockup.svg"}
                width={300}
                height={283}
                className={styles.test}
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
