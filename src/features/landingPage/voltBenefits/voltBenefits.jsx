import styles from "./voltBenefits.module.css";
import {isMobile, redirectToVoltApp} from "@/configs/utils";
import Image from "next/image";
import { Icons } from "@/configs/imageRegistry";

function VoltBenefits() {
  const _isMobile = isMobile();
  return (
    <div className={styles.VoltBenfitsContainer}>
      <div className={styles.VoltBenfitsContainerLeftContainer}>
        <Image
          className={styles.VoltBenfitsContainerImageWeb}
          src={Icons.VOLT_BENEFIT_IMAGE1}
          alt="man holding phone"
          width={490}
          height={600}
        />
      </div>
      <div className={styles.VoltBenfitsContainerRightContainer}>
        <div className={styles.VoltBenfitsContainerRightContainerTitle}>
          Volt Benefits
        </div>
        <h2 className={styles.VoltBenfitsContainerRightContainerSubTitle}>
          Funds at your fingertips
        </h2>
        <div className={styles.VoltBenfitsContainerImageContainer}>
          <Image
            className={styles.VoltBenfitsContainerImage}
            src={Icons.VOLT_BENEFIT_IMAGE1}
            alt="man holding phone"
            width={328}
            height={362}
          />
        </div>
        <div
          className={
            styles.VoltBenfitsContainerRightContainerStepItemsContainer
          }
        >
          <div className={styles.VoltBenfitsContainerRightContainerStepItems}>
            <div className={styles.VoltBenfitsContainerStepItemsLeft}>
              <Image
                className={styles.VoltBenfitsContainerStepItemsLeftIcon}
                src={Icons.PERCENTAGE_1}
                alt="mail Icon"
                width={_isMobile ? 16 : 30}
                height={_isMobile ? 16: 30}
              />
            </div>
            <div className={styles.VoltBenfitsContainerStepItemsRight}>
              <h4 className={styles.VoltBenfitsContainerStepItemsTitle}>
                Interest rates starting at 9.95% p.a
              </h4>
              <div className={styles.VoltBenfitsContainerStepItemsSubTitle}>
                Borrow from trusted banks or NBFCs at low interest rates.
              </div>
            </div>
          </div>

          <div className={styles.VoltBenfitsContainerRightContainerStepItems}>
            <div className={styles.VoltBenfitsContainerStepItemsLeft}>
              <Image
                className={styles.VoltBenfitsContainerStepItemsLeftIcon}
                src={Icons.RUPEE_1}
                alt="mail Icon"
                width={_isMobile ? 16 : 30}
                height={_isMobile ? 16: 30}
              />
            </div>
            <div className={styles.VoltBenfitsContainerStepItemsRight}>
              <h4 className={styles.VoltBenfitsContainerStepItemsTitle}>
                Withdraw flexibly
              </h4>
              <div className={styles.VoltBenfitsContainerStepItemsSubTitle}>
                Withdraw as per your need, and pay only as per usage. No hidden
                charges.
              </div>
            </div>
          </div>

          <div className={styles.VoltBenfitsContainerRightContainerStepItems}>
            <div className={styles.VoltBenfitsContainerStepItemsLeft}>
              <Image
                className={styles.VoltBenfitsContainerStepItemsLeftIcon}
                src={Icons.CLOCK_1}
                alt="mail Icon"
                width={_isMobile ? 16 : 30}
                height={_isMobile ? 16: 30}
              />
            </div>
            <div className={styles.VoltBenfitsContainerStepItemsRight}>
              <h4 className={styles.VoltBenfitsContainerStepItemsTitle}>
                Repay easily
              </h4>
              <div className={styles.VoltBenfitsContainerStepItemsSubTitle}>
                Make monthly interest only payments & repay principal as per
                convenience.
              </div>
            </div>
          </div>

          <div className={styles.VoltBenfitsContainerRightContainerStepItems}>
            <div className={styles.VoltBenfitsContainerStepItemsLeft}>
              <Image
                className={styles.VoltBenfitsContainerStepItemsLeftIcon}
                src={Icons.SECURE_1}
                alt="mail Icon"
                width={_isMobile ? 16 : 30}
                height={_isMobile ? 16: 30}
              />
            </div>
            <div className={styles.VoltBenfitsContainerStepItemsRight}>
              <h4 className={styles.VoltBenfitsContainerStepItemsTitle}>
                Secure & paperless
              </h4>
              <div className={styles.VoltBenfitsContainerStepItemsSubTitle}>
                Hassle free usage from mobile phone. We ensure safety through
                secure integrations with partners.
              </div>
            </div>
          </div>

          <div className={styles.VoltBenfitsContainerRightContainerStepItems}>
            <button
              className={styles.VoltBenfitsContainerRightContainerFeatureButton}
              onClick={() => redirectToVoltApp()}
            >
              Check available limit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoltBenefits;
