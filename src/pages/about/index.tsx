import { HeaderType } from "@/components/header/type";
import { Header } from "@/components/header";
import AboutTopSection from "@/features/aboutPage/aboutTopSection";
import TeamSection from "@/features/aboutPage/teamSection";
import Footer from "@/LandingPage/footer/footer";
import InvestorSection from "@/features/aboutPage/investorSection";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Volt Money | About us</title>
        <meta
          name="description"
          content="Discover how Volt is revolutionizing the lending industry in India with our mission to provide accessible credit for everyone. Experience the convenience and ease of our fast, secure, and seamless loan against mutual fund process."
        />
      </Head>

      <Header type={HeaderType.INVESTOR} />
      <AboutTopSection />
      <TeamSection />
      <InvestorSection />
      <Footer />
    </>
  );
}
