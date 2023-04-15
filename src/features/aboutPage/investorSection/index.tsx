import { convertTo2DArray, getScreenX, isMobile } from "@/configs/utils";
import { Card } from "@/components/card";
import { CardProps, CardTypes } from "@/components/card/types";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./investorSection.module.css";
import { Carousal, CarousalItem } from "@/components/carousal";
import axios from "axios";
import { api } from "@/configs/constants";
import Image from "next/image";

// const TeamData = [
//   {
//     title: "Lalit Bihani",
//     subTitle: "Co-founder & CEO",
//     imageUrl: "/images/team1.svg",
//   },
//   {
//     title: "Lalit Bihani",
//     subTitle: "Co-founder & CEO",
//     imageUrl: "/images/team1.svg",
//   },
//   {
//     title: "Lalit Bihani",
//     subTitle: "Co-founder & CEO",
//     imageUrl: "/images/team1.svg",
//   },
//   {
//     title: "Lalit Bihani",
//     subTitle: "Co-founder & CEO",
//     imageUrl: "/images/team1.svg",
//   },
//   {
//     title: "Lalit Bihani",
//     subTitle: "Co-founder & CEO",
//     imageUrl: "/images/team1.svg",
//   },
//   {
//     title: "Lalit Bihani",
//     subTitle: "Co-founder & CEO",
//     imageUrl: "/images/team1.svg",
//   },
//   {
//     title: "Lalit Bihani",
//     subTitle: "Co-founder & CEO",
//     imageUrl: "/images/team1.svg",
//   },
//   {
//     title: "Lalit Bihani",
//     subTitle: "Co-founder & CEO",
//     imageUrl: "/images/team1.svg",
//   },
//   {
//     title: "Lalit Bihani",
//     subTitle: "Co-founder & CEO",
//     imageUrl: "/images/team1.svg",
//   },
//   {
//     title: "Lalit Bihani",
//     subTitle: "Co-founder & CEO",
//     imageUrl: "/images/team1.svg",
//   },
//   {
//     title: "Lalit Bihani",
//     subTitle: "Co-founder & CEO",
//     imageUrl: "/images/team1.svg",
//   },
// ];

