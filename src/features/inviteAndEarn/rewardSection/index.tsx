import styles from "./rewardSection.module.css";
import { isMobile } from "@/configs/utils";
import { useMemo } from "react";
import { StepperRewards } from "@/components/stepperRewards";
import { StepperRewardsData } from "@/components/stepperRewards/type";

const stepperRewardData: StepperRewardsData[] = [
  {
    points: "2",
    title: "₹2,000",
    imageUrl: "/images/greenMoney1.svg",
  },
  {
    points: "5",
    title: "₹5,000",
    imageUrl: "/images/greenMoney1.svg",
  },
  {
    points: "10",
    title: "Apple AirPods",
    imageUrl: "/images/airpods1.svg",
  },
  {
    points: "25",
    title: "Apple iPad",
    imageUrl: "/images/ipad1.png",
  },
];

const RewardSection = () => {
  const _isMobile = isMobile();

  const _child = useMemo(
    () => (
      <>
        <div
          className={styles.rewardSectionContainer}
          style={
            _isMobile
              ? {
                  paddingTop: 32,
                  paddingBottom: 32,
                }
              : {
                  paddingTop: 64,
                  paddingBottom: 64,
                }
          }
        >
          <div
            className={styles.rewardSectionContainerC1}
            style={
              _isMobile
                ? {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingLeft: 16,
                    paddingRight: 16,
                  }
                : {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingLeft: 16,
                    paddingRight: 16,
                    maxWidth: 1024,
                  }
            }
          >
            <div>
              <img src={"/images/rewardBlue1.svg"} width={80} height={80} />
            </div>
            <div
              className={styles.rewardSectionContainerC1T1}
              style={
                _isMobile
                  ? { paddingTop: 24, fontSize: 24 }
                  : { paddingTop: 24, fontSize: 32 }
              }
            >
              Exciting rewards for you
            </div>
            <div
              className={styles.rewardSectionContainerC1T2}
              style={
                _isMobile
                  ? { paddingTop: 8, fontSize: 14 }
                  : { paddingTop: 16, fontSize: 16 }
              }
            >
              A minimum of 2 successful referrals is necessary to qualify for
              this program
            </div>
            <div
              className={styles.rewardSectionComponentContainer}
              style={{
                paddingTop: 16,
                paddingBottom: 16,
                paddingLeft: 16,
                paddingRight: 16,
                marginTop: 24,
              }}
            >
              <div
                style={{
                  position: "relative",
                  left: 12,
                }}
              >
                <StepperRewards data={stepperRewardData} />
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

export default RewardSection;
