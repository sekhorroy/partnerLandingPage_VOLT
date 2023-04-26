import styles from "./heroSection.module.css";
import { ButtonComponent } from "@/components/button";
import {
  ButtonTypeTokens,
  ButtonWidthTypeTokens,
} from "@/components/button/type";
import { isMobile } from "@/configs/utils";
import { useMemo } from "react";

const HeroSection = () => {
  const _isMobile = isMobile();
  console.log("isMobile: ", _isMobile);

  const _child = useMemo(
    () => (
      <>
        <div
          className={styles.heroSectionContainer}
          style={
            _isMobile
              ? {
                  paddingTop: 32,
                  paddingBottom: 32
                }
              : {
                  paddingTop: 44,
                  height: 514,
                }
          }
        >
          <div
            className={styles.heroSectionContainer1}
            style={
              _isMobile
                ? {
                    width: "100%",
                  }
                : {
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    paddingLeft: 32,
                  }
            }
          >
            <div
              className={styles.heroSectionContainer1Left}
              style={
                _isMobile
                  ? {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }
                  : {}
              }
            >
              <div
                className={styles.heroSectionContainer1LeftT1}
                style={
                  _isMobile
                    ? {
                        fontSize: 24,
                        textAlign: "center",
                      }
                    : {
                        fontSize: 32,
                      }
                }
              >
                Join the mission to stop redemptions!
              </div>
              <div
                className={styles.heroSectionContainer1LeftT2}
                style={
                  _isMobile
                    ? {
                        fontSize: 24,
                        textAlign: "center",
                      }
                    : {
                        fontSize: 48,
                      }
                }
              >
                Invite MFDs & get an assured iPad for FREE
              </div>
              <div
                style={
                  _isMobile
                    ? {
                        display: "flex",
                        width: "100%",
                        maxWidth: 400,
                        marginTop: 30,
                      }
                    : {
                        display: "flex",
                        width: "100%",
                        maxWidth: 288,
                        marginTop: 92,
                      }
                }
              >
                <ButtonComponent
                  label={"Get invite link"}
                  type={ButtonTypeTokens.PRIMARY_LARGE}
                  width={ButtonWidthTypeTokens.FULL}
                  onClick={() => {}}
                />
              </div>
              <div
                style={
                  _isMobile
                    ? {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: 12,
                      }
                    : {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 16,
                      }
                }
              >
                <div
                  style={{
                    paddingRight: 8,
                  }}
                >
                  <img src={"/images/team1.svg"} width={32} height={32} />
                </div>
                <div className={styles.heroSectionContainer1LeftT3}>
                  1000+ MFDs have joined the mission
                </div>
              </div>
            </div>
            <div
              className={styles.heroSectionContainer1Right}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <img
                  src={"/images/ipadPromotionImage1.svg"}
                  width={_isMobile ? 342 : 502}
                  height={_isMobile ? 270 : 394}
                />
              </div>
              <div
                className={styles.heroSectionContainer1RightTandC}
                style={
                  _isMobile
                    ? {}
                    : {
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }
                }
              >
                Terms and conditions applied.{"  "}
                <span
                  style={{
                    color: "#1434CB",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                >
                  Learn more
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
    [_isMobile]
  );

  return <>{_child}</>;
};

export default HeroSection;
