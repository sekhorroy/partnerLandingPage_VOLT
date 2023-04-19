import styles from "./header.module.css";
import * as React from "react";
import MenuOutsideAlerter from "../../../configs/hooks/useMenuOutSideAlerter";
import { useState } from "react";
import {
  redirectTo,
  redirectToVoltApp,
  redirectToWithQueryParam,
} from "../../../configs/utils";
import { BaseLink } from "@/configs/constants";

function Header() {
  const [showmenu, SetShowmenu] = useState(false);
  const handleMenuClick = () => {
    SetShowmenu(!showmenu);
  };
  return (
    <div className={styles.headerContainer}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        maxWidth: 1200
      }}>
        <div className={styles.headerLeftContainer}>
          <div
              className={styles.voltIconContainer}
              onClick={() => redirectToWithQueryParam("/", "_self")}
          >
            <img
                className={styles.voltIconContainerImage}
                src={"./images/VoltBlue.svg"}
                alt="volt icon"
            />
          </div>
        </div>
        <div className={styles.headerRightContainer}>
          <div className={styles.headerLeftContainerWebItems}>
            <div className={styles.headerLeftContainerLinks}>
              <div
                  style={{ cursor: "pointer" }}
                  onClick={() => redirectTo("#how_it_works", "_self")}
              >
                How it works
              </div>
              <div
                  style={{ cursor: "pointer" }}
                  onClick={() => redirectTo("#volt_benefits", "_self")}
              >
                Benefits
              </div>
              <div
                  style={{ cursor: "pointer" }}
                  onClick={() => redirectTo("#faq", "_self")}
              >
                FAQs
              </div>
              <div
                  href=""
                  style={{ cursor: "pointer" }}
                  onClick={() => redirectToWithQueryParam("/partner", "_self")}
                  target="_blank"
                  rel="noreferrer"
              >
                Partner with us
              </div>
              <div
                  style={{ cursor: "pointer" }}
                  onClick={() => redirectTo("/contact", "_self")}
              >
                {" "}
                Contact us
              </div>
            </div>
            <div>
              <button
                  className={styles.headerRightContainerGetStartedButton}
                  onClick={() => redirectToVoltApp()}
              >
                Check available limit
              </button>
            </div>
          </div>
          <MenuOutsideAlerter showmenu={showmenu} SetShowmenu={SetShowmenu}>
            <div
                className={styles.headerRightContainerMobileItems}
                onClick={handleMenuClick}
            >
              <img
                  className={styles.headerRightContainerMobileItems}
                  src={"./images/ThreeBar.svg"}
                  alt="menu bar"
                  style={{ width: "18px", height: "12px" }}
              />
            </div>

            {showmenu ? (
                <div className={styles.headerLeftContainerLinksMobileMenu}>
                  <div
                      className={
                        styles.headerLeftContainerLinksMobileMenuItemsContainer
                      }
                  >
                    <div
                        style={{
                          cursor: "pointer",
                          fontSize: 14,
                          fontFamily: "Inter",
                        }}
                        onClick={() => redirectTo("#how_it_works", "_self")}
                        className={styles.headerLeftContainerLinksMobileMenuItem}
                    >
                      How it works
                    </div>
                    <div
                        className={
                          styles.headerLeftContainerLinksMobileMenuItemDivider
                        }
                    ></div>
                    <div
                        style={{
                          cursor: "pointer",
                          fontSize: 14,
                          fontFamily: "Inter",
                        }}
                        onClick={() => redirectTo("#volt_benefits", "_self")}
                        className={styles.headerLeftContainerLinksMobileMenuItem}
                    >
                      Benefits
                    </div>
                    <div
                        className={
                          styles.headerLeftContainerLinksMobileMenuItemDivider
                        }
                    ></div>
                    <div
                        style={{
                          cursor: "pointer",
                          fontSize: 14,
                          fontFamily: "Inter",
                        }}
                        onClick={() => redirectTo("#faq", "_self")}
                        className={styles.headerLeftContainerLinksMobileMenuItem}
                    >
                      FAQs
                    </div>
                    <div
                        className={
                          styles.headerLeftContainerLinksMobileMenuItemDivider
                        }
                    ></div>
                    <div
                        style={{
                          fontSize: 14,
                          fontFamily: "Inter",
                          cursor: "pointer",
                        }}
                        onClick={() => redirectTo(`${BaseLink}/partner`, "_self")}
                        target="_blank"
                        className={styles.headerLeftContainerLinksMobileMenuItem}
                        rel="noreferrer"
                    >
                      Partner with us
                    </div>
                    <div
                        className={
                          styles.headerLeftContainerLinksMobileMenuItemDivider
                        }
                    ></div>

                    <div
                        style={{
                          fontSize: 14,
                          fontFamily: "Inter",
                          cursor: "pointer",
                        }}
                        className={styles.headerLeftContainerLinksMobileMenuItem}
                        onClick={() => redirectTo("/contact", "_self")}
                    >
                      Contact us
                    </div>
                  </div>
                </div>
            ) : null}
          </MenuOutsideAlerter>
        </div>
      </div>
    </div>
  );
}

export default Header;
