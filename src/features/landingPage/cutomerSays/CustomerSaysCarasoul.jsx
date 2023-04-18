import './CustomerSaysCarasoul.css';
import './customerSays.css';
import rightArrowBlack from './assets/rightBlack.svg';
import leftArrowGrey from './assets/leftGrey.svg';
import rightArrowGrey from './assets/rightGrey.svg';
import leftArrowBlack from './assets/leftBlack.svg';
import {useState} from "react";

function CustomerSaysCarasoul({customerSaysData}) {
    const [index, setIndex] = useState(0);

    const handleRightClick = () => {
        if(index<customerSaysData.length-1){
            setIndex(index+1)
        }
    }
    const handleLeftClick = () => {
        if(index>0){
            setIndex(index-1)
        }
    }


    return(
        <div className="CustomerSaysCarasoulContainer">
            <div className="CustomerSaysCarasoulLeftButtonContainer">
                <div className="CustomerSaysCarasoultButtonContainer">
                    <img src={(index==0)?leftArrowGrey:leftArrowBlack} onClick={handleLeftClick}/>
                </div>
            </div>
            <div className="CustomerSaysViewContainer">
                { customerSaysData &&
                    <div className="CustomerSaysMainViewContainer">
                        <div className="CustomerSaysItem">
                            <div className="CustomerSaysItemImageContainer">
                                <img className="CustomerSaysItemImage" src={require(`${customerSaysData[index].image}`)} alt="customer_photo"/>
                            </div>
                            <div className="CustomerSaysItemTestimony">
                                { customerSaysData[index].testimony }
                            </div>
                            <div className="CustomerSaysItemDivider"></div>
                            <div className="CustomerSaysItemIdentity">
                                <div className="CustomerSaysItemIdentityName">
                                    { customerSaysData[index].name }
                                </div>
                                <div className="CustomerSaysItemIdentityPlace">
                                    { customerSaysData[index].place }
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="CustomerSaysViewCounterContainer">
                    
                </div>
            </div>
            <div className="CustomerSaysCarasoulRightButtonContainer">
                <div className="CustomerSaysCarasoultButtonContainer">
                    <img src={(index === customerSaysData.length-1)?rightArrowGrey:rightArrowBlack} onClick={handleRightClick}/>
                </div>
            </div>
        </div>
    );
}

export default CustomerSaysCarasoul;