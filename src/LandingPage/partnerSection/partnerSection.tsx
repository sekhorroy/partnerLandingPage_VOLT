import { isMobile } from "@/configs/utils";
import styles from "./partnerSection.module.css";
import Image from "next/image";
import { useMemo } from "react";

export default function PartnerSection() {
  const _isMobile: boolean = isMobile();

  const widthWeb = 140;
  const widthMob = 88;

  const heightWeb = 64;
  const heightMob = 36;

  const _child = useMemo(() => {
    return (
      <div
        className={styles.partnerContainer}
        style={{
          paddingTop: _isMobile ? 48 : 80,
          paddingBottom: _isMobile ? 48 : 80,
        }}
      >
        <div
          className={_isMobile ? styles.partnerContainerTop1 : styles.partnerContainerTop1Web}
        >
          OUR PARTNERS
        </div>
        <div className={styles.partnerContainerBottom1} style={{
          paddingTop: 16
        }}>
          <Image
            src="/images/bajajPartner.svg"
            alt={"bajaj partner svg"}
            width={_isMobile ? widthMob : widthWeb}
            height={_isMobile ? heightMob : heightWeb}
          />
          <Image
            src="/images/CamsPartner.svg"
            alt={"bajaj partner svg"}
            width={_isMobile ? widthMob : widthWeb}
            height={_isMobile ? heightMob : heightWeb}
          />
          <Image
            src="/images/KfintechPartner.svg"
            alt={"bajaj partner svg"}
            width={_isMobile ? widthMob : widthWeb}
            height={_isMobile ? heightMob : heightWeb}
          />
          <Image
            src="/images/NsdlPartner.svg"
            alt={"bajaj partner svg"}
            width={_isMobile ? widthMob : widthWeb}
            height={_isMobile ? heightMob : heightWeb}
          />
          <Image
            src="/images/DigilockerPartner.svg"
            alt={"bajaj partner svg"}
            width={_isMobile ? widthMob : widthWeb}
            height={_isMobile ? heightMob : heightWeb}
          />
          <Image
            src="/images/CersaiPartner.svg"
            alt={"bajaj partner svg"}
            width={_isMobile ? widthMob : widthWeb}
            height={_isMobile ? heightMob : heightWeb}
          />
        </div>
      </div>
    )
  }, [_isMobile]);

  return _child;
}
