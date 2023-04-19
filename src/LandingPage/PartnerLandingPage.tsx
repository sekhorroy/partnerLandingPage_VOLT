import styles from "./PartnerLandingPage.module.css";
import { Header } from "@/components/header";
import { getScreenX } from "@/configs/utils";
import {createRef, useEffect, useMemo, useRef, useState} from "react";
import TopSection from "@/LandingPage/topSection/topSection";
import PartnerSection from "@/LandingPage/partnerSection/partnerSection";
import VoltBenefit from "@/LandingPage/voltBenefitSection/voltBenefit";
import HowItWorks from "@/LandingPage/howItWorksSection/HowItWorks";
import Footer from "./footer/footer";
import Faq, {FaqType} from "./faqs/faqs";


import TestimoneySection from "@/LandingPage/testimoneySection/testimoneySections";
import {useRouter} from "next/router";
import NewsLetterSection from "@/LandingPage/newsLetterSection/newsLetterSection";

export default function PartnerLandingPage() {

  const partnerChild = useMemo(() => {
    return (
      <div
        className={styles.body}
        style={{
          width: '100%'
        }}
      >
        <Header />
        <TopSection />
        <PartnerSection />
        <VoltBenefit/>
        <HowItWorks />
        <TestimoneySection />
        <div id='faq' style={{
          width: '100%'
        }}>
          <Faq type={FaqType.PARTNER}/>
        </div>
        <NewsLetterSection />
        <Footer />
      </div>
    );
  }, []);

  return partnerChild;
}
