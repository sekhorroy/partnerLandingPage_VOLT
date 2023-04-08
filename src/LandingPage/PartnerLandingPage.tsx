import styles from "./PartnerLandingPage.module.css";
import {Header} from "@/components/header";
import { getScreenX } from "@/configs/utils";
import {useMemo, useRef} from "react";
import TopSection from "@/LandingPage/topSection/topSection";
import PartnerSection from "@/LandingPage/partnerSection/partnerSection";
import VoltBenefit from "@/LandingPage/voltBenefitSection/voltBenefit";
import HowItWorks from "@/LandingPage/howItWorksSection/HowItWorks";
import Footer from './footer/footer';
import Faq from './faqs/faqs';

import TestimoneySection from "@/LandingPage/testimoneySection/testimoneySections";

export default function PartnerLandingPage() {
  const width = getScreenX();
  console.log(width);

  const ref_Header = useRef();
  const ref_Partner = useRef();
  const ref_HIW = useRef();
  const ref_Benefits = useRef();
  const ref_Faq = useRef();
  const ref_ContactUs = useRef();

  const partnerChild = useMemo(() => {
    return (
      <div
        className={styles.body}
        style={{
          width: width,
        }}
      >
        <div>
          <Header />
        </div>

        <TopSection />
        <PartnerSection />
        <VoltBenefit />
        <HowItWorks />
        <TestimoneySection />
        <Faq />
        <Footer />
      </div>
    );
  }, [width]);

  return partnerChild;
}
