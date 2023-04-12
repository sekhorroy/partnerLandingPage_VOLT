import Head from "next/head";
import styles from "@/styles/Home.module.css";
import PartnerLandingPage from "@/LandingPage/PartnerLandingPage";
import {getParamsLink, handleWhatAppClick, isMobile} from "@/configs/utils";
import Image from "next/image";
import {useRouter} from "next/router";


export default function Home() {

    const router = useRouter();
    console.log("router: ", router);

    console.log(getParamsLink(router.asPath));
  return (
    <>
      <Head>
        <title>Volt Money | Partner with us</title>
        <meta name="description" content="Help your clients meet short term cash needs by redeeming pledging mutual funds | Stop redemptions & grow mutual fund AUM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{
            width: '100%'
      }} className={styles.main}>
        <PartnerLandingPage />
          <div className={styles.whatAppStickyMobileContainerHeader} onClick={()=>handleWhatAppClick()}>
              <Image width = {75} height = {75}  src={'./images/whatappSticky.svg'} alt="whatapp sticky mobile"/>
          </div>
      </main>
    </>
  );
}
