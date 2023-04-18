import styles from "./PhoneNumberHeader.module.css";
import {isMobile, redirectToVoltApp} from "@/configs/utils";

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
          <div className={styles.phoneNumberContainer}>
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
                          <img
                              className={
                                  styles.PhoneNumberHeader_Right_Container_Man_Holding_Phone_Image_Mobile
                              }
                              src={"./images/manHoldingPhoneMobile.png"}
                              alt="man holding phone image"
                          />
                      </>
                  ) : (
                      <>
                          <img
                              className={
                                  styles.PhoneNumberHeader_Right_Container_Man_Holding_Phone_Image_Web
                              }
                              src={"./images/manHoldingPhoneWeb.png"}
                              alt="man holding phone image"
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
