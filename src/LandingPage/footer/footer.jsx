import styles from './footer.module.css';
import React, {location} from 'react';
import { EXTERNAL_URLS } from '../../configs/config';
import { privacyLink } from "../../configs/links";
import Image from "next/image";

function Footer() {
    return(
        <div className={styles.FooterContainer}>
            <div className={styles.FooterContainer_Top}>
                <div className={styles.VoltLogoContainer}>
                    <img src={'/images/VoltIcon.svg'} alt="linkedIn icon" width={84} height={32}/>
                </div>
                <div className={styles.FooterHelpSectionContainer}>
                    <a className={styles.FooterHelpSectionContainerAnchor}>
                        Home
                    </a>
                    <a className={styles.FooterHelpSectionContainerAnchor}>
                        Help & support
                    </a>
                    <a className={styles.FooterHelpSectionContainerAnchor}>
                        Contact
                    </a>
                    <a className={styles.FooterHelpSectionContainerAnchor}>
                        About us
                    </a>
                </div>
            </div>
            <div className={styles.FooterContainer_Bottom}>
                <div className={styles.FooterFollowUsContainer}>
                    <div className={styles.FollowUsTextContainer}>
                        Follow us
                    </div>
                    <div>
                        <a>
                            <Image src={'/images/twitter.svg'} alt="twitter icon" width={32} height={32}/>
                        </a>
                    </div>
                    <div>
                        <a>
                            <img src={'/images/Instagram.svg'} alt="instagram icon" width={32} height={32}/>
                        </a>
                    </div>
                    <div>
                        <a href={EXTERNAL_URLS.LINKEDIN} target='_blank' rel="noreferrer">
                            <img src={'/images/Instagram.svg'} alt="linkedIn icon" width={32} height={32}/>
                        </a>

                    </div>
                </div>
                <div className={styles.VoltLegalContainer}>
                    <div style={{color: 'white'}} href={privacyLink.TermsAndConditions} target='_blank' rel="noreferrer">
                        ©2023 SALTER TECHNOLOGIES PRIVATE LIMITED  |  Legal   |  Privacy
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;