import "./footer.css";
import React, { location } from "react";
import {EXTERNAL_URLS, redirectToPrivacy} from "../../configs/config";
import {isMobile, redirectTo} from "../../configs/utils";
import {Links} from "../../configs/constant";

import InstagramLogo from './assets/Instagram.svg'
import TwitterLogo from './assets/twitter.svg'
import LinkedInLogo from './assets/LinkedIn.svg'
import VoltLogo from './assets/VoltIcon.svg'
import StartUp from './assets/startUpIndia.svg'
import StartUpRegistratin from './assets/startUpRegistration.svg'

function Footer() {
    const _isMobile = isMobile();

    return (
        <div
            className="FooterContainer"
            style={{
                paddingTop: 40,
            }}
        >
            <div
                className="FooterContainer_Top"
                style={{
                    paddingLeft: 16,
                    paddingRight: 16,
                }}
            >
                <div className="VoltLogoContainer">
                    <img
                        src={VoltLogo}
                        alt="linkedIn icon"
                        width={84}
                        height={32}
                    />
                </div>
                <div className="FooterHelpSectionContainer">
                    <div
                        className="FooterHelpSectionContainerAnchor"
                        onClick={() => redirectTo("/", "_self")}
                    >
                        Home
                    </div>
                    <div
                        className="FooterHelpSectionContainerAnchor"
                        onClick={() => redirectTo("/contact", '_self')}
                    >
                        Contact us
                    </div>
                    <div
                        className="FooterHelpSectionContainerAnchor"
                        onClick={() => redirectTo("/about", '_self')}
                    >
                        About us
                    </div>
                </div>
            </div>
            <div className="FooterContainer_Bottom">
                <div
                    className="FooterFollowUsContainer"
                    style={{
                        paddingLeft: 16,
                        paddingRight: 16,
                    }}
                >
                    <div className="FollowUsTextContainer">Follow us</div>
                    <div>
                        <a className="shareAnchorContainer">
                            <img
                                src={TwitterLogo}
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
                                src={InstagramLogo}
                                alt="instagram icon"
                                width={32}
                                height={32}
                                onClick={()=>redirectTo(Links.Instagram)}
                            />
                        </a>
                    </div>
                    <div>
                        <a
                            href={EXTERNAL_URLS.LINKEDIN}
                            target="_blank"
                            rel="noreferrer"
                            className="shareAnchorContainer"
                        >
                            <img
                                src={LinkedInLogo}
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
                        className="FooterContainer_Bottom1"
                        style={{
                            width: "50%",
                            justifyContent: "flex-end",
                            paddingBottom: 0,
                            paddingRight: 16,
                        }}
                    >
                        <div onClick={() => redirectTo(Links.STARTUP_INDIA)}>
                            <img
                                src={StartUp}
                                alt={"Volt money startup India"}
                                width={152}
                                height={59}
                            />
                        </div>
                        <div onClick={() => redirectTo(Links.DPIIT)}>
                            <img
                                src={StartUpRegistratin}
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
                <div className="FooterContainer_Bottom1">
                    <div onClick={() => redirectTo(Links.STARTUP_INDIA)}>
                        <img
                            src={StartUp}
                            alt={"Volt money startup India"}
                            width={152}
                            height={59}
                        />
                    </div>
                    <div onClick={() => redirectTo(Links.DPIIT)}>
                        <img
                            src={StartUpRegistratin}
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
                <div className="VoltLegalContainer">
                    <div className="VoltLegalT1" onClick={()=>redirectTo('/')}>
                        ©2023 SALTER TECHNOLOGIES PRIVATE LIMITED | Legal | Privacy
                    </div>
                    <div className="VoltLegalT2">CIN: U72200KA2022PTC158631</div>
                </div>
            ) : (
                <div
                    className="VoltLegalContainer"
                    style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between",
                    }}
                >
                    <div className="VoltLegalT1"  onClick={()=>redirectToPrivacy()} style={{
                        cursor: 'pointer'
                    }}>
                        ©2023 SALTER TECHNOLOGIES PRIVATE LIMITED | Legal | Privacy
                    </div>
                    <div className="VoltLegalT2">CIN: U72200KA2022PTC158631</div>
                </div>
            )}
        </div>
    );
}

export default Footer;
