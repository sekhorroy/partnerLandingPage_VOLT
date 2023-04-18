import styles from "./header.module.css";
import * as React from "react";
import MenuOutsideAlerter from "../../../configs/hooks/useMenuOutSideAlerter";
import { useState } from "react";
import { redirectTo, redirectToPartner, redirectToVoltApp} from "../../../configs/utils";

function Header() {
  const [showmenu, SetShowmenu] = useState(false);
  const handleMenuClick = () => {
    SetShowmenu(!showmenu);
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLeftContainer}>
        <div className={styles.voltIconContainer}>
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
            <a href="#how_it_works">How it works</a>
            <a href="#volt_benefits">Benefits</a>
            <a href="#faq">FAQs</a>
            <div
              href=""
              style={{ cursor: "pointer" }}
              onClick={()=>redirectToPartner()}
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
              src={'./images/ThreeBar.svg'}
              alt="menu bar"
              style={{ width: "18px", height: "12px" }}
            />
          </div>

          {showmenu ? (
            <div className={styles.headerLeftContainerLinksMobileMenu}>
              <div className={styles.headerLeftContainerLinksMobileMenuItemsContainer}>
                <a
                  style={{
                    fontSize: 14,
                    fontFamily: "Inter",
                    cursor: "pointer",
                  }}
                  href="#how_it_works"
                  className={styles.headerLeftContainerLinksMobileMenuItem}
                >
                  How it works
                </a>
                <div className={styles.headerLeftContainerLinksMobileMenuItemDivider}></div>
                <a
                  style={{
                    fontSize: 14,
                    fontFamily: "Inter",
                    cursor: "pointer",
                  }}
                  href="#volt_benefits"
                  className={styles.headerLeftContainerLinksMobileMenuItem}
                >
                  Benefits
                </a>
                <div className={styles.headerLeftContainerLinksMobileMenuItemDivider}></div>
                <a
                  style={{
                    fontSize: 14,
                    fontFamily: "Inter",
                    cursor: "pointer",
                  }}
                  href="#faq"
                  className={styles.headerLeftContainerLinksMobileMenuItem}
                >
                  FAQs
                </a>
                <div className={styles.headerLeftContainerLinksMobileMenuItemDivider}></div>
                <div
                  style={{
                    fontSize: 14,
                    fontFamily: "Inter",
                    cursor: "pointer",
                  }}
                  onClick={()=>redirectToPartner()}
                  target="_blank"
                  className={styles.headerLeftContainerLinksMobileMenuItem}
                  rel="noreferrer"
                >
                  Partner with us
                </div>
                <div className={styles.headerLeftContainerLinksMobileMenuItemDivider}></div>

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
  );
}

export default Header;
