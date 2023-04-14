import { getScreenX, isMobile, redirectTo } from "@/configs/utils";
import { useMemo, useState } from "react";
import styles from "./aboutTopSection.module.css";
import { Card } from "@/components/card";
import { CardTypes } from "@/components/card/types";
import { ImageProps } from "@/components/button/type";
import { string } from "prop-types";
import { Divider } from "@/components/divider";
import {
  helpLineNumberLink,
  supportEmail,
  WhatsAppLink,
} from "@/configs/constants";
import Image from "next/image";

export default function AboutTopSection() {
  const _isMobile: boolean = isMobile();
  const width = getScreenX();
  const [_hide, setHide] = useState(false);

  const handleReadMore = () => {
    setHide(!_hide);
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
                }
              : {
                  paddingBottom: 80,
                }
          }
          className={styles.topSectionMainContainer}
        >
          <div className={styles.topSectionMainContainerC1}>
            <div
              className={styles.topSection1}
              style={
                _isMobile
                  ? { paddingTop: 24, paddingBottom: 48 }
                  : { paddingTop: 64, paddingBottom: 64 }
              }
            >
              {_isMobile ? (
                <>
                  India’s first app to offer instant online credit line against
                  securities
                </>
              ) : (
                <>
                  India’s first app to offer instant online credit line against
                  securities,{" "}
                  <span style={{ color: "#109648" }}>
                    {" "}
                    making credit easily accessible to millions of Indians{" "}
                  </span>
                  right when they need it in under 5 minutes
                </>
              )}
            </div>
            <div
              className={styles.aboutVoltCardContainer}
              style={
                _isMobile
                  ? {
                      padding: 16,
                    }
                  : {
                      padding: 40,
                    }
              }
            >
              <div
                className={
                  _isMobile
                    ? styles.aboutVoltCardContainerT1Mob
                    : styles.aboutVoltCardContainerT1Web
                }
              >
                About Volt
              </div>
              <div
                className={
                  _isMobile
                    ? styles.aboutVoltCardContainerT2Mob
                    : styles.aboutVoltCardContainerT2Web
                }
                style={
                  _hide === false && _isMobile
                    ? {
                        paddingTop: 8,
                        maxHeight: 90,
                        maxWidth: 328,
                        overflow: "hidden",
                      }
                    : _isMobile
                    ? {
                        paddingTop: 8,
                        maxWidth: 328,
                      }
                    : {
                        paddingTop: 8,
                      }
                }
              >
                Volt is a digital platform that unlocks the value of financial
                assets like mutual funds, allowing retail investors to avail
                loans against them instantly. With a hassle-free process and an
                array of options, including overdrafts and term loans, customers
                can access cash loans, credit lines, affordable interest rates,
                and flexible EMIs, while keeping their financial assets intact.
                Join us on our mission to democratize credit and experience a
                fast, seamless, transparent, and secure lending process.
              </div>
              <div
                style={{
                  height: 0,
                }}
              >
                <Image
                  src={"/images/aboutVoltMask.svg"}
                  alt={"volt logo"}
                  width={_isMobile ? 135 : 196}
                  height={_isMobile ? 122 : 178}
                  style={
                    _isMobile
                      ? {
                          position: "relative",
                          left: 210,
                          bottom: 80,
                        }
                      : {
                          position: "relative",
                          left: "83.5%",
                          bottom: 140,
                        }
                  }
                />
              </div>
              {_isMobile ? (
                <div
                  className={styles.readMoreContainer}
                  onClick={() => handleReadMore()}
                >
                  {_hide === false ? "Read more" : "Read less"}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }, [_isMobile, width, _hide]);

  return _child;
}