export default function InvestorSection() {
  const _isMobile: boolean = isMobile();
  const width = getScreenX();
  const [_data, setData] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  const [scrollLeftEnd, setScrollLeftEnd] = useState(true);

  const dataTransform = convertTo2DArray(_data, 5);

  const getData = async () => {
    await setLoading(true);
    const response = await axios.get(
      // "https://v1.nocodeapi.com/voltmoney/google_sheets/IwjmEWFMjLgGfPdV?tabId=Sheet1"
      `${api.investorApi}`
    );
    const Data = response.data.data;
    console.log("response: ", Data);
    let data: CardProps[] = [];
    //@ts-ignore
    Data.map((item, index) => {
      data.push({
        type: CardTypes.TEAM_CARD,
        title: item?.name,
        subTitle: item?.bio,
        imageUrl: item?.image,
      });
    });

    await setData(data);
    await setLoading(false);
  };

  const handleClick = (direction: string) => {
    console.log("handle Click");
    if (direction === "left") {
      slide(-250);
    }
    if (direction === "right") {
      slide(250);
    }
  };

  //@ts-ignore
  const slide = (shift) => {
    //@ts-ignore
    if (scrollRef && scrollRef.current) {
      //@ts-ignore
      scrollRef.current.scrollLeft += shift;

      setscrollX(scrollX + shift);

      //@ts-ignore
      if (scrollRef.current.scrollLeft === 0) {
        setScrollLeftEnd(true);
      } else {
        setScrollLeftEnd(false);
      }

      // console.log("scrollRef.current.scrollWidth: ", scrollRef.current.scrollWidth - scrollRef.current.scrollLeft);
      // console.log("scrollRef.current.offsetWidth: ", scrollRef.current.offsetWidth);
      if (
        //@ts-ignore
        Math.floor(
          //@ts-ignore
          scrollRef.current.scrollWidth - scrollRef.current.scrollLeft
        ) <=
        //@ts-ignore
        scrollRef.current.offsetWidth
      ) {
        setscrolEnd(true);
        console.log("setscrolEnd: ", scrolEnd);
      } else {
        setscrolEnd(false);
        console.log("setscrolEnd: ", scrolEnd);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const _renderTeamViewMob = (data: CardProps[]) => {
    return (
      <div className={styles.teamContainerC1}>
        {data.map((item, index) => (
          <div
            key={index}
            style={
              index > 0
                ? {
                    paddingTop: 18,
                  }
                : {}
            }
          >
            <Card
              type={CardTypes.INVESTOR_CARD}
              title={item.title}
              subTitle={item.subTitle}
              imageUrl={item.imageUrl}
            />
          </div>
        ))}
      </div>
    );
  };
  const _renderTeamViewWeb = (data: [any]) => {
    return (
      <div
        className={styles.teamContainerC1Web}
        style={{
          paddingTop: 24,
        }}
        ref={scrollRef}
      >
        {data.map((item, index) => (
          <div key={index} style={{}}>
            <Card
              type={CardTypes.INVESTOR_CARD}
              title={item.title}
              subTitle={item.subTitle}
              imageUrl={item.imageUrl}
            />
          </div>
        ))}
      </div>
    );
  };

  const _scrollButton = useMemo(() => {
    return (
      <>
        {!_isMobile ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 24,
            }}
          >
            {scrollLeftEnd ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 56,
                  height: 56,
                }}
                className={styles.buttonNotActive}
              >
                <Image
                  src={"/images/leftGrey.svg"}
                  alt={"arrow"}
                  width={32}
                  height={32}
                />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 56,
                  height: 56,
                }}
                className={styles.buttonActive}
                onClick={() => handleClick("left")}
              >
                <Image
                  src={"/images/leftBlack.svg"}
                  alt={"arrow"}
                  width={32}
                  height={32}
                />
              </div>
            )}

            {scrolEnd ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 56,
                  height: 56,
                }}
                className={styles.buttonNotActive}
              >
                <Image
                  src={"/images/rightGrey.svg"}
                  alt={"right"}
                  width={32}
                  height={32}
                />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 56,
                  height: 56,
                }}
                className={styles.buttonActive}
                onClick={() => handleClick("right")}
              >
                <Image
                  src={"/images/rigthBlack.svg"}
                  alt={"right"}
                  width={32}
                  height={32}
                />
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }, [scrollRef, scrollLeftEnd, scrolEnd, _isMobile]);

  const _child = useMemo(() => {
    return (
      <>
        <div
          style={
            _isMobile
              ? {
                  paddingLeft: 16,
                  paddingRight: 16,
                  width: "100%",
                  paddingBottom: 48,
                  paddingTop: 40,
                }
              : {
                  paddingTop: 64,
                  paddingBottom: 80,
                }
          }
          className={styles.investorSectionMainContainer}
        >
          <div className={styles.investorSectionMainContainerC1}>
            <div
              className={styles.investorSectionMainContainerC1T1}
              style={
                _isMobile
                  ? {
                      fontSize: 14,
                      textAlign: "center",
                    }
                  : {
                      width: "100%",
                      fontSize: 16,
                    }
              }
            >
              BACKED BY THE BEST
            </div>
            <div
              className={styles.investorSectionMainContainerC1T2}
              style={
                _isMobile
                  ? {
                      fontSize: 24,
                      paddingTop: 8,
                      textAlign: "center",
                    }
                  : {
                      width: "100%",
                      fontSize: 32,
                      paddingTop: 16,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }
              }
            >
              <div>Who believe in our vision</div>
              {!_isMobile ? <>{_scrollButton}</> : <></>}
            </div>
            <div
              className={styles.investorSectionCardContainer}
              style={
                _isMobile
                  ? {
                      paddingTop: 24,
                    }
                  : {
                      paddingTop: 24,
                    }
              }
            >
              {_isMobile ? (
                <>
                  <Carousal data={dataTransform}>
                    {dataTransform.map((item, index) => (
                      <CarousalItem key={index} width={"100%"}>
                        <div
                          style={{
                            minWidth: 323,
                            position: "relative",
                            left: 30,
                          }}
                        >
                          {_renderTeamViewMob(item)}
                        </div>
                      </CarousalItem>
                    ))}
                  </Carousal>
                </>
              ) : (
                <>
                  {
                    //@ts-ignore
                    _renderTeamViewWeb(_data)
                  }
                </>
              )}
            </div>
          </div>
          {/*<div className={styles.BottomContainer}>*/}
          {/*  {_isMobile ? (*/}
          {/*    <>*/}
          {/*      <div className={styles.BottomContainerC1Mob}>*/}
          {/*        <div className={styles.BottomContainerT1Mob}>*/}
          {/*          DREAM BIG AT VOLT*/}
          {/*        </div>*/}
          {/*        <div*/}
          {/*          className={styles.BottomContainerT2Mob}*/}
          {/*          style={{*/}
          {/*            paddingTop: 12,*/}
          {/*          }}*/}
          {/*        >*/}
          {/*          Join us in making loans easier for millions of Indian*/}
          {/*        </div>*/}
          {/*        <div style={{*/}
          {/*            paddingTop: 24*/}
          {/*        }}>*/}
          {/*          <ButtonComponent*/}
          {/*            label={"Check open opportunities"}*/}
          {/*            type={ButtonTypeTokens.OUTLINE_LARGE}*/}
          {/*            width={ButtonWidthTypeTokens.FULL}*/}
          {/*          />*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </>*/}
          {/*  ) : (*/}
          {/*    <></>*/}
          {/*  )}*/}
          {/*</div>*/}
        </div>
      </>
    );
  }, [_isMobile, width, _data, dataTransform]);

  return _child;
}
