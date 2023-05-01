import Head from "next/head";
import PartnerLandingPage from "@/LandingPage/PartnerLandingPage";
import styles from "@/features/landingPage/LandingPage.module.css";
import * as React from "react";

export default function Contactus() {
    return (
       <>
           <Head>
               <title>Volt Money | Partner with us</title>
               <link rel="canonical" href="https://www.voltmoney.in/partner" />
               <meta
                   name="description"
                   content="Help your clients meet short term cash needs by pledging mutual funds | Stop redemptions & grow mutual fund AUM"
               />
           </Head>
           <PartnerLandingPage />
       </>
    );
}