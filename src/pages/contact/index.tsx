import ContactUsPage from "@/ContactusPage/ContactUsPage";
import Head from "next/head";
import * as React from "react";

export async function getServerSideProps(context: any) {
    return {
        props: {}, // will be passed to the page component as props
    }
}

export default function Contactus() {
    return (
       <>
           <Head>
               <title>Volt Money | Contact us</title>
               <link rel="canonical" href="https://www.voltmoney.in/contact" />
               <meta
                   name="description"
                   content="India’s first app to offer instant online credit line against securities, making credit easily accessible to millions of Indians right when they need it in under 5 minutes."
               />
           </Head>
           <ContactUsPage />
       </>
    );
}