import {getScreenX} from "@/configs/utils";
import ContactUsPage from "@/ContactusPage/ContactUsPage";
import Head from "next/head";

export default function Contactus() {
    return (
       <>
           <Head>
               <title>My page title</title>
               <meta
                   name="description"
                   content="Help your clients meet short term cash needs by redeeming pledging mutual funds | Stop redemptions & grow mutual fund AUM"
               />
           </Head>
           <ContactUsPage />
       </>
    );
}