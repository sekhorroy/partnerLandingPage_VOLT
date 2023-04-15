import { convertTo2DArray, getScreenX, isMobile } from "@/configs/utils";
import { Card } from "@/components/card";
import { CardProps, CardTypes } from "@/components/card/types";
import { useEffect, useMemo, useState } from "react";
import styles from "./teamSection.module.css";
import { Carousal, CarousalItem } from "@/components/carousal";
import axios from "axios";
import { api } from "@/configs/constants";

const TeamData = [
  {
    name: "Lalit Bihani",
    title: "Co-founder & CEO",
    subTitle: "Ex: WhiteHatJr, BrowserStack IIT Delhi",
    imageUrl: "/images/team1.svg",
  },
  {
    name: "Lalit Bihani",
    title: "Co-founder & CEO",
    subTitle: "Ex: WhiteHatJr, BrowserStack IIT Delhi",
    imageUrl: "/images/team1.svg",
  },
  {
    name: "Lalit Bihani",
    title: "Co-founder & CEO",
    subTitle: "Ex: WhiteHatJr, BrowserStack IIT Delhi",
    imageUrl: "/images/team1.svg",
  },
  {
    name: "Lalit Bihani",
    title: "Co-founder & CEO",
    subTitle: "Ex: WhiteHatJr, BrowserStack IIT Delhi",
    imageUrl: "/images/team1.svg",
  },
  {
    name: "Lalit Bihani",
    title: "Co-founder & CEO",
    subTitle: "Ex: WhiteHatJr, BrowserStack IIT Delhi",
    imageUrl: "/images/team1.svg",
  },
  {
    name: "Lalit Bihani",
    title: "Co-founder & CEO",
    subTitle: "Ex: WhiteHatJr, BrowserStack IIT Delhi",
    imageUrl: "/images/team1.svg",
  },
  {
    name: "Lalit Bihani",
    title: "Co-founder & CEO",
    subTitle: "Ex: WhiteHatJr, BrowserStack IIT Delhi",
    imageUrl: "/images/team1.svg",
  },
  {
    name: "Lalit Bihani",
    title: "Co-founder & CEO",
    subTitle: "Ex: WhiteHatJr, BrowserStack IIT Delhi",
    imageUrl: "/images/team1.svg",
  },
  {
    name: "Lalit Bihani",
    title: "Co-founder & CEO",
    subTitle: "Ex: WhiteHatJr, BrowserStack IIT Delhi",
    imageUrl: "/images/team1.svg",
  },
  {
    name: "Lalit Bihani",
    title: "Co-founder & CEO",
    subTitle: "Ex: WhiteHatJr, BrowserStack IIT Delhi",
    imageUrl: "/images/team1.svg",
  },
  {
    name: "Lalit Bihani",
    title: "Co-founder & CEO",
    subTitle: "Ex: WhiteHatJr, BrowserStack IIT Delhi",
    imageUrl: "/images/team1.svg",
  },
  {
    name: "Lalit Bihani",
    title: "Co-founder & CEO",
    subTitle: "Ex: WhiteHatJr, BrowserStack IIT Delhi",
    imageUrl: "/images/team1.svg",
  },
];

export default function TeamSection() {
  const _isMobile: boolean = isMobile();
  const width = getScreenX();
  const [_data, setData] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(false);

  const dataTransform = convertTo2DArray(_data, 6);

  const getData = async () => {
      await setLoading(true);
      const response = await axios.get(
          // "https://v1.nocodeapi.com/voltmoney/google_sheets/IwjmEWFMjLgGfPdV?tabId=Sheet1"
          `${api.teamApi}`
      );
      const Data = response.data.data;
      console.log("response: ", Data);
      let data: CardProps[] = [];
      //@ts-ignore
      Data.map((item, index) => {
          data.push({
              type: CardTypes.TEAM_CARD,
              name: item?.name,
              title: item?.role,
              subTitle: item?.bio,
              imageUrl: item?.image

          });
      });

      await setData(data);
      await setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const _renderTeamViewMob = (data: CardProps[]) => {
    return (
      <div
        className={styles.teamContainerC1}
        style={{
          position: "relative",
          right: 20,
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={
              index > 1
                ? {
                    paddingTop: 32,
                  }
                : {}
            }
          >
            <Card
              type={CardTypes.TEAM_CARD}
              name={item.name}
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
          <div key={index} style={{}}>
            <Card
              type={CardTypes.TEAM_CARD}
              name={item.name}
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
            <div
              className={styles.teamSectionCardContainer}
              style={
                _isMobile
                  ? {
                      paddingTop: 40,
                    }
                  : {
                      paddingTop: 0,
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
                            left: 20,
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
        </div>
      </>
    );
  }, [_isMobile, width, _data]);

  return _child;
}
