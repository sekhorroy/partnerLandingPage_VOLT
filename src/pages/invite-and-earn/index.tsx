import Head from "next/head";
import * as React from "react";
import InviteAndEarnFeature from "@/features/inviteAndEarn";

export async function getServerSideProps(context: any) {
    return {
        props: {}, // will be passed to the page component as props
    }
}

export default function InviteAndEarn() {
  return (
    <>
      <Head>
        <title>Invite and Earn | Volt Money</title>
        <link rel="canonical" href="https://www.voltmoney.in/invite-and-earn" />
        <meta
          name="description"
          content="Join our mission to stop untimely mutual fund redemptions by sharing Volt Money with other MFDs, and get a free iPad and more."
        />
      </Head>
      <InviteAndEarnFeature />
    </>
  );
}
