import styles from "./PartnerLandingPage.module.css";
import { Header } from "@/components/header";
import { getScreenX } from "@/configs/utils";
import {createRef, useEffect, useMemo, useRef} from "react";
import TopSection from "@/LandingPage/topSection/topSection";
import PartnerSection from "@/LandingPage/partnerSection/partnerSection";
import VoltBenefit from "@/LandingPage/voltBenefitSection/voltBenefit";
import HowItWorks from "@/LandingPage/howItWorksSection/HowItWorks";
import Footer from "./footer/footer";
import Faq from "./faqs/faqs";

import TestimoneySection from "@/LandingPage/testimoneySection/testimoneySections";

export default function PartnerLandingPage() {
  const width = getScreenX();
  console.log(width);

  const ref_Header = createRef();
  const ref_Partner = createRef();
  const ref_HIW = createRef();
  const ref_Benefits = createRef();
  const ref_Faq = createRef();
  const ref_ContactUs = createRef();

  // useEffect(()=>{
  //   if (window &&
  //       window.location &&
  //       window.location.hash &&
  //       window.location.hash !== '') {
  //     if(window.location.hash === '#faq') {
  //       //@ts-ignore
  //       ref_Faq.current.scrollIntoView();
  //     } else if(window.location.hash === '#how_it_works') {
  //       //@ts-ignore
  //       ref_HIW.current.scrollIntoView();
  //     } else if(window.location.hash === '#volt_benefits') {
  //       //@ts-ignore
  //       ref_Benefits.current.scrollIntoView();
  //     } else if(window.location.hash === '#footer') {
  //       //@ts-ignore
  //       ref_ContactUs.current.scrollIntoView();
  //     }
  //   }
  // }, []);

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
        <VoltBenefit ref={ref_Benefits as React.RefObject<HTMLDivElement>}/>
        <HowItWorks />
        <TestimoneySection />
        <Faq />
        <Footer />
      </div>
    );
  }, [width]);

  return partnerChild;
}
