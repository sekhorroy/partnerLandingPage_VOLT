import styles from './voltBenefits.module.css';
import {redirectToVoltApp} from "@/configs/utils";

function VoltBenefits() {
    return(
        <div className={styles.VoltBenfitsContainer}>
            <div className={styles.VoltBenfitsContainerLeftContainer}>
                <img className={styles.VoltBenfitsContainerImageWeb} src={"./images/personHoldingPhone1.png"} alt="man holding phone"/>
            </div>
            <div className={styles.VoltBenfitsContainerRightContainer}>
                <div className={styles.VoltBenfitsContainerRightContainerTitle}>
                    Volt Benefits
                </div>
                <h2 className={styles.VoltBenfitsContainerRightContainerSubTitle}>
                    Funds at your fingertips
                </h2>
                <div className={styles.VoltBenfitsContainerImageContainer}>
                    <img className={styles.VoltBenfitsContainerImage} src={"./images/personHoldingPhone1.png"} alt="man holding phone"/>
                </div>
                <div className={styles.VoltBenfitsContainerRightContainerStepItemsContainer}>
                    <div className={styles.VoltBenfitsContainerRightContainerStepItems}>
                        <div className={styles.VoltBenfitsContainerStepItemsLeft}>
                            <img className={styles.VoltBenfitsContainerStepItemsLeftIcon} src={'./images/percentageVector1.svg'} alt="mail Icon"/>
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
                            <img className={styles.VoltBenfitsContainerStepItemsLeftIcon} src={'./images/rupeeVector1.svg'} alt="mail Icon"/>
                        </div>
                        <div className={styles.VoltBenfitsContainerStepItemsRight}>
                            <h4 className={styles.VoltBenfitsContainerStepItemsTitle}>
                                Withdraw flexibly
                            </h4>
                            <div className={styles.VoltBenfitsContainerStepItemsSubTitle}>
                                Withdraw as per your need, and pay only as per usage. No hidden charges.
                            </div>
                        </div>
                    </div>

                    <div className={styles.VoltBenfitsContainerRightContainerStepItems}>
                        <div className={styles.VoltBenfitsContainerStepItemsLeft}>
                            <img className={styles.VoltBenfitsContainerStepItemsLeftIcon} src={'./images/clock1.svg'} alt="mail Icon"/>
                        </div>
                        <div className={styles.VoltBenfitsContainerStepItemsRight}>
                            <h4 className={styles.VoltBenfitsContainerStepItemsTitle}>
                                Repay easily
                            </h4>
                            <div className={styles.VoltBenfitsContainerStepItemsSubTitle}>
                                Make monthly interest only payments & repay principal as per convenience.
                            </div>
                        </div>
                    </div>

                    <div className={styles.VoltBenfitsContainerRightContainerStepItems}>
                        <div className={styles.VoltBenfitsContainerStepItemsLeft}>
                            <img className={styles.VoltBenfitsContainerStepItemsLeftIcon} src={'./images/secure1.svg'} alt="mail Icon"/>
                        </div>
                        <div className={styles.VoltBenfitsContainerStepItemsRight}>
                            <h4 className={styles.VoltBenfitsContainerStepItemsTitle}>
                                Secure & paperless
                            </h4>
                            <div className={styles.VoltBenfitsContainerStepItemsSubTitle}>
                                Hassle free usage from mobile phone. We ensure safety through secure integrations with partners.
                            </div>
                        </div>
                    </div>

                    <div className={styles.VoltBenfitsContainerRightContainerStepItems}>
                        <button className={styles.VoltBenfitsContainerRightContainerFeatureButton} onClick={()=>redirectToVoltApp()}>
                            Check available limit
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
 
export default VoltBenefits;