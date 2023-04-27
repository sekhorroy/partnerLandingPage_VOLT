import styles from "./heroSection.module.css";
import { ButtonComponent } from "@/components/button";
import {
  ButtonTypeTokens,
  ButtonWidthTypeTokens,
} from "@/components/button/type";
import {
  isMobile,
  redirectTo,
  redirectToPartnerInviteAndEarn,
} from "@/configs/utils";
import { useEffect, useMemo, useRef, useState } from "react";
import { Links } from "@/configs/constants";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const partnerImages = [
  "https://volt-images.s3.ap-south-1.amazonaws.com/partner_images/testimonial/samir_desai.png",
  "https://volt-images.s3.ap-south-1.amazonaws.com/partner_images/testimonial/kalpesh_patel.png",
  "https://volt-images.s3.ap-south-1.amazonaws.com/partner_images/testimonial/ram_pravesh.png",
  "https://volt-images.s3.ap-south-1.amazonaws.com/partner_images/testimonial/kl_korah.png",
  "https://volt-images.s3.ap-south-1.amazonaws.com/partner_images/testimonial/ashok_kar.png",
  "https://volt-images.s3.ap-south-1.amazonaws.com/partner_images/testimonial/harish_krishnani.png",
];

const SlideFromContainer = () => {
  const [checked, setChecked] = useState(false);
  const containerRef = useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      sx={{
        height: "fit-content",
        width: "fit-content",
        display: "flex",
        padding: 2,
        borderRadius: 1,
        bgcolor: "red",
        overflow: "hidden",
      }}
      ref={containerRef}
    >
      <Box sx={{ width: "fit-content" }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show from target"
        />
        <Slide direction="up" in={checked} container={containerRef.current}>
          <img
            src={
              "https://volt-images.s3.ap-south-1.amazonaws.com/partner_images/testimonial/samir_desai.png"
            }
            alt={"MFD advisors images"}
            width={32}
            height={32}
          />
        </Slide>
      </Box>
    </Box>
  );
};

const HeroSection = () => {
  const _isMobile = isMobile();
  const [imageIndex, setImageIndex] = useState(0);

  const changeImageWithDelay = async () => {
    for (let i = 0; i < partnerImages.length; i++) {
      setTimeout(() => {
        setImageIndex(i);
      }, 1000);
    }
  };

  useEffect(() => {
    changeImageWithDelay();
  }, []);

  const _child = useMemo(
    () => (
      <>
        <div
          className={styles.heroSectionContainer}
          style={
            _isMobile
              ? {
                  paddingTop: 32,
                  paddingBottom: 32,
                }
              : {
                  paddingTop: 44,
                  paddingBottom: 44,
                }
          }
        >
          <div
            className={styles.heroSectionContainer1}
            style={
              _isMobile
                ? {
                    width: "100%",
                  }
                : {
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    paddingLeft: 32,
                  }
            }
          >
            <div
              className={styles.heroSectionContainer1Left}
              style={
                _isMobile
                  ? {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }
                  : {}
              }
            >
              <div
                className={styles.heroSectionContainer1LeftT1}
                style={
                  _isMobile
                    ? {
                        fontSize: 24,
                        textAlign: "center",
                      }
                    : {
                        fontSize: 32,
                      }
                }
              >
                Join the mission to stop redemptions!
              </div>
              <div
                className={_isMobile ? styles.heroSectionContainer1LeftT2 : styles.heroSectionContainer1LeftT2Web}
                style={
                  _isMobile
                    ? {
                        fontSize: 24,
                        textAlign: "center",
                      }
                    : {
                        fontSize: 48,
                      }
                }
              >
                Invite MFDs/IFAs & get an assured iPad for FREE
              </div>
              <div
                style={
                  _isMobile
                    ? {
                        display: "flex",
                        width: "100%",
                        maxWidth: 400,
                        marginTop: 30,
                      }
                    : {
                        display: "flex",
                        width: "100%",
                        maxWidth: 288,
                        marginTop: 92,
                      }
                }
              >
                <ButtonComponent
                  label={"Get invite link"}
                  type={ButtonTypeTokens.PRIMARY_LARGE}
                  width={ButtonWidthTypeTokens.FULL}
                  onClick={() => redirectToPartnerInviteAndEarn()}
                />
              </div>
              <div
                style={
                  _isMobile
                    ? {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: 12,
                      }
                    : {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 16,
                      }
                }
              >
                <div
                  style={{
                    paddingRight: 8,
                  }}
                >
                  <img
                    src={
                      "https://volt-images.s3.ap-south-1.amazonaws.com/partner_images/testimonial/samir_desai.png"
                    }
                    alt={"MFD advisors images"}
                    width={32}
                    height={32}
                  />
                </div>
                <div className={styles.heroSectionContainer1LeftT3}>
                  2000+ MFDs have joined the mission
                </div>
              </div>
            </div>
            <div
              className={styles.heroSectionContainer1Right}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                <img
                  src={
                    "https://volt-images.s3.ap-south-1.amazonaws.com/ipadPromo2.png"
                  }
                  width={_isMobile ? 342 : 502}
                  height={_isMobile ? 270 : 394}
                />
              </div>
              <div
                className={styles.heroSectionContainer1RightTandC}
                style={
                  _isMobile
                    ? {}
                    : {
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }
                }
                onClick={() =>
                    redirectTo(Links.InviteAndEarnTermsAndConditions, "_blank")
                }
              >
                <span
                  style={{
                    color: "#1434CB",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                >
                  T&C Apply.
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
    [_isMobile, imageIndex]
  );

  return <>{_child}</>;
};

export default HeroSection;
