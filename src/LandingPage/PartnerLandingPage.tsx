import styles from './PartnerLandingPage.module.css'
import Header from "@/components/header";
import {getScreenX} from "@/configs/utils";
import {useMemo} from "react";
import TopSection from "@/LandingPage/topSection/topSection";

export default function PartnerLandingPage() {
    const width = getScreenX();

    const partnerChild = useMemo(()=>{
        return (
            <div className={styles.body} style={{
                width: width,
            }}>
                <Header />
                <TopSection />
            </div>
        )
    }, [width])

    return partnerChild
}
