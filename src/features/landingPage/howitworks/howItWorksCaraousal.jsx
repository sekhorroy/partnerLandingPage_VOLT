import styles from "./howItWorksCarasoul.module.css";
import { useState } from "react";

function HowItWorksCarasoul({ howItWorksData }) {
  const [index, setIndex] = useState(0);

  const handleRightClick = () => {
    if (index < howItWorksData.length - 1) {
      setIndex(index + 1);
    }
  };
  const handleLeftClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className={styles.HowItWorksCarasoulContainer}>
      <div
        className={styles.HowItWorksCarasoulLeftButtonContainer}
        onClick={handleLeftClick}
      >
        <div className={styles.HowItWorksCarasoulButtonContainer}>
          <img
            src={index == 0 ? "./images/leftGrey1.svg" : "./images/leftBlack1.svg"}
            onClick={handleLeftClick}
          />
        </div>
      </div>
      <div className={styles.HowItWorksCarasoulSaysViewContainer}>
        {howItWorksData && (
          <div className={styles.HowItWorksContainerImageCard}>
            <div
              className={styles[`HowItWorksContainerImageCardIconNumber-${index}`]}
            >
              <img src={howItWorksData[index].numberImage} alt="" />
            </div>
            <div className={styles.HowItWorksContainerImageCardIcon}>
              <img src={howItWorksData[index].itemImage} alt="" />
            </div>
            <div className={styles.HowItWorksContainerImageCardTitle}>
              {howItWorksData[index].title}
            </div>
            <div className={styles.HowItWorksContainerImageCardSubtitle}>
              {howItWorksData[index].subTitle}
            </div>
          </div>
        )}
      </div>
      <div
        className={styles.HowItWorksCarasoulRightButtonContainer}
        onClick={handleRightClick}
      >
        <div className={styles.HowItWorksCarasoulButtonContainer}>
          <img
            src={
              index === howItWorksData.length - 1
                ? "./images/rightGrey1.svg"
                : "./images/rightBlack1.svg"
            }
            onClick={handleRightClick}
          />
        </div>
      </div>
    </div>
  );
}

export default HowItWorksCarasoul;
