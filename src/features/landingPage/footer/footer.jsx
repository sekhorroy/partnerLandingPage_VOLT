import styles from "./footer.module.css";
import React, { location } from "react";
import InstagramLogo from './assets/Instagram.svg'
import TwitterLogo from './assets/twitter.svg'
import LinkedInLogo from './assets/LinkedIn.svg'
import VoltLogo from './assets/VoltIcon.svg'
import StartUp from './assets/startUpIndia.svg'
import StartUpRegistratin from './assets/startUpRegistration.svg'
import {isMobile} from "@/configs/utils";
import {Links} from "@/configs/constants";

function Footer() {
    const _isMobile = isMobile();

    return (
        <div
            className={styles.FooterContainer}
            style={{
                paddingTop: 40,
            }}
        >
            <div
                className={styles.FooterContainer_Top}
                style={{
                    paddingLeft: 16,
                    paddingRight: 16,
                }}
            >
                <div className={styles.VoltLogoContainer}>
                    <img
                        src={"/images/VoltIcon.svg"}
                        alt="linkedIn icon"
                        width={84}
                        height={32}
                    />
                </div>
                <div className={styles.FooterHelpSectionContainer}>
                    <div
                        className={styles.FooterHelpSectionContainerAnchor}
                        onClick={() => redirectTo("/", "_self")}
                    >
                        Home
                    </div>
                    <div
                        className={styles.FooterHelpSectionContainerAnchor}
                        onClick={() => redirectTo("/contact", '_self')}
                    >
                        Contact us
                    </div>
                    <div
                        className={styles.FooterHelpSectionContainerAnchor}
                        onClick={() => redirectTo("/about", '_self')}
                    >
                        About us
                    </div>
                </div>
            </div>
            <div className={styles.FooterContainer_Bottom}>
                <div
                    className={styles.FooterFollowUsContainer}
                    style={{
                        paddingLeft: 16,
                        paddingRight: 16,
                    }}
                >
                    <div className={styles.FollowUsTextContainer}>Follow us</div>
                    <div>
                        <a className={styles.shareAnchorContainer}>
                            <img
                                src={"/images/twitter.svg"}
                                alt="twitter icon"
                                width={32}
                                height={32}
                                onClick={()=>redirectTo(Links.Twitter)}
                            />
                        </a>
                    </div>
                    <div>
                        <a>
                            <img
                                src={"/images/Instagram.svg"}
                                alt="instagram icon"
                                width={32}
                                height={32}
                                onClick={()=>redirectTo(Links.Instagram)}
                            />
                        </a>
                    </div>
                    <div>
                        <a
                            href={Links.LINKEDIN}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.shareAnchorContainer}
                        >
                            <img
                                src={"/images/LinkedIn.svg"}
                                alt="linkedIn icon"
                                width={32}
                                height={32}
                                onClick={()=>redirectTo(Links.Linkedin)}
                            />
                        </a>
                    </div>
                </div>
                {!_isMobile ? (
                    <div
                        className={styles.FooterContainer_Bottom1}
                        style={{
                            width: "50%",
                            justifyContent: "flex-end",
                            paddingBottom: 0,
                            paddingRight: 16,
                        }}
                    >
                        <div onClick={() => redirectTo(Links.STARTUP_INDIA)}>
                            <img
                                src={"/images/startUpIndia.svg"}
                                alt={"Volt money startup India"}
                                width={152}
                                height={59}
                            />
                        </div>
                        <div onClick={() => redirectTo(Links.DPIIT)}>
                            <img
                                src={"/images/startUpRegistration.svg"}
                                alt={"start up registration"}
                                width={152}
                                height={59}
                            />
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            {_isMobile ? (
                <div className={styles.FooterContainer_Bottom1}>
                    <div onClick={() => redirectTo(Links.STARTUP_INDIA)}>
                        <img
                            src={'/images/startUpIndia.svg'}
                            alt={"Volt money startup India"}
                            width={152}
                            height={59}
                        />
                    </div>
                    <div onClick={() => redirectTo(Links.DPIIT)}>
                        <img
                            src={"/images/startUpRegistration.svg"}
                            alt={"start up registration"}
                            width={152}
                            height={59}
                        />
                    </div>
                </div>
            ) : (
                <></>
            )}

            {_isMobile ? (
                <div className={styles.VoltLegalContainer}>
                    <div className={styles.VoltLegalT1} onClick={()=>redirectTo('/')}>
                        ©2023 SALTER TECHNOLOGIES PRIVATE LIMITED | Legal | Privacy
                    </div>
                    <div className={styles.VoltLegalT2}>CIN: U72200KA2022PTC158631</div>
                </div>
            ) : (
                <div
                    className={styles.VoltLegalContainer}
                    style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between",
                    }}
                >
                    <div className={styles.VoltLegalT1}  onClick={()=>redirectToPrivacy()} style={{
                        cursor: 'pointer'
                    }}>
                        ©2023 SALTER TECHNOLOGIES PRIVATE LIMITED | Legal | Privacy
                    </div>
                    <div className={styles.VoltLegalT2}>CIN: U72200KA2022PTC158631</div>
                </div>
            )}
        </div>
    );
}

export default Footer;
