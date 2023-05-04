import styles from "./LandingPage.module.css";
import * as React from "react";
import { useEffect, useRef } from "react";
import { WhatsAppLink } from "@/configs/constants";
import PhoneNumberHeader from "@/features/landingPage/phoneNumberHeader/PhoneNumberHeader";
import Partner from "@/LandingPage/partnerSection/partnerSection";
import Howitworks from "@/features/landingPage/howitworks/howitworks";
import VoltBenefits from "@/features/landingPage/voltBenefits/voltBenefits";
import Eligible from "@/features/landingPage/eligible/eligible";
import Faqs from "@/LandingPage/faqs/faqs";
import PhoneNumberFooter from "@/features/landingPage/phoneNumberFooter/phoneNumberFooter";
import Footer from "@/features/landingPage/footer/footer";
import { AppSection } from "@/features/landingPage/AppSection/appSection";
import { handleWhatAppClickInvestor, isMobile } from "@/configs/utils";
import { InvestorHeader } from "@/components/header/investorHeader";
import Image from "next/image";
import { Icons } from "@/configs/imageRegistry";

function VoltLandingPage() {
  const ref_Header = useRef();
  const ref_Partner = useRef();
  const ref_HIW = useRef();
  const ref_Benefits = useRef();
  const ref_Faq = useRef();
  const ref_ContactUs = useRef();

  const _isMobile = isMobile();

  const handleWhatAppClick = () => {
    window.open(WhatsAppLink.help, "_blank");
  };

  useEffect(() => {
    if (
      window &&
      window.location &&
      window.location.hash &&
      window.location.hash !== ""
    ) {
      if (window.location.hash === "#faq") {
        ref_Faq.current.scrollIntoView();
      } else if (window.location.hash === "#how_it_works") {
        ref_HIW.current.scrollIntoView();
      } else if (window.location.hash === "#volt_benefits") {
        ref_Benefits.current.scrollIntoView();
      } else if (window.location.hash === "#footer") {
        ref_ContactUs.current.scrollIntoView();
      }
    }
  }, []);

  return (
    <div className="App">
      <div id="header" ref={ref_Header} className={styles.header_Container}>
        <InvestorHeader maxWidth={1250} />
      </div>
      <div id="header" className={styles.phoneNumberHeader_Container}>
        <PhoneNumberHeader />
      </div>
      <div id="partner" ref={ref_Partner} className={styles.partner_Container}>
        <Partner />
      </div>
      <div
        id="how_it_works"
        ref={ref_HIW}
        className={styles.howitworks_Container}
      >
        <Howitworks />
      </div>
      <div
        id="volt_benefits"
        ref={ref_Benefits}
        className={styles.voltBenefits_Container}
      >
        <VoltBenefits />
      </div>
      <div id="eligible" className={styles.eligible_Container}>
        <Eligible />
      </div>
      {/*
                      <div id="customer_testimony" className="customerSays_Container">
                         <CustomerSays />
                      </div>
                    */}
      <div
        id=""
        className={styles.AppStoreSection}
        style={
          _isMobile
            ? {
                paddingTop: 50,
                paddingBottom: 48,
              }
            : {
                paddingTop: 80,
              }
        }
      >
        <AppSection />
      </div>
      <div id="faq" ref={ref_Faq} className={styles.Faq_Container}>
        <Faqs type={"INVESTOR"} />
      </div>
      <div id="" className={styles.phoneNumberFooter_Container}>
        <PhoneNumberFooter />
      </div>
      <div id="footer" ref={ref_ContactUs} className={styles.footer_Container}>
        <Footer />
      </div>
      <div
        className={styles.whatAppStickyMobileContainerHeader}
        onClick={() => handleWhatAppClickInvestor()}
      >
        <Image
          width={75}
          height={75}
          src={Icons.WHATSAPP_STICKY}
          alt="volt_money_whatapp_sticky_mobile"
        />
      </div>
      {/*
                    <div className="whatAppStickyWebContainerHeader" onClick={() => handleWhatAppClick()}>
                        <button className="PhoneNumberFooterMobileWhatsAppContainerWebHeader"
                                onClick={() => handleWhatAppClick()}>
                            <div className="PhoneNumberFooterMobileWhatsAppIconContainerWebHeader">
                                <img src={whatsAppIcon} alt=""/>
                            </div>
                            <div className="PhoneNumberFooterMobileWhatsAppTextContainerWebHeader">
                                Chat with us
                            </div>
                        </button>
                    </div>
                    */}
    </div>
  );
}

export default VoltLandingPage;
