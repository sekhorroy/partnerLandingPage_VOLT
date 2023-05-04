import styles from "./rewardSection.module.css";
import {
  GoogleAnalytics,
  isMobile,
  redirectTo,
  redirectToPartnerInviteAndEarn,
} from "@/configs/utils";
import { useMemo } from "react";
import { ButtonComponent } from "@/components/button";
import {
  ButtonTypeTokens,
  ButtonWidthTypeTokens,
} from "@/components/button/type";
import { AnalyticsEventName, ImageLinks, Links } from "@/configs/constants";

// const stepperRewardData: StepperRewardsData[] = [
//   {
//     points: "2",
//     title: "₹2,000",
//     imageUrl: "/images/greenMoney1.svg",
//   },
//   {
//     points: "5",
//     title: "₹5,000",
//     imageUrl: "/images/greenMoney1.svg",
//   },
//   {
//     points: "10",
//     title: "Apple AirPods",
//     imageUrl: "/images/airpods1.svg",
//   },
//   {
//     points: "25",
//     title: "Apple iPad",
//     imageUrl: "/images/ipad1.png",
//   },
// ];

const RewardSection = () => {
  const _isMobile = isMobile();

  const handleRedirectToPartnerWithGoogleAnalytics = () => {
    GoogleAnalytics(AnalyticsEventName.INVITE_CTA_CLICKED, {
      button_name: "Share invite link",
    });
    redirectToPartnerInviteAndEarn();
  };
  const handleTermAndCondition = () => {
    GoogleAnalytics(AnalyticsEventName.T_And_C_CTA_CLICKED, {});
    redirectTo(Links.InviteAndEarnTermsAndConditions, "_blank");
  };

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
              <img src={"/images/rewardBlue1.svg"} width={80} height={80}/>
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
              <div style={_isMobile ? {} : {}}>
                <div>
                  <img
                    src={
                      _isMobile
                        ? ImageLinks.rewardStructureMob
                        : ImageLinks.rewardStructureWeb
                    }
                    width={_isMobile ? "100%" : 1000}
                    height={_isMobile ? "100%" : 200}
                    style={
                      _isMobile
                        ? {
                            maxWidth: 400,
                          }
                        : {}
                    }
                    alt={'Volt_money_reward_structure'}
                  />
                </div>
              </div>
            </div>
            <div
              style={
                _isMobile
                  ? {
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                      marginTop: 24,
                      maxWidth: 400,
                    }
                  : {
                      display: "flex",
                      flexDirection: "row",
                      gap: 16,
                      marginTop: 40,
                    }
              }
            >
              <ButtonComponent
                label={"Share invite link"}
                type={ButtonTypeTokens.PRIMARY_LARGE}
                width={
                  _isMobile
                    ? ButtonWidthTypeTokens.FULL
                    : ButtonWidthTypeTokens.CONTENT
                }
                onClick={() => handleRedirectToPartnerWithGoogleAnalytics()}
              />
              <ButtonComponent
                label={"View all T&C"}
                type={ButtonTypeTokens.OUTLINE_LARGE}
                width={
                  _isMobile
                    ? ButtonWidthTypeTokens.FULL
                    : ButtonWidthTypeTokens.CONTENT
                }
                onClick={() => handleTermAndCondition()}
              />
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
