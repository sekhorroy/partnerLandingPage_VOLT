import Head from "next/head";
import PartnerLandingPage from "@/LandingPage/PartnerLandingPage";
import * as React from "react";
import axios from "axios";
import { CardProps, CardTypes } from "@/components/card/types";

export async function getServerSideProps(context: any) {
  // const response = await axios.get(
  //   // "https://v1.nocodeapi.com/voltmoney/google_sheets/IwjmEWFMjLgGfPdV?tabId=Sheet1"
  //   "https://v1.nocodeapi.com/admin8volt/google_sheets/HfvGfmNemhksFKOg?tabId=partner_testimonials"
  // );
  // const Data = response.data.data;
  // console.log("response: ", Data);
  // let dataTransform: CardProps[] = [];
  // //@ts-ignore
  // Data.map((item, index) => {
  //   dataTransform.push({
  //     type: CardTypes.TESTIMONY,
  //     name: item?.name,
  //     title: item?.bio,
  //     subTitle: item?.message,
  //     leftIcon: {
  //       url: item?.image,
  //       width: 56,
  //       height: 56,
  //       alt: "Volt money partners",
  //     },
  //   });
  // });

  return {
    props: {
      // testimoneyPartnerData: dataTransform,
    }, // will be passed to the page component as props
  };
}

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
