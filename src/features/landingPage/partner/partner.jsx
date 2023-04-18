import './partner.css';
import bajajIcon from "./assets/bajajFin.svg";
import CamsIcon from "./assets/cams.svg";
import CDSLIcon from "./assets/CDSL.svg";
import miraeAssets from "./assets/miraeAssets.svg";
import NSDL from "./assets/nsdl.svg";
import Digilocker from './assets/digilocker.svg';
import KFintechIcon from './assets/kfintech.svg';
import Cersai from './assets/cersai.svg';
import {Links, privacyLink} from "../../configs/links";

function Partner () {
    return  (
        <div className="PartnerContainer">
            <div className="OurLendingPartnerContainerWeb">
                <div className="OurLendingPartnerContainerWebTopContainer">
                        OUR PARTNERS
                </div>
                <div className="OurLendingPartnerContainerWebBottomContainer">
                    <a  style={{textDecoration: "none"}} href={Links.BAJAJ}  target="_blank">
                        <div className="OurLendingPartnerContainerBodylogoContainer">
                            <img className="OurLendingPartnerContainerBodylogoContainerImage" src={bajajIcon} alt="bajaj"/>
                        </div>
                    </a>
                    <a  style={{textDecoration: "none"}} href={Links.CAMS}  target="_blank">
                        <div  className="OurLendingPartnerContainerBodylogoContainer">
                            <img className="OurLendingPartnerContainerBodylogoContainerImage" src={CamsIcon} alt="cams"/>
                        </div>
                    </a>
                    <a  style={{textDecoration: "none"}} href={Links.KFIN}  target="_blank">
                        <div  className="OurLendingPartnerContainerBodylogoContainer">
                            <img className="OurLendingPartnerContainerBodylogoContainerImage" src={KFintechIcon} alt="kfintech"/>
                        </div>
                    </a>
                    <a  style={{textDecoration: "none"}} href={Links.NSDL}  target="_blank">
                        <div  className="OurLendingPartnerContainerBodylogoContainer">
                            <img className="OurLendingPartnerContainerBodylogoContainerImage" src={NSDL} alt="nsdl"/>
                        </div>
                    </a>
                    <a  style={{textDecoration: "none"}} href={Links.DIGILOCKER}  target="_blank">
                        <div  className="OurLendingPartnerContainerBodylogoContainer">
                            <img className="OurLendingPartnerContainerBodylogoContainerImage" src={Digilocker} alt="digilocker"/>
                        </div>
                    </a>
                    <a  style={{textDecoration: "none"}} href={Links.CERSAI}  target="_blank">
                        <div  className="OurLendingPartnerContainerBodylogoContainer">
                            <img className="OurLendingPartnerContainerBodylogoContainerImage" src={Cersai} alt="cersai"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Partner