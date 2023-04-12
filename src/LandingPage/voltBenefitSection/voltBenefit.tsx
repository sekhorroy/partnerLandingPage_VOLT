import {isMobile, redirectToPartner, redirectToVoltApp} from "@/configs/utils";
import styles from "./voltBenefit.module.css";
import { useMemo } from "react";
import { TabComponent } from "@/components/tabComponent";
import { TabComponentOptions } from "@/components/tabComponent/type";
import { Card } from "@/components/card";
import { CardProps, CardTypes } from "@/components/card/types";
import { ButtonComponent } from "@/components/button";
import {
  ButtonTypeTokens,
  ButtonWidthTypeTokens,
} from "@/components/button/type";
import {useRouter} from "next/router";

const partnerCards: CardProps[] = [
  {
    leftIcon: {
      url: "/images/greenCancel.svg",
      width: 64,
      height: 64,
      alt: "image1",
    },
    type: CardTypes.VOLT_BENEFIT,
    title: "Stop redemptions",
    subTitle:
      "Help your clients retain their investments and deliver better outcomes.",
  },
  {
    leftIcon: {
      url: "/images/greenShield.svg",
      width: 64,
      height: 64,
      alt: "image1",
    },
    type: CardTypes.VOLT_BENEFIT,
    title: "Secure & paperless",
    subTitle:
      "Say goodbye to the hassle of physical documents and enjoy our secure & digital loans.",
  },
  {
    leftIcon: {
      url: "/images/greenRupees.svg",
      width: 64,
      height: 64,
      alt: "image1",
    },
    type: CardTypes.VOLT_BENEFIT,
    title: "Boost your earnings",
    subTitle:
      "Acquire more clients by offering investors the new option to leverage investments.",
  },
  {
    leftIcon: {
      url: "/images/greenContact.svg",
      width: 64,
      height: 64,
      alt: "image1",
    },
    type: CardTypes.VOLT_BENEFIT,
    title: "Dedicated support.",
    subTitle:
      "Our dedicated support team is always ready to assist you with any questions or concern.",
  },
];

const clientsCards: CardProps[] = [
  {
    leftIcon: {
      url: "/images/greenPercentage.svg",
      width: 64,
      height: 64,
      alt: "image1",
    },
    type: CardTypes.VOLT_BENEFIT,
    title: "Interest rates starting at 9%",
    subTitle: "Borrow from trusted banks or NBFCs at low interest rates.",
  },
  {
    leftIcon: {
      url: "/images/greenRupees.svg",
      width: 64,
      height: 64,
      alt: "image1",
    },
    type: CardTypes.VOLT_BENEFIT,
    title: "Withdraw flexibly",
    subTitle:
      "Withdraw as per your need, and pay only as per usage. No hidden charges.",
  },
  {
    leftIcon: {
      url: "/images/greenClock.svg",
      width: 64,
      height: 64,
      alt: "image1",
    },
    type: CardTypes.VOLT_BENEFIT,
    title: "Repay easily",
    subTitle:
      "Make monthly interest only payments & repay principal as per convenience. ",
  },
  {
    leftIcon: {
      url: "/images/greenShield.svg",
      width: 64,
      height: 64,
      alt: "image1",
    },
    type: CardTypes.VOLT_BENEFIT,
    title: "Secure & paperless",
    subTitle:
      "Hassle free usage from mobile phone. We ensure safety through secure integrations.",
  },
];

//@ts-ignore
export default function VoltBenefit() {
  const _isMobile: boolean = isMobile();
  console.log("_isMobile: ", _isMobile);
  const url = useRouter().asPath;

  const tabOptions: TabComponentOptions[] = [
    {
      label: "For partners",
      value: 0,
    },
    {
      label: "For clients",
      value: 1,
    },
  ];

  const renderPartnerItems = useMemo(
    () => (
      <>
        <div
          style={{
            paddingTop: 24,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 16,
            maxWidth: 928,
          }}
          className={styles.test}
        >
          {partnerCards.map((item, index) => (
            <Card
              key={index}
              type={CardTypes.VOLT_BENEFIT}
              leftIcon={item.leftIcon}
              title={item.title}
              subTitle={item.subTitle}
            />
          ))}
        </div>
        <div className={styles.howItWorksContainerBtnContainer}>
          <div
            style={
              _isMobile
                ? { width: "100%", maxWidth: 432 }
                : { width: "100%", maxWidth: 295, paddingTop: 20 }
            }
          >
            <ButtonComponent
              label={"Onboard your customers now"}
              type={ButtonTypeTokens.PRIMARY_LARGE}
              width={ButtonWidthTypeTokens.FULL}
              onClick={()=>redirectToPartner(url)}
            />
          </div>
        </div>
      </>
    ),
    [partnerCards, _isMobile]
  );

  const renderClientItems = useMemo(() => {
    return (
      <>
        <div
          style={{
            paddingTop: 24,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 16,
            maxWidth: 928,
          }}
        >
          {clientsCards.map((item, index) => (
            <Card
              key={index}
              type={CardTypes.VOLT_BENEFIT}
              leftIcon={item.leftIcon}
              title={item.title}
              subTitle={item.subTitle}
            />
          ))}
        </div>
        <div className={styles.howItWorksContainerBtnContainer}>
          <div
            style={
              _isMobile
                ? { width: "100%", maxWidth: 432 }
                : { width: "100%", maxWidth: 180, paddingTop: 20 }
            }
          >
            <ButtonComponent
              label={"Get Started"}
              type={ButtonTypeTokens.PRIMARY_LARGE}
              width={ButtonWidthTypeTokens.FULL}
              onClick={()=>redirectToPartner(url)}
            />
          </div>
        </div>
      </>
    );
  }, [clientsCards, _isMobile]);

  const _child = useMemo(() => {
    return (
      <div
        className={styles.howItWorksContainer}
        style={{
          paddingTop: _isMobile ? 32 : 80,
          paddingBottom: _isMobile ? 32 : 80,
        }}
      >
        <div className={_isMobile ? styles.howItWorksContainerText1 : styles.howItWorksContainerText1Web} style={{
          paddingBottom: _isMobile ? 24 : 30
        }}>
          Benefits with voltmoney
        </div>
        <div style={{}}>
          <TabComponent
            activeId={0}
            reactChildren={[
              renderPartnerItems,
              <>
                <div>{renderClientItems}</div>
              </>,
            ]}
            tabOptions={tabOptions}
          />
        </div>
      </div>
    );
  }, [_isMobile]);

  return _child;
}
