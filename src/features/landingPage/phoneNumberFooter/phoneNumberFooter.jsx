import "./phoneNumberFooter.css"
import whatsAppIcon from "./assets/whatsAppIcon.svg";
import {BASE_URL, REGEX_PATTERN} from "../../configs/config";
import {WhatsAppLink} from "../../configs/links";
import {getGoogleAnalyticsUrl} from "../../configs/utils";
import getGoogleAnalyticsParamsFromQuery from "../../hooks/GetGoogleAnalyticsParamsFromQuery";

function PhoneNumberFooter() {
    const { utm_source, utm_medium, utm_campaign, utm_id, utm_content, setOtherParamsfromQuery }  = getGoogleAnalyticsParamsFromQuery();
    const handleClick = () => {
        window.open(`${BASE_URL}?${getGoogleAnalyticsUrl(utm_source, utm_medium, utm_campaign, utm_id, utm_content, setOtherParamsfromQuery())}`, "_blank");
    }
    
    const handleWhatAppClick = () => {
        window.open(WhatsAppLink.help, '_blank' )
    }

    return (
        <div className="PhoneNumberFooterRoot">
            <div className="PhoneNumberFooter_Container">
                <div className="PhoneNumberFooterMobileInputContainer">
                    <h2 className="PhoneNumberFooterMobileTitle">
                        Join Volt money and get <br></br>funds in under 5 minutes
                    </h2>
                    <div className="PhoneNumberFooterMobileInputWebContainer">
                        <button className="PhoneNumberFooterMobileButtonContainer" onClick={()=>handleClick()}>Check available limit</button>
                    </div>
                </div>
                <div className="PhoneNumberFooterMobileInputImageContainer">

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
            <div className="PhoneNumberFooter_WebContainer">
                <div className="PhoneNumberFooter_WebContainer_Left">
                    <h2 className="PhoneNumberFooter_WebContainer_Title">
                        Quickly resolve your queries
                    </h2>
                    <div className="PhoneNumberFooter_WebContainer_SubTitle">
                        We are available in working days from 9.30 AM to 6.30 PM.
                    </div>
                </div>
                <button className="PhoneNumberFooterMobileWhatsAppContainerWeb" onClick={()=>handleWhatAppClick()}>
                        <div className="PhoneNumberFooterMobileWhatsAppIconContainerWeb">
                            <img src={whatsAppIcon} alt="whatapp image" />
                        </div>
                        <div className="PhoneNumberFooterMobileWhatsAppTextContainerWeb">
                            <span className="PhoneNumberFooterWebViewSpan">Chat with us</span>
                        </div>
                </button>
            </div>
        </div>
    );
}

export default PhoneNumberFooter