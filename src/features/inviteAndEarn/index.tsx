import { Header } from "@/components/header";
import { HeaderType } from "@/components/header/type";
import HeroSection from "@/features/inviteAndEarn/heroSection";
import RewardSection from "@/features/inviteAndEarn/rewardSection";
import HowItWorks from "@/LandingPage/howItWorksSection/HowItWorks";
import TestimoneySection from "@/LandingPage/testimoneySection/testimoneySections";
import Faqs, { FaqType } from "@/LandingPage/faqs/faqs";
import Footer from "@/LandingPage/footer/footer";
import {isMobile} from "@/configs/utils";
import HowItWorksReferAndEarn from "@/features/inviteAndEarn/howItWorksInviteAndEarn/HowItWorks";

const InviteAndEarnFeature = () => {

  const _isMobile = isMobile();

  return (
    <>
      <div>
        <Header type={HeaderType.INVESTOR} />
        <HeroSection />
        <HowItWorksReferAndEarn />
        <RewardSection />
        <div style={_isMobile ? {
          paddingTop: 48
        } : {
          paddingTop: 80
        }}>
          <TestimoneySection />
        </div>
        <Faqs type={FaqType.PARTNER} />
        <Footer />
      </div>
    </>
  );
};

export default InviteAndEarnFeature;
