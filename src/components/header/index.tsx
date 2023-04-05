import styles from './header.module.css';
import Image from "next/image";
import {isMobile} from "@/configs/utils";
import {ButtonComponent} from "@/components/button";
import {ButtonTypeTokens} from "@/components/button/type";

export default function Header() {

    const _isMobile:boolean = isMobile();

    return (
        <>
            <div className={_isMobile ? styles.header : styles.headerWeb}>
                <div className={styles.headerContent}>
                    <div className={styles.headerLeft}>
                        <Image
                            priority
                            src="/images/VoltPartnerLogo.svg"
                            height={_isMobile ? 20 : 29}
                            width={120}
                            alt="Volt partner logo"
                        />
                    </div>
                    <div className={styles.headerRight}>
                        {
                            _isMobile ? (
                                    <div>
                                        <Image
                                            priority
                                            src="/images/ThreeBar.svg"
                                            height={12}
                                            width={18}
                                            alt="Volt partner logo"
                                        />
                                    </div>
                                ) : (<></>)
                        }
                        {
                            !_isMobile ? (
                                <div className={styles.headerRightWebContent}>
                                    <div>About us</div>
                                    <div>FAQs</div>
                                    <div>
                                        <ButtonComponent label='Get Started' type={ButtonTypeTokens.OUTLINE_LARGE}/>
                                    </div>
                                </div>
                            ) : (<></>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
