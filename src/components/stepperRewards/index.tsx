import { isMobile } from "@/configs/utils";
import { useMemo } from "react";
import styles from "./stepperRewards.module.css";
import { StepperRewardsProps } from "@/components/stepperRewards/type";

export const StepperRewards: React.FunctionComponent<StepperRewardsProps> = ({
  data,
}) => {
  const _isMobile: boolean = isMobile();

  const _child = useMemo(() => {
    return (
      <>
        {data ? (
          <>
            <div
              className={styles.stepperRewardContainer}
              style={
                _isMobile
                  ? {
                      display: "flex",
                      flexDirection: "row",
                    }
                  : {
                      display: "flex",
                      flexDirection: "column",
                    }
              }
            >
              {_isMobile ? (
                <>
                  <div className={styles.stepperRewardContainerProgressBar} />
                </>
              ) : (
                <></>
              )}
              <div
                className={styles.stepperRewardContainer2}
                style={
                  _isMobile
                    ? {
                        width: "100%",
                        minWidth: 242,
                        position: "relative",
                        right: 29,
                      }
                    : {
                        display: "flex",
                        flexDirection: "row",
                        gap: 120,
                        position: "relative",
                        top: 12,
                      }
                }
              >
                {data.map((item, key) => {
                  return (
                    <>
                      <div
                        style={
                          _isMobile
                            ? {
                                display: "flex",
                                flexDirection: "row",
                                height: 80,
                              }
                            : {
                                display: "flex",
                                flexDirection: "column-reverse",
                                alignItems: "center",
                                justifyContent: "center",
                              }
                        }
                        className={styles.test}
                      >
                        <div
                          className={styles.stepperRewardContainerPoints}
                          style={{
                            marginRight: 14,
                            marginTop: 28,
                            marginBottom: 28,
                          }}
                        >
                          {item.points}
                        </div>
                        <div
                          style={
                            _isMobile
                              ? {
                                  display: "flex",
                                  flexDirection: "row",
                                  width: "100%",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  paddingLeft: 16,
                                  paddingRight: 16,
                                  marginTop: 24,
                                  height: 48,
                                }
                              : {
                                  display: "flex",
                                  flexDirection: "column-reverse",
                                  width: 140,
                                  height: 106,
                                  justifyContent: "center",
                                  alignItems: "center",
                                  paddingLeft: 16,
                                  paddingRight: 16,
                                  marginTop: 24,
                                }
                          }
                          className={styles.stepperRewardContainerItem}
                        >
                          <div
                            style={
                              _isMobile
                                ? {}
                                : {
                                    textAlign: "center",
                                  }
                            }
                          >
                            {item.title}
                          </div>
                          <div>
                            <img src={item.imageUrl} width={40} height={40} />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              {!_isMobile ? (
                <>
                  <div
                    className={styles.stepperRewardContainerProgressBarWeb}
                  />
                </>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </>
    );
  }, [_isMobile]);

  return (
    <>
      <div>{_child}</div>
    </>
  );
};
