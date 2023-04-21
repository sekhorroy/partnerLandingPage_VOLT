import { Header } from "@/components/header";
import { HeaderType } from "@/components/header/type";
import HeroSection from "@/features/inviteAndEarn/heroSection";

const InviteAndEarnFeature = () => {
  return (
    <>
      <div>
        <Header type={HeaderType.INVESTOR} />
        <HeroSection />
      </div>
    </>
  );
};

export default InviteAndEarnFeature;
