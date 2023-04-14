import {HeaderType} from "@/components/header/type";
import {Header} from "@/components/header";
import AboutTopSection from "@/features/aboutPage/aboutTopSection";

export default function About() {
    return (
        <>
            <Header type={HeaderType.CONTACT_US}/>
            <AboutTopSection />
        </>
    );
}