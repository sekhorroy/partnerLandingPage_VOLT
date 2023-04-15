import { convertTo2DArray, getScreenX, isMobile } from "@/configs/utils";
import { Card } from "@/components/card";
import {CardProps, CardTypes} from "@/components/card/types";
import { useMemo } from "react";
import styles from "./teamSection.module.css";
import { Carousal, CarousalItem } from "@/components/carousal";

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

export default function TeamSection() {
  const _isMobile: boolean = isMobile();
  const width = getScreenX();

  const dataTransform = convertTo2DArray(TeamData, 6);

  const _renderTeamViewMob = (data: CardProps[]) => {
    return (
      <div className={styles.teamContainerC1}>
        {data.map((item, index) => (
            <div key={index} style={(index > 1) ? {
                paddingTop: 32
            }: {}}>
                <Card
                    type={CardTypes.TEAM_CARD}
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
                    }}>
                        <Card
                            type={CardTypes.TEAM_CARD}
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
          className={styles.teamSectionMainContainer}
        >
          <div className={styles.teamSectionMainContainerC1}>
            <div
              className={styles.teamSectionMainContainerC1T1}
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
              MEET OUR TEAM
            </div>
            <div
              className={styles.teamSectionMainContainerC1T2}
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
              The passionate and talented people behind Volt
            </div>
            <div className={styles.teamSectionCardContainer} style={_isMobile ? {
                paddingTop: 40
            } : {
                paddingTop: 0
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
                              left: 20
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
