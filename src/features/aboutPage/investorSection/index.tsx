import {convertTo2DArray, getScreenX, isMobile} from "@/configs/utils";
import {Card} from "@/components/card";
import {CardProps, CardTypes} from "@/components/card/types";
import {useMemo} from "react";
import styles from "./investorSection.module.css";
import {Carousal, CarousalItem} from "@/components/carousal";

const TeamData = [
  {
    title: "Lalit Bihani",
    subTitle: "Co-founder & CEO",
    imageUrl: "/images/team1.svg",
  },
  {
    title: "Lalit Bihani",
    subTitle: "Co-founder & CEO",
    imageUrl: "/images/team1.svg",
  },
  {
    title: "Lalit Bihani",
    subTitle: "Co-founder & CEO",
    imageUrl: "/images/team1.svg",
  },
  {
    title: "Lalit Bihani",
    subTitle: "Co-founder & CEO",
    imageUrl: "/images/team1.svg",
  },
  {
    title: "Lalit Bihani",
    subTitle: "Co-founder & CEO",
    imageUrl: "/images/team1.svg",
  },
  {
    title: "Lalit Bihani",
    subTitle: "Co-founder & CEO",
    imageUrl: "/images/team1.svg",
  },
  {
    title: "Lalit Bihani",
    subTitle: "Co-founder & CEO",
    imageUrl: "/images/team1.svg",
  },
  {
    title: "Lalit Bihani",
    subTitle: "Co-founder & CEO",
    imageUrl: "/images/team1.svg",
  },
  {
    title: "Lalit Bihani",
    subTitle: "Co-founder & CEO",
    imageUrl: "/images/team1.svg",
  },
  {
    title: "Lalit Bihani",
    subTitle: "Co-founder & CEO",
    imageUrl: "/images/team1.svg",
  },
  {
    title: "Lalit Bihani",
    subTitle: "Co-founder & CEO",
    imageUrl: "/images/team1.svg",
  },
];

export default function InvestorSection() {
  const _isMobile: boolean = isMobile();
  const width = getScreenX();

  const dataTransform = convertTo2DArray(TeamData, 5);

  const _renderTeamViewMob = (data: CardProps[]) => {
    return (
      <div className={styles.teamContainerC1}>
        {data.map((item, index) => (
            <div key={index} style={(index > 0) ? {
                paddingTop: 18
            }: {}}>
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
            <div className={styles.teamContainerC1Web}>
                {data.map((item, index) => (
                    <div key={index} style={{
                        paddingRight: 32,
                        paddingTop: 24
                    }}>
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
                    }
                  : {
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
                    }
                  : {
                      fontSize: 32,
                      paddingTop: 16,
                    }
              }
            >
                Who believe in our vision
            </div>
            <div className={styles.investorSectionCardContainer} style={_isMobile ? {
                paddingTop: 24
            } : {
                paddingTop: 24
            }}>
              {_isMobile ? (
                <>
                  <Carousal data={dataTransform}>
                    {dataTransform.map((item, index) => (
                      <CarousalItem key={index} width={"100%"}>
                        <div
                          style={{
                              minWidth: 323,
                              position: 'relative',
                              left: 30
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
                        _renderTeamViewWeb(TeamData)
                    }
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }, [_isMobile, width]);

  return _child;
}
