import "./eligible.css";
import checkIcon from './assets/blueCheck.svg'

function Eligible() {
    return (
        <div className="EligibleContainer">
            <div className="EligibleLeftContainer">
                <div className="EligibleLeftItemsContainer">
                    <div className="EligibleContainer_Title">
                        Am I eligible?
                    </div>
                    <h2 className="EligibleContainer_SubTitle">
                        100% eligibility! Even for low CIBIL score
                    </h2>
                    <div className="EligibleContainer_SubTitle_List_Container">
                        <div className="EligibleContainer_SubTitle_List_Item">
                            <img className="EligibleContainer_SubTitle_List_Item_Image" src={checkIcon} alt="checkIcon"/>
                            <b1>No minimum credit score requirement (CIBIL score)</b1>
                        </div>
                        <div className="EligibleContainer_SubTitle_List_Item">
                            <img className="EligibleContainer_SubTitle_List_Item_Image" src={checkIcon} alt="checkIcon"/>
                            <b1>No restriction on employment status or profession</b1>
                        </div>
                        <div className="EligibleContainer_SubTitle_List_Item">
                            <img className="EligibleContainer_SubTitle_List_Item_Image" src={checkIcon} alt="checkIcon"/>
                            <b1>No minimum income requirement or bank statement</b1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="EligibleRightContainer">
                <div className="EligibleImageContainerWeb">
                    <img src={require("./assets/low_cibil_score_web.png")} alt="low cibil image"/>
                </div>
                <div className="EligibleImageContainerMob">
                    <img src={require("./assets/low_cibil_score.png")} alt="low_cibil_image"/>
                </div>
            </div>
        </div>
    )
}   

export default Eligible;
