import { isMobile } from "@/configs/utils";
import styles from "./topSection.module.css";
import { ButtonComponent } from "@/components/button";
import {
  ButtonTypeTokens,
  ButtonWidthTypeTokens,
} from "@/components/button/type";
import Image from "next/image";
import {Divider} from "@/components/divider";

export default function TopSection() {
  const _isMobile: boolean = isMobile();
  return (
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
              paddingBottom: 24
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
            src="/images/topSectionImage1.svg"
            height={287}
            width={326}
            alt="top section image"
          />
        </div>
      </div>
      <div className={styles.topSectionHelpContainer1}>
        <h3 className={styles.topSectionHelpContainerChild1} style={{
          marginTop: 0,
          marginBottom: 0,
        }}>
          Get immediate answers from our experts
        </h3>
        <div
          className={styles.topSectionHelpContainerChild2}
          style={{
            paddingBottom: 32,
            paddingTop: 12
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
  );
}
