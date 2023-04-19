import styles from "./eligible.module.css";
import checkIcon from './assets/blueCheck1.svg'

function Eligible() {
    return (
        <div className={styles.EligibleContainer}>
            <div className={styles.EligibleLeftContainer}>
                <div className={styles.EligibleLeftItemsContainer}>
                    <div className={styles.EligibleContainer_Title}>
                        Am I eligible?
                    </div>
                    <h2 className={styles.EligibleContainer_SubTitle}>
                        100% eligibility! Even for low CIBIL score
                    </h2>
                    <div className={styles.EligibleContainer_SubTitle_List_Container}>
                        <div className={styles.EligibleContainer_SubTitle_List_Item}>
                            <img className={styles.EligibleContainer_SubTitle_List_Item_Image} src={"./images/blueCheck1.svg"} alt="checkIcon"/>
                            <b1>No minimum credit score requirement (CIBIL score)</b1>
                        </div>
                        <div className={styles.EligibleContainer_SubTitle_List_Item}>
                            <img className={styles.EligibleContainer_SubTitle_List_Item_Image} src={"./images/blueCheck1.svg"} alt="checkIcon"/>
                            <b1>No restriction on employment status or profession</b1>
                        </div>
                        <div className={styles.EligibleContainer_SubTitle_List_Item}>
                            <img className={styles.EligibleContainer_SubTitle_List_Item_Image} src={"./images/blueCheck1.svg"} alt="checkIcon"/>
                            <b1>No minimum income requirement or bank statement</b1>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.EligibleRightContainer}>
                <div className={styles.EligibleImageContainerWeb}>
                    <img src={"./images/low_cibil_score_web1.png"} alt="low cibil image"/>
                </div>
                <div className={styles.EligibleImageContainerMob}>
                    <img src={"./images/low_cibil_score1.png"} alt="low_cibil_image"/>
                </div>
            </div>
        </div>
    )
}   

export default Eligible;
