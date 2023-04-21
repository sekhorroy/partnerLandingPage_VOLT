import { Header } from "@/components/header";
import { HeaderType } from "@/components/header/type";
import HeroSection from "@/features/inviteAndEarn/heroSection";
import RewardSection from "@/features/inviteAndEarn/rewardSection";
import HowItWorks from "@/LandingPage/howItWorksSection/HowItWorks";

const InviteAndEarnFeature = () => {
  return (
    <>
      <div>
        <Header type={HeaderType.INVESTOR} />
        <HeroSection />
        <HowItWorks />
        <RewardSection />
      </div>
    </>
  );
};

export default InviteAndEarnFeature;
