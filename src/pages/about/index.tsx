import {HeaderType} from "@/components/header/type";
import {Header} from "@/components/header";
import AboutTopSection from "@/features/aboutPage/aboutTopSection";
import TeamSection from "@/features/aboutPage/teamSection";
import Footer from "@/LandingPage/footer/footer";

export default function About() {
    return (
        <>
            <Header type={HeaderType.CONTACT_US}/>
            <AboutTopSection />
            <TeamSection />
            <Footer />
        </>
    );
}