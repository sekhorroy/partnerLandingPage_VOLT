import styles from "./PartnerLandingPage.module.css";
import { Header } from "@/components/header";
import { getScreenX } from "@/configs/utils";
import {createRef, useEffect, useMemo, useRef, useState} from "react";
import TopSection from "@/LandingPage/topSection/topSection";
import PartnerSection from "@/LandingPage/partnerSection/partnerSection";
import VoltBenefit from "@/LandingPage/voltBenefitSection/voltBenefit";
import HowItWorks from "@/LandingPage/howItWorksSection/HowItWorks";
import Footer from "./footer/footer";
import Faq from "./faqs/faqs";


import TestimoneySection from "@/LandingPage/testimoneySection/testimoneySections";

export default function PartnerLandingPage() {
  const ref_Header = createRef();
  const ref_Partner = createRef();
  const ref_HIW = createRef();
  const ref_Benefits = createRef();
  const ref_Faq = createRef();
  const ref_ContactUs = createRef();


  const partnerChild = useMemo(() => {
    return (
      <div
        className={styles.body}
        style={{
          width: '100%'
        }}
        // style={{
        //   width: width
        // }}
      >
        <Header />
        <TopSection />
        <PartnerSection />
        <VoltBenefit/>
        <HowItWorks />
        {/*<TestimoneySection />*/}
        <Faq />
        <Footer />
      </div>
    );
  }, []);

  return partnerChild;
}
