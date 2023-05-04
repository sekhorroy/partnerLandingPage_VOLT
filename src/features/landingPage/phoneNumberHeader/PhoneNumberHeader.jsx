import styles from "./PhoneNumberHeader.module.css";
import {isMobile, redirectToVoltApp} from "@/configs/utils";
import {Icons} from "@/configs/imageRegistry";
import Image from "next/image";

function PhoneNumberHeader() {
    const _isMobile = isMobile();
  return (
    <div className={styles.PhoneNumberHeader}>
      <div className={styles.PhoneNumberHeader_Left_Container}>
        <h1 className={styles.titleSection}>
          Instant credit line against mutual fund savings
          <br></br>
          <span className={styles.titleSectionSubTitle}>
            Easy, fast & secure
          </span>
        </h1>
        <div
          className={styles.phoneNumberContainerAndTermsAndConditionContainer}
        >
          <div className={styles.phoneNumberContainer} style={{
            paddingTop: 24
          }}>
            <button
              className={styles.phoneNumberContainerContinueButton}
              onClick={() => redirectToVoltApp()}
            >
              Check available limit
            </button>
          </div>
        </div>
      </div>
      <div className={styles.PhoneNumberHeader_Right_Container}>
        <div className={styles.ImageContainer}>
          <div
            className={
              styles.PhoneNumberHeader_Right_Container_Man_Holding_Phone
            }
          >
              {
                  _isMobile ? (
                      <>
                          <Image
                              className={
                                  styles.PhoneNumberHeader_Right_Container_Man_Holding_Phone_Image_Mobile
                              }
                              priority={true}
                              src={Icons.INVESTOR_HERO_IMAGE1_MOB}
                              alt="volt_money_hero_image_1"
                              style={{
                                position: 'relative',
                                top: 20
                              }}
                          />

                      </>
                  ) : (
                      <>
                          <Image
                              className={
                                  styles.PhoneNumberHeader_Right_Container_Man_Holding_Phone_Image_Web
                              }
                              priority={true}
                              src={Icons.INVESTOR_HERO_IMAGE1_WEB}
                              alt="volt_money_hero_image_2"
                              style={{
                                position: 'relative',
                                top: 20
                              }}
                          />
                      </>
                  )
              }
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneNumberHeader;
