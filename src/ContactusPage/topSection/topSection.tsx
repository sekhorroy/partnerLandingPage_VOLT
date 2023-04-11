import { getScreenX, isMobile } from "@/configs/utils";
import { useMemo } from "react";
import styles from "./topSection.module.css";
import { Card } from "@/components/card";
import { CardTypes } from "@/components/card/types";
import { ImageProps } from "@/components/button/type";
import { string } from "prop-types";
import {Divider} from "@/components/divider";

export default function TopSectionContactUs() {
  const _isMobile: boolean = isMobile();
  const width = getScreenX();

  const _child = useMemo(() => {
    return (
      <>
        <div
          className={styles.topSectionContactOuter}
          style={{
            width: '100%',
          }}
        >
          <div className={styles.topSectionContactInner} style={{
              paddingLeft: 16,
              paddingRight: 16
          }}>
            <h2
              className={styles.topSectionContactInnerT1}
              style={
                _isMobile
                  ? {
                      paddingTop: 24,
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: 32,
                      /* or 125% */
                      textAlign: "center",
                    }
                  : {
                      paddingTop: 64,
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: 24,
                      textAlign: "center",
                    }
              }
            >
              {`Let's connect and get your questions answered`}
            </h2>
            <div
              style={ _isMobile ? {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                  paddingBottom: 40
              } : {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 16,
                  paddingTop: 24,
                  paddingBottom: 48
              }}
            >
              <Card
                type={CardTypes.CONTACT_US}
                title={"WhatsApp us"}
                subTitle={
                  "Our friendly team is here to help, and usually replies within 1-2 hours"
                }
                ctaLabel={"Chat with us on WhatsApp"}
                cta={true}
                imageUrl={"/images/Whatsapp.svg"}
              />
              <Card
                type={CardTypes.CONTACT_US}
                title={"Call us"}
                subTitle={
                  "Our experts are available Mon-Sat from 9:30 PM to 6:30 PM"
                }
                ctaLabel={"Call us"}
                cta={true}
                imageUrl={"/images/call.svg"}
              />
              <Card
                type={CardTypes.CONTACT_US}
                title={"Email us"}
                subTitle={
                  "and one of our representatives will get back to you as soon as possible"
                }
                ctaLabel={"Mail us"}
                cta={true}
                imageUrl={"/images/mail.svg"}
              />
            </div>
            <Divider />
          </div>
        </div>
      </>
    );
  }, [_isMobile, width]);

  return _child;
}
