import { HeaderType } from "@/components/header/type";
import { Header } from "@/components/header";
import AboutTopSection from "@/features/aboutPage/aboutTopSection";
import TeamSection from "@/features/aboutPage/teamSection";
import Footer from "@/LandingPage/footer/footer";
import InvestorSection from "@/features/aboutPage/investorSection";
import Head from "next/head";
import * as React from "react";
import axios from "axios";
import { api } from "@/configs/constants";
import { CardProps, CardTypes } from "@/components/card/types";

export async function getServerSideProps(context: any) {
  // team data network call
  const response_team = await axios.get(
    `${api.teamApi}`
  );
  const TeamData = response_team.data.data;
  let team_data: CardProps[] = [];
  //@ts-ignore
  TeamData.map((item, index) => {
    team_data.push({
      type: CardTypes.TEAM_CARD,
      name: item?.name,
      title: item?.role,
      subTitle: item?.bio,
      imageUrl: item?.image,
      linkedInUrl: item?.linkedin_url,
    });
  });

  // // investor data network call
    const response_investor = await axios.get(
        `${api.investorApi}`
    );
    const InvestorData = response_investor.data.data;
    let investor_data: CardProps[] = [];
    //@ts-ignore
    InvestorData.map((item, index) => {
        investor_data.push({
            type: CardTypes.TEAM_CARD,
            title: item?.name,
            subTitle: item?.bio,
            imageUrl: item?.image,
            linkedInUrl: item?.linkedInUrl  ? item?.linkedin_url : '',
        });
    });

    console.log("investor_data 123: ", investor_data);

  return {
    props: {
      teamData: team_data,
      investorData: investor_data,
    },
  };
}

export default function About({ teamData, investorData }: any) {
  return (
    <>
      <Head>
        <title>Volt Money | About us</title>
        <link rel="canonical" href="https://www.voltmoney.in/about" />
        <meta
          name="description"
          content="Discover how Volt is revolutionizing the lending industry in India with our mission to provide accessible credit for everyone. Experience the convenience and ease of our fast, secure, and seamless loan against mutual fund process."
        />
      </Head>
      <Header type={HeaderType.INVESTOR} />
      <AboutTopSection />
      <TeamSection data={teamData} />
      <InvestorSection data={investorData}/>
      <Footer />
    </>
  );
}
