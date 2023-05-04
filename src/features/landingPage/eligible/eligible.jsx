import styles from "./eligible.module.css";
import checkIcon from "./assets/blueCheck1.svg";
import { Icons } from "@/configs/imageRegistry";
import Image from "next/image";

function Eligible() {
  return (
    <div className={styles.EligibleContainer}>
      <div className={styles.EligibleLeftContainer}>
        <div className={styles.EligibleLeftItemsContainer}>
          <div className={styles.EligibleContainer_Title}>Am I eligible?</div>
          <h2 className={styles.EligibleContainer_SubTitle}>
            100% eligibility! Even for low CIBIL score
          </h2>
          <div className={styles.EligibleContainer_SubTitle_List_Container}>
            <div className={styles.EligibleContainer_SubTitle_List_Item}>
              <Image
                className={styles.EligibleContainer_SubTitle_List_Item_Image}
                src={Icons.BLUE_TICK}
                alt="volt_money_checkIcon"
                width={42}
                height={24}
              />
              <b1>No minimum credit score requirement (CIBIL score)</b1>
            </div>
            <div className={styles.EligibleContainer_SubTitle_List_Item}>
              <Image
                className={styles.EligibleContainer_SubTitle_List_Item_Image}
                src={Icons.BLUE_TICK}
                alt="volt_money_checkIcon"
                width={42}
                height={24}
              />
              <b1>No restriction on employment status or profession</b1>
            </div>
            <div className={styles.EligibleContainer_SubTitle_List_Item}>
              <Image
                className={styles.EligibleContainer_SubTitle_List_Item_Image}
                src={Icons.BLUE_TICK}
                alt="volt_money_checkIcon"
                width={42}
                height={24}
              />
              <b1>No minimum income requirement or bank statement</b1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.EligibleRightContainer}>
        <div className={styles.EligibleImageContainerWeb}>
          <Image
            src={Icons.ELIGIBLE_1_WEB}
            alt="volt_money_low_cibil_image"
            width={544}
            height={340}
          />
        </div>
        <div className={styles.EligibleImageContainerMob}>
          <Image
            src={Icons.ELIGIBLE_1_MOB}
            alt="volt_money_low_cibil_image"
            width={328}
            height={340}
          />
        </div>
      </div>
    </div>
  );
}

export default Eligible;
