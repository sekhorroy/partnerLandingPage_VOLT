import {getScreenX, isMobile} from "@/configs/utils";
import {useMemo} from "react";
import styles from "./teamSection.module.css";
import {Card} from "@/components/card";
import {CardTypes} from "@/components/card/types";

const TeamData = [{
    imageUrl: '/images/teams1',

}]

export default function TeamSection() {
  const _isMobile: boolean = isMobile();
  const width = getScreenX();

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
            <div className={styles.teamSectionMainContainerC1T1}
                style={_isMobile ? {
                    fontSize: 14,
                } : {
                    fontSize: 16,
                }}
            >
              MEET OUR TEAM
            </div>
            <div className={styles.teamSectionMainContainerC1T2}
                style={_isMobile ? {
                    fontSize: 24,
                    paddingTop: 8
                } : {
                    fontSize: 32,
                    paddingTop: 16
                }}
            >
              The passionate and talented people behind Volt
            </div>
            <div className={styles.teamSectionCardContainer}>
               <Card type={CardTypes.TEAM_CARD} title={"Lalit Bihani"} subTitle={"Co-founder & CEO"} imageUrl={"/images/team1.svg"}/>
            </div>
          </div>
        </div>
      </>
    );
  }, [_isMobile, width]);

  return _child;
}
