import {
  GoogleAnalytics,
  isMobile,
  redirectTo,
  redirectToPartner,
  redirectToPartnerInviteAndEarn,
} from "@/configs/utils";
import styles from "./HowItWorks.module.css";
import { useMemo, useState } from "react";
import { StepperBenefit } from "@/components/stepperBenefit";
import { StepperBenefitData } from "@/components/stepperBenefit/type";
import FadeInOut from "../../../components/fader/fader";
import Image from "next/image";
import { ButtonComponent } from "@/components/button";
import {
  ButtonTypeTokens,
  ButtonWidthTypeTokens,
} from "@/components/button/type";
import { Divider } from "@/components/divider";
import { useRouter } from "next/router";
import { AnalyticsEventName, Links } from "@/configs/constants";

export default function HowItWorksReferAndEarn() {
  const _isMobile: boolean = isMobile();
  const [_activeId, setActiveId] = useState(0);

  const handleRedirectToPartnerWithGoogleAnalytics = () => {
    GoogleAnalytics(AnalyticsEventName.INVITE_CTA_CLICKED, {
      button_name: "Invite MFD",
    });
    redirectToPartnerInviteAndEarn();
  };
  const handleTermAndCondition = () => {
    GoogleAnalytics(AnalyticsEventName.T_And_C_CTA_CLICKED, {});
    redirectTo(Links.InviteAndEarnTermsAndConditions, "_blank");
  };

  const stepperData: StepperBenefitData[] = [
    {
      title: "Share invite link",
      subTitle: "Share unique invitation link with MFDs via WhatsApp or email ",
    },
    {
      title: "Invited MFD joins",
      subTitle: "Invited MFDs empanels with Volt Money and shares leads",
    },
    {
      title: "Get ₹2000 cash",
      subTitle:
        "Invite 2 MFDs and get cash rewards of ₹2000 on successfull activation. Earn higher rewards by inviting more MFDs",
    },
    {
      title: "Win Apple iPad",
      subTitle: "Get an Apple iPad for free when 25 MFDs get activated*",
    },
  ];

  const imageData = [
    {
      url: "/images/howItWorksImagesInviteAndEarn1.svg",
      alt: "Empanel with volt money",
    },
    {
      url: "/images/howItWorksImagesInviteAndEarn2.svg",
      alt: "Refer client on volt money",
    },
    {
      url: "/images/howItWorksImagesInviteAndEarn3.svg",
      alt: "Check credit line on volt money",
    },
    {
      url: "/images/howItWorksImagesInviteAndEarn4.svg",
      alt: "Track referral on volt money dashboard",
    },
  ];

  const _child = useMemo(() => {
    return (
      <>
        <div
          className={styles.howItWorksContainer}
          style={
            _isMobile
              ? {
                  paddingTop: 48,
                  paddingLeft: 16,
                  paddingRight: 16,
                }
              : {
                  paddingTop: 80,
                  paddingLeft: 16,
                  paddingRight: 16,
                }
          }
        >
          <div className={styles.howItWorksContainer1}>
            <div
              className={styles.howItWorksContainerT1}
              style={
                !_isMobile
                  ? {
                      fontFamily: "Inter",
                      fontWeight: "500",
                      fontStyle: "normal",
                      fontSize: 16,
                      lineHeight: 24,
                    }
                  : {
                      fontFamily: "Inter",
                      fontWeight: "400",
                      fontStyle: "normal",
                      fontSize: 14,
                      lineHeight: 24,
                    }
              }
            >
              HOW IT WORKS
            </div>
            <div
              style={
                _isMobile
                  ? {
                      paddingTop: 8,
                    }
                  : {
                      paddingTop: 16,
                    }
              }
            >
              <h2
                className={styles.howItWorksContainerT2}
                style={
                  _isMobile
                    ? {
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: 24,
                      }
                    : {
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: 32,
                      }
                }
              >
                Spread the word & get rewards
              </h2>
            </div>
            <div
              style={
                _isMobile
                  ? {
                      display: "flex",
                      flexDirection: "column",
                    }
                  : {
                      display: "flex",
                      flexDirection: "row",
                    }
              }
            >
              <div
                className={styles.howItWorksContainerC1}
                style={
                  _isMobile
                    ? {
                        flex: 1,
                      }
                    : {}
                }
              >
                {imageData.map((item, index) => {
                  return index !== _activeId ? (
                    <>
                      <FadeInOut show={false} duration={0}>
                        <Image
                          src={item.url}
                          alt={item.alt}
                          width={_isMobile ? 0 : 0}
                          height={_isMobile ? 0 : 0}
                        />
                      </FadeInOut>
                    </>
                  ) : (
                    <>
                      <FadeInOut show={true} duration={500}>
                        <Image
                          src={item.url}
                          alt={item.alt}
                          width={_isMobile ? 332 : 524}
                          height={_isMobile ? 332 : 524}
                        />
                      </FadeInOut>
                    </>
                  );
                })}
              </div>
              <div
                className={styles.howItWorksContainer1C1}
                style={
                  _isMobile
                    ? {
                        flex: 1,
                        position: "relative",
                        bottom: 40,
                      }
                    : {}
                }
              >
                <div
                  style={{
                    height: 500,
                    paddingTop: 24,
                  }}
                >
                  <StepperBenefit
                    activeId={0}
                    data={stepperData}
                    setActive={setActiveId}
                  />
                </div>

                <div
                  style={
                    _isMobile
                      ? {
                          maxWidth: 400,
                          width: "100%",
                        }
                      : {
                          width: "100%",
                          boxSizing: "border-box",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          paddingTop: 24,
                        }
                  }
                ></div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                bottom: 40,
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: _isMobile ? 400 : 817,
                  backgroundColor: "#FFF6DD",
                  paddingTop: 8,
                  paddingBottom: 8,
                  paddingRight: 16,
                  paddingLeft: 16,

                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: 14,
                  color: "#1D2939",
                  borderRadius: 8,
                }}
              >
                * Referred MFD gets activated when they onboard their first
                client with a credit limit of Rs. 1 lakh or more{" "}
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "400",
                    fontSize: 14,
                    color: "#1434CB",
                    cursor: "pointer",
                  }}
                  onClick={() => handleTermAndCondition()}
                >
                  T&Cs apply
                </span>
                .
              </div>
              <div
                style={{
                  height: 24,
                }}
              />
              <ButtonComponent
                label={"Invite MFD "}
                type={ButtonTypeTokens.PRIMARY_LARGE}
                width={
                  _isMobile
                    ? ButtonWidthTypeTokens.FULL
                    : ButtonWidthTypeTokens.FULL
                }
                maxWidth={_isMobile ? 400 : 248}
                onClick={() => handleRedirectToPartnerWithGoogleAnalytics()}
              />
            </div>
          </div>
          <div
            style={
              _isMobile
                ? {
                    width: "100%",
                    maxWidth: 1024,
                    paddingTop: 20,
                  }
                : {
                    width: "100%",
                    maxWidth: 1024,
                    paddingTop: 48,
                    paddingBottom: 40,
                  }
            }
          ></div>
        </div>
      </>
    );
  }, [_isMobile, _activeId]);

  return _child;
}
