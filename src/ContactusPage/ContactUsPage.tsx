import styles from "./ContactUs.module.css";
import {Header} from "@/components/header";
import {getScreenX} from "@/configs/utils";
import {useMemo} from "react";
import {HeaderType} from "@/components/header/type";
import TopSectionContactUs from "@/ContactusPage/topSection/topSection";
import Faqs, {FaqType} from "@/LandingPage/faqs/faqs";
import Footer from "@/LandingPage/footer/footer";
import ConnectSection from "./connectSection/connectSection";

export default function ContactUsPage() {
  const width = getScreenX();
  console.log(width);

  const partnerChild = useMemo(() => {
    return (
      <div
        className={styles.body}
        style={{
          width: '100%',
        }}
      >
        <Header type={HeaderType.INVESTOR}/>
        <TopSectionContactUs />
        <ConnectSection />
        <div id='faq' style={{
          width: '100%'
        }}>
        <Faqs type={FaqType.INVESTOR}/>
        </div>
        <Footer />
      </div>
    );
  }, [width]);

  return partnerChild;
}
