import {isMobile} from "@/configs/utils";
import styles from "./HowItWorks.module.css";
import {useMemo, useState} from "react";
import {StepperBenefit} from "@/components/stepperBenefit";
import {StepperBenefitData} from "@/components/stepperBenefit/type";
import FadeInOut from "../../components/fader/fader";
import Image from "next/image";
import {ButtonComponent} from "@/components/button";
import {ButtonTypeTokens, ButtonWidthTypeTokens} from "@/components/button/type";

export default function HowItWorks() {
  const _isMobile: boolean = isMobile();
  const [_activeId, setActiveId] = useState(0);

  const stepperData: StepperBenefitData[] = [
    {
      title: "Join our family of 1000+ partners",
      subTitle:
        "Empanel in less than 2 minutes and get instant access to our partner dashboard",
    },
    {
      title: "Create and share link",
      subTitle:
        "Get your customized referral link and share it with your clients or MFDs",
    },
    {
      title: "Client signed up on Volt Money.",
      subTitle:
        "Receive instant rewards when your clients or MFDs sign up through your referral link.",
    },
    {
      title: "Track client’s status",
      subTitle:
        "Track your clients activities and earnings on our user-friendly dashboard.",
    },
  ];

  const imageData = [
    { url: "/images/howItWorksImage1.svg" },
    { url: "/images/howItWorksImage2.svg" },
    { url: "/images/howItWorksImage3.svg" },
    { url: "/images/howItWorksImage4.svg" },
  ];

  // const renderImage = useMemo(() => {
  //   return (<div>
  //       <Image  src={imageData[_activeId].url} alt={'image1'} width={332} height={332} />
  //   </div>)
  // }, [_activeId]);

  const _child = useMemo(() => {
    return (
      <>
        <div
          className={styles.howItWorksContainer}
          style={{ paddingTop: 48, paddingLeft: 16, paddingRight: 16}}
        >
          <div className={styles.howItWorksContainer1}>
            <div className={styles.howItWorksContainerT1}>HOW IT WORKS</div>
            <div style={{
              paddingTop: 8
            }}>
              <h2 className={styles.howItWorksContainerT2}>How does the Volt partner program work?</h2>
            </div>
            <div style={_isMobile ? {
              display:"flex",
              flexDirection: "column"
            } : {
              display:"flex",
              flexDirection: "row"
            }}>
              <div className={styles.howItWorksContainerC1} style={_isMobile ? {
                flex: 1
              } : {}}>
                {
                  imageData.map((item, index) => {
                    return (index !== _activeId) ?  (
                        <>
                          <FadeInOut show={false} duration={0}>
                            <Image
                                src={item.url}
                                alt={"image1"}
                                width={332}
                                height={332}
                            />
                          </FadeInOut>
                        </>
                    ) :  (
                        <>
                          <FadeInOut show={true} duration={750}>
                            <Image
                                src={item.url}
                                alt={"image1"}
                                width={_isMobile ? 332 : 524}
                                height={_isMobile ? 332: 544}
                            />
                          </FadeInOut>
                        </>
                    );
                  })}
              </div>
              <div className={styles.howItWorksContainer1C1} style={_isMobile ? {
                flex: 1,
                position: 'relative',
                bottom: 40
              } : {
              }}>
                <StepperBenefit
                    activeId={0}
                    data={stepperData}
                    setActive={setActiveId}
                />
                <div style={_isMobile ? {
                  maxWidth: 400,
                  width: '100%'
                } : {
                  width: '100%',
                  boxSizing: "border-box",
                  display: 'flex',
                  flexDirection: "row",
                  justifyContent: "flex-start"
                }}>
                  <ButtonComponent label={'Create referral link'} type={ButtonTypeTokens.PRIMARY_LARGE} width={_isMobile ? ButtonWidthTypeTokens.FULL : ButtonWidthTypeTokens.CONTENT} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }, [_isMobile, _activeId]);

  return _child;
}
