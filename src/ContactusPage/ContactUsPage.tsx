import styles from "./ContactUs.module.css";
import {Header} from "@/components/header";
import {getScreenX} from "@/configs/utils";
import {useMemo} from "react";
import {HeaderType} from "@/components/header/type";
import TopSectionContactUs from "@/ContactusPage/topSection/topSection";
import Faqs from "@/LandingPage/faqs/faqs";
import Footer from "@/LandingPage/footer/footer";

export default function ContactUsPage() {
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
        <Header type={HeaderType.CONTACT_US}/>
        <TopSectionContactUs />
        <Faqs />
        <Footer />
      </div>
    );
  }, [width]);

  return partnerChild;
}
