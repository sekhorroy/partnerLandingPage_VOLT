import Head from "next/head";
import PartnerLandingPage from "@/LandingPage/PartnerLandingPage";

export default function Contactus() {
    return (
       <>
           <Head>
               <title>Volt Money | Contact us</title>
               <meta
                   name="description"
                   content="India’s first app to offer instant online credit line against securities, making credit easily accessible to millions of Indians right when they need it in under 5 minutes."
               />
           </Head>
           <PartnerLandingPage />
       </>
    );
}