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
                  : {}
              }
            >
              <div className={styles.stepperRewardContainerProgressBar} />
              <div className={styles.stepperRewardContainer2}>
                {data.map((item, key) => {
                  return (
                    <>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          height: 80
                        }}
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
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingLeft: 16,
                            paddingRight: 16,
                            marginTop: 24,
                            height: 48,
                          }}
                          className={styles.stepperRewardContainerItem}
                        >
                          <div>{item.title}</div>
                          <div>
                            <img src={item.imageUrl} width={40} height={40} />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
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
