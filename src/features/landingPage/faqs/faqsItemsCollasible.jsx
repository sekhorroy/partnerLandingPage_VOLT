import "./faqs.css"
import React, { useState } from "react";
import DownArrowVector from "./assets/chevron-down.svg";
import UpArrowVector from "./assets/chevron-up1.svg";

const FaqCollapsible = (props) => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className="FaqCollapsibleContainer">
        <div className="Faqs_ContainerQuestionItem" onClick={toggle}>
            <h4 className="Faqs_ContainerQuestionItemQuestion">
                {props.question}
            </h4>
            <div className="Faqs_ContainerQuestionArrowVector">
                {
                    !open?<img src={DownArrowVector} alt="down vector"/>:<img src={UpArrowVector} alt="up vector"/>
                }
            </div>

        </div>
        {open && (
            <div className="Faqs_ContainerToggleContainer">
                <div className="Faqs_ContainerToggleContainerContent">
                    {props.answer()}
                </div>
            </div>
        )}
    </div>
    
  );
};
export default FaqCollapsible;