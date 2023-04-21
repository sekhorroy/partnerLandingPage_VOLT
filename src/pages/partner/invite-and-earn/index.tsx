import Head from "next/head";
import * as React from "react";
import InviteAndEarnFeature from "@/features/inviteAndEarn";
import HowItWorks from "@/LandingPage/howItWorksSection/HowItWorks";

export default function InviteAndEarn() {
  return (
    <>
      <Head>
        <title>Invite and Earn | Volt Money</title>
        <meta
          name="description"
          content="Join our mission to stop untimely mutual fund redemptions by sharing Volt Money with other MFDs, and get a free iPad and more."
        />
      </Head>
      <InviteAndEarnFeature />
      <HowItWorks />
    </>
  );
}
