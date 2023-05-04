import { handleOurPartnerLinks, isMobile } from "@/configs/utils";
import styles from "./partnerSection.module.css";
import Image from "next/image";
import { useMemo } from "react";
import { Links } from "@/configs/constants";
import { Icons } from "@/configs/imageRegistry";

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
          className={
            _isMobile
              ? styles.partnerContainerTop1
              : styles.partnerContainerTop1Web
          }
        >
          OUR PARTNERS
        </div>
        <div
          className={styles.partnerContainerBottom1}
          style={{
            paddingTop: 16,
          }}
        >
          <div onClick={() => handleOurPartnerLinks(Links.BAJAJ)}>
            <Image
              src={Icons.BAJAJ_PARTNER}
              alt={"Volt money partner"}
              width={_isMobile ? widthMob : widthWeb}
              height={_isMobile ? heightMob : heightWeb}
            />
          </div>
          <div onClick={() => handleOurPartnerLinks(Links.CAMS)}>
            <Image
              src={Icons.CERSAI_PARTNER}
              alt={"Volt money partner"}
              width={_isMobile ? widthMob : widthWeb}
              height={_isMobile ? heightMob : heightWeb}
            />
          </div>
          <div onClick={() => handleOurPartnerLinks(Links.KFIN)}>
            <Image
              src={Icons.KFINTECH_PARTNER}
              alt={"Volt money partner"}
              width={_isMobile ? widthMob : widthWeb}
              height={_isMobile ? heightMob : heightWeb}
            />
          </div>
          <div onClick={() => handleOurPartnerLinks(Links.NSDL)}>
            <Image
              src={Icons.NSDL_PARTNER}
              alt={"Volt money partner"}
              width={_isMobile ? widthMob : widthWeb}
              height={_isMobile ? heightMob : heightWeb}
            />
          </div>
          <div onClick={() => handleOurPartnerLinks(Links.DIGILOCKER)}>
            <Image
              src={Icons.DIGILOCKER_PARTNER}
              alt={"Volt money partner"}
              width={_isMobile ? widthMob : widthWeb}
              height={_isMobile ? heightMob : heightWeb}
            />
          </div>
          <div onClick={() => handleOurPartnerLinks(Links.CERSAI)}>
            <Image
              src={Icons.CERSAI_PARTNER}
              alt={"Volt money partner"}
              width={_isMobile ? widthMob : widthWeb}
              height={_isMobile ? heightMob : heightWeb}
            />
          </div>
        </div>
      </div>
    );
  }, [_isMobile]);

  return _child;
}
