import './voltBenefits.css';
import MailIcon from './assets/MailIcon.svg';
import clockIcon from './assets/clock.svg';
import secureIcon from './assets/secure.svg';
import rupeeIcon from './assets/rupeeVector.svg';
import percentageIcon from './assets/percentageVector.svg';
import {BASE_URL} from "../../configs/config";
import getGoogleAnalyticsParamsFromQuery from "../../hooks/GetGoogleAnalyticsParamsFromQuery";
import {getGoogleAnalyticsUrl} from "../../configs/utils";


function VoltBenefits() {
    const { utm_source, utm_medium, utm_campaign, utm_id, utm_content, setOtherParamsfromQuery }  = getGoogleAnalyticsParamsFromQuery();
    const handleSubmit = () => {
        window.open(`${BASE_URL}?${getGoogleAnalyticsUrl(utm_source, utm_medium, utm_campaign, utm_id, utm_content, setOtherParamsfromQuery())}`, "_blank");
    }

    return(
        <div className="VoltBenfitsContainer">
            <div className="VoltBenfitsContainerLeftContainer">
                <img className="VoltBenfitsContainerImageWeb" src={require("./assets/personHoldingPhone.png")} alt="man holding phone"/>
            </div>
            <div className="VoltBenfitsContainerRightContainer">
                <div className="VoltBenfitsContainerRightContainerTitle">
                    Volt Benefits
                </div>
                <h2 className="VoltBenfitsContainerRightContainerSubTitle">
                    Funds at your fingertips
                </h2>
                <div className="VoltBenfitsContainerImageContainer">
                    <img className="VoltBenfitsContainerImage" src={require("./assets/personHoldingPhone.png")} alt="man holding phone"/>
                </div>
                <div className="VoltBenfitsContainerRightContainerStepItemsContainer">
                    <div className="VoltBenfitsContainerRightContainerStepItems">
                        <div className="VoltBenfitsContainerStepItemsLeft">
                            <img className="VoltBenfitsContainerStepItemsLeftIcon" src={percentageIcon} alt="mail Icon"/>
                        </div>
                        <div className="VoltBenfitsContainerStepItemsRight">
                            <h4 className="VoltBenfitsContainerStepItemsTitle">
                                Interest rates starting at 9%
                            </h4>
                            <div className="VoltBenfitsContainerStepItemsSubTitle">
                                Borrow from trusted banks or NBFCs at low interest rates.
                            </div>
                           
                        </div>
                    </div>

                    <div className="VoltBenfitsContainerRightContainerStepItems">
                        <div className="VoltBenfitsContainerStepItemsLeft">
                            <img className="VoltBenfitsContainerStepItemsLeftIcon" src={rupeeIcon} alt="mail Icon"/>
                        </div>
                        <div className="VoltBenfitsContainerStepItemsRight">
                            <h4 className="VoltBenfitsContainerStepItemsTitle">
                                Withdraw flexibly
                            </h4>
                            <div className="VoltBenfitsContainerStepItemsSubTitle">
                                Withdraw as per your need, and pay only as per usage. No hidden charges.
                            </div>
                        </div>
                    </div>

                    <div className="VoltBenfitsContainerRightContainerStepItems">
                        <div className="VoltBenfitsContainerStepItemsLeft">
                            <img className="VoltBenfitsContainerStepItemsLeftIcon" src={clockIcon} alt="mail Icon"/>
                        </div>
                        <div className="VoltBenfitsContainerStepItemsRight">
                            <h4 className="VoltBenfitsContainerStepItemsTitle">
                                Repay easily
                            </h4>
                            <div className="VoltBenfitsContainerStepItemsSubTitle">
                                Make monthly interest only payments & repay principal as per convenience.
                            </div>
                        </div>
                    </div>

                    <div className="VoltBenfitsContainerRightContainerStepItems">
                        <div className="VoltBenfitsContainerStepItemsLeft">
                            <img className="VoltBenfitsContainerStepItemsLeftIcon" src={secureIcon} alt="mail Icon"/>
                        </div>
                        <div className="VoltBenfitsContainerStepItemsRight">
                            <div className="VoltBenfitsContainerStepItemsTitle">
                                Secure & paperless
                            </div>
                            <div className="VoltBenfitsContainerStepItemsSubTitle">
                                Hassle free usage from mobile phone. We ensure safety through secure integrations with partners.
                            </div>
                        </div>
                    </div>
                    <div className="VoltBenfitsContainerRightContainerStepItems">
                        <button className="VoltBenfitsContainerRightContainerFeatureButton" onClick={()=>handleSubmit()}>
                            Check available limit
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
 
export default VoltBenefits;