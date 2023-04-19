import styles from "./phoneNumberFooter.module.css";
import whatsAppIcon from "./assets/whatsAppIcon.svg";
import {redirectToVoltApp} from "@/configs/utils";
import {WhatsAppLink} from "@/configs/constants";

function PhoneNumberFooter() {
    
    const handleWhatAppClick = () => {
        window.open(WhatsAppLink.help, '_blank' )
    }

    return (
        <div className={styles.PhoneNumberFooterRoot}>
            <div className={styles.PhoneNumberFooter_Container}>
                <div className={styles.PhoneNumberFooterMobileInputContainer}>
                    <h2 className={styles.PhoneNumberFooterMobileTitle}>
                        Join Volt money and get <br></br>funds in under 5 minutes
                    </h2>
                    <div className={styles.PhoneNumberFooterMobileInputWebContainer}>
                        <button className={styles.PhoneNumberFooterMobileButtonContainer} onClick={()=>redirectToVoltApp()}>Check available limit</button>
                    </div>
                </div>
                <div className={styles.PhoneNumberFooterMobileInputImageContainer}>

                </div>
                {
                    /*
                       <button className="PhoneNumberFooterMobileWhatsAppContainerMobileView">
                            <div className="PhoneNumberFooterMobileWhatsAppIconContainer">
                                <img src={whatsAppIcon} alt="" />
                            </div>
                            <div className="PhoneNumberFooterMobileWhatsAppTextContainer">
                                Chat with us
                            </div>
                        </button>
                    */
                }

            </div>
            <div className={styles.PhoneNumberFooter_WebContainer}>
                <div className={styles.PhoneNumberFooter_WebContainer_Left}>
                    <h2 className={styles.PhoneNumberFooter_WebContainer_Title}>
                        Quickly resolve your queries
                    </h2>
                    <div className={styles.PhoneNumberFooter_WebContainer_SubTitle}>
                        We are available in working days from 9.30 AM to 6.30 PM.
                    </div>
                </div>
                <button className={styles.PhoneNumberFooterMobileWhatsAppContainerWeb} onClick={()=>handleWhatAppClick()}>
                        <div className={styles.PhoneNumberFooterMobileWhatsAppIconContainerWeb}>
                            <img src={'./images/Whatsapp.svg'} alt="whatapp image" />
                        </div>
                        <div className={styles.PhoneNumberFooterMobileWhatsAppTextContainerWeb}>
                            <span className={styles.PhoneNumberFooterWebViewSpan}>Chat with us</span>
                        </div>
                </button>
            </div>
        </div>
    );
}

export default PhoneNumberFooter