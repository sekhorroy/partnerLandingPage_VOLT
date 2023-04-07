import { isMobile } from "@/configs/utils";
import styles from "./topSection.module.css";
import { ButtonComponent } from "@/components/button";
import {
  ButtonTypeTokens,
  ButtonWidthTypeTokens,
} from "@/components/button/type";
import Image from "next/image";
import { Divider } from "@/components/divider";
import { useMemo } from "react";

export default function TopSection() {
  const _isMobile: boolean = isMobile();

  const _child = useMemo(() => {
    return _isMobile ? (
      <>
        <div className={styles.topSectionMob}>
          <div
            className={styles.topSectionMobFont1}
            style={{
              paddingTop: 24,
            }}
          >
            Stop redemption &
          </div>
          <div className={styles.topSectionMobFont2}>retain your AUM</div>
          <div
            className={styles.topSectionMobFont3}
            style={{
              paddingTop: 8,
            }}
          >
            Help your clients meet short term cash needs
          </div>
          <div
            className={styles.topSectionMobBtn}
            style={{
              paddingTop: 32,
            }}
          >
            <ButtonComponent
              label={"EMPANEL NOW"}
              type={ButtonTypeTokens.PRIMARY_LARGE}
              width={ButtonWidthTypeTokens.FULL}
            />
          </div>
          <div
            style={{
              paddingTop: 16,
              paddingBottom: 24,
            }}
            className={styles.topSectionMssgContainer1}
          >
            <Image
              priority
              src="/images/GoldenShield.svg"
              height={20}
              width={20}
              alt="Volt partner logo"
            />
            <div>
              Over{" "}
              <span
                style={{
                  color: "#1434CB",
                }}
              >
                1,000+ partners
              </span>{" "}
              trust us
            </div>
          </div>
          <Divider />
          <div
            className={styles.lendingPartnerContainer1}
            style={{
              paddingTop: 24,
            }}
          >
            <div>Lending partner</div>
            <Image
              priority
              src="/images/BajajFinserv.svg"
              height={20}
              width={76}
              alt="Baja partner logo"
            />
          </div>
          <div
            className={styles.lendingPartnerContainer1}
            style={{
              paddingTop: 8,
            }}
          >
            <Image
              priority
              src="/images/hero_section_image.png"
              height={287}
              width={326}
              alt="top section image"
            />
          </div>
        </div>
        <div className={styles.topSectionHelpContainer1}>
          <h3
            className={styles.topSectionHelpContainerChild1}
            style={{
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            Get immediate answers from our experts
          </h3>
          <div
            className={styles.topSectionHelpContainerChild2}
            style={{
              paddingBottom: 32,
              paddingTop: 12,
            }}
          >
            We are available Monday through Saturday from 9:30 AM to 6:30 PM.
          </div>
          <ButtonComponent
            label={"Chat with us WhatsApp"}
            type={ButtonTypeTokens.OUTLINE_LARGE}
            width={ButtonWidthTypeTokens.FULL}
            leftIcon={{
              url: "/images/whatsapp.svg",
              width: 20,
              height: 20,
            }}
          />
        </div>
      </>
    ) : (
      <>
        <div className={styles.topSectionWeb}>
          <div className={styles.topSectionWebLeft}>
            <div
              className={styles.topSectionMobFont1Web}
              style={{
                paddingTop: 64,
              }}
            >
              Stop redemption &
            </div>
            <div className={styles.topSectionMobFont2Web}>retain your AUM</div>
            <div
              className={styles.topSectionMobFont3Web}
              style={{
                paddingTop: 16,
              }}
            >
              Get credit against mutual funds in 5 minutes to meet short term
              needs
            </div>
            <div
              className={styles.topSectionMobBtn}
              style={{
                paddingTop: 20,
              }}
            >
              <ButtonComponent
                label={"EMPANEL NOW"}
                type={ButtonTypeTokens.PRIMARY_LARGE}
                width={ButtonWidthTypeTokens.CONTENT}
              />
            </div>
            <div
              style={{
                paddingTop: 16,
                paddingBottom: 40,
              }}
              className={styles.topSectionMssgContainer1}
            >
              <Image
                priority
                src="/images/GoldenShield.svg"
                height={20}
                width={20}
                alt="Volt partner logo"
              />
              <div>
                Over{" "}
                <span
                  style={{
                    color: "#1434CB",
                  }}
                >
                  1,000+ partners
                </span>{" "}
                trust us
              </div>
            </div>
            <Divider />
            <div
              className={styles.lendingPartnerContainer1}
              style={{
                paddingTop: 40,
              }}
            >
              <div>Lending partner</div>
              <Image
                priority
                src="/images/BajajFinserv.svg"
                height={20}
                width={76}
                alt="Baja partner logo"
              />
            </div>
          </div>
          <div className={styles.topSectionWebRight}>
            <div>
              <Image
                src={"/images/hero_section_image.png"}
                alt={"top section image"}
                width={544}
                height={468}
              />
            </div>
          </div>
        </div>
        <div className={styles.topSectionHelpContainer1Web}>
            <div className={styles.topSectionHelpContainer2Web} >
                <div className={styles.topSectionHelpContainer2WebLeft}>
                    <h3
                        className={styles.topSectionHelpContainerChild1Web}
                        style={{
                            marginTop: 0,
                            marginBottom: 0,
                        }}
                    >
                        Get immediate answers from our experts
                    </h3>
                    <div
                        className={styles.topSectionHelpContainerChild2Web}
                        style={{
                            paddingTop: 12
                        }}
                    >
                        We are available Monday through Saturday from 9:30 AM to 6:30 PM.
                    </div>
                </div>
                <ButtonComponent
                    label={"Chat with us"}
                    type={ButtonTypeTokens.OUTLINE_LARGE}
                    width={ButtonWidthTypeTokens.CONTENT}
                    leftIcon={{
                        url: "/images/whatsapp.svg",
                        width: 20,
                        height: 20,
                    }}
                />
            </div>

        </div>
      </>
    );
  }, [_isMobile]);

  return _child;
}
