import Head from "next/head";
import VoltLandingPage from '../features/landingPage/LandingPage';

export async function getServerSideProps(context: any) {
    return {
        props: {}, // will be passed to the page component as props
    }
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Volt Money | Instant credit against mutual funds and stocks</title>
                <meta
                    name="description"
                    content="Get credit line/OD limit against mutual funds starting at 9.95% per annum with trusted lenders in less than 5 minutes."
                />
            </Head>
            <VoltLandingPage />
        </>
    );
}