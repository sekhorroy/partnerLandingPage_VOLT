import styles from "./howitworks.module.css";
import { useRef, useState } from "react";
import HowItWorksCarasoul from "./howItWorksCaraousal";
import { redirectToVoltApp } from "@/configs/utils";
import {Icons} from "@/configs/imageRegistry";

const howItWorksData = [
  {
    title: "Check credit limit",
    subTitle:
      "We’ll evaluate your mutual fund portfolio & confirm credit limit",
    numberImage:  `${Icons.N1_1}`,
    itemImage: `${Icons.SIGN_UP_ICON}`,
  },
  {
    title: "Pledge your assets",
    subTitle: "Mark your mutual funds as a security with a trusted lender",
    numberImage: `${Icons.N1_2}`,
    itemImage: `${Icons.PLEDGE_ICON}`,
  },
  {
    title: "Instant KYC",
    subTitle: "Complete digital KYC process. No paperwork required!",
    numberImage: `${Icons.N1_3}`,
    itemImage: `${Icons.KYC_ICON}`,
  },
  {
    title: "Withdraw money",
    subTitle: "Withdraw & repay as per you requirement. No hidden charges.",
    numberImage: `${Icons.N1_4}`,
    itemImage: `${Icons.WITHDRAW_ICON}`,
  },
];

function HowItWorks() {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <div className={styles.HowItWorksContainer}>
      <div className={styles.HowItWorksContainerTitleContainer}>
        How It Works
      </div>
      <div className={styles.HowItWorksContainerSubTitleContainer}>
        <h2 className={styles.HowItWorksContainerSubTitleContainerWeb}>
          Open your credit line in 5 minutes
        </h2>
      </div>
      <div className={styles.HowItWorksContainerImageContainer} ref={scrl}>
        {howItWorksData &&
          howItWorksData.map((item, index) => {
            return (
              <div key={index} className={styles.HowItWorksContainerImageCard}>
                <div className={styles.HowItWorksContainerImageCardIconNumber1}>
                  <img src={item.numberImage} alt="" />
                </div>
                <div className={styles.HowItWorksContainerImageCardIcon}>
                  <img src={item.itemImage} alt="" />
                </div>
                <div className={styles.HowItWorksContainerImageCardTitle}>
                  {item.title}
                </div>
                <div className={styles.HowItWorksContainerImageCardSubtitle}>
                  {item.subTitle}
                </div>
              </div>
            );
          })}
      </div>
      <div className={styles.HowItWorksContainerImageContainerMob}>
        <HowItWorksCarasoul howItWorksData={howItWorksData} />
      </div>
      <button
        className={styles.HowItWorksContainerButtonContainer}
        onClick={() => redirectToVoltApp()}
      >
        Check available limit
      </button>
      <div
        className={styles.HowItWorksContainerButtonContainerMobileView}
      ></div>
    </div>
  );
}

export default HowItWorks;
