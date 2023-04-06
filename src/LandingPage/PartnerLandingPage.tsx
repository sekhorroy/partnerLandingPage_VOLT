import styles from "./PartnerLandingPage.module.css";
import Header from "@/components/header";
import { getScreenX } from "@/configs/utils";
import { useMemo } from "react";
import TopSection from "@/LandingPage/topSection/topSection";
import PartnerSection from "@/LandingPage/partnerSection/partnerSection";
import VoltBenefit from "@/LandingPage/voltBenefitSection/voltBenefit";
import HowItWorks from "@/LandingPage/howItWorksSection/HowItWorks";
import Footer from './footer/footer';
import TestimoneySection from "@/LandingPage/testimoneySection/testimoneySections";

export default function PartnerLandingPage() {
  const width = getScreenX();
  console.log(width);

  const partnerChild = useMemo(() => {
    return (
      <div
        className={styles.body}
        style={{
          width: width,
        }}
      >
        <Header />
        <TopSection />
        <PartnerSection />
        <VoltBenefit />
        <HowItWorks />
        <TestimoneySection />
        {/*<Footer />*/}
      </div>
    );
  }, [width]);

  return partnerChild;
}
