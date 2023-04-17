import { checkRegexEmail, isMobile } from "@/configs/utils";
import styles from "./newsLetter.module.css";
import { TextInput } from "@/components/input";
import { ButtonComponent } from "@/components/button";
import {
  ButtonTypeTokens,
  ButtonWidthTypeTokens,
} from "@/components/button/type";
import { useEffect, useState } from "react";
import { InputColorTokens } from "@/components/input/type";
import { api } from "@/configs/constants";
import axios from "axios";
import { Alert, Snackbar } from "@mui/material";

export default function NewsLetterSection() {
  const _isMobile = isMobile();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successToastState, setSuccessToastState] = useState(false);
  const [failureToastState, setFailureToastState] = useState(false);

  const vertical = "top";
  const horizontal = "center";

  const openSuccessToast = async () => {
    await setSuccessToastState(true);
    setTimeout(async () => {
      await handleClose();
    }, 3000);
  };
  const openFailureToast = async () => {
    await setFailureToastState(true);
    setTimeout(async () => {
      await handleClose();
    }, 3000);
  };
  const handleClose = async () => {
    await setSuccessToastState(false);
    await setFailureToastState(false);
  };

  const getData = async () => {
    setLoading(true);
    const data = [[email]];
    const response = await axios.post(api.newsLetterApi, data, {
      headers: {
        "Content-type": "application/json",
      },
    });
    const Data = response.data.data;
    if (response.status === 200) {
      console.log("Success");
      openSuccessToast();
    } else {
      openFailureToast();
    }
    console.log("response api data 123 : ", response);
    setLoading(false);
  };

  const handleSubscribe = () => {
    getData();
  };

  // @ts-ignore
  return (
    <div
      className={styles.newsLetterSectionMainContainer}
      style={
        _isMobile
          ? {
              paddingLeft: 16,
              paddingRight: 16,
            }
          : {
              paddingLeft: 16,
              paddingRight: 16,
              boxSizing: "border-box",
            }
      }
    >
      <div
        className={styles.newsLetterSectionMainContainerC1}
        style={
          _isMobile
            ? {
                paddingTop: 32,
                paddingBottom: 32,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }
            : {
                paddingTop: 48,
                paddingBottom: 48,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: 16,
                paddingRight: 16,
              }
        }
      >
        <div>
          <div
            className={styles.newsLetterSectionMainContainerC1T1}
            style={
              _isMobile
                ? {
                    fontSize: 24,
                  }
                : {
                    fontSize: 32,
                  }
            }
          >
            Subscribe to our newsletter
          </div>
          <div
            className={styles.newsLetterSectionMainContainerC1T2}
            style={
              _isMobile
                ? {
                    fontSize: 16,
                    paddingTop: 14,
                  }
                : {
                    paddingTop: 8,
                    fontSize: 16,
                  }
            }
          >
            Join our subscribers list to get the latest news & updates
          </div>
        </div>
        <div
          className={styles.subscriptionContainer}
          style={
            _isMobile
              ? {
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginTop: 14,
                  maxWidth: 400,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 16,
                  paddingBottom: 16,
                }
              : {
                  display: "flex",
                  flexDirection: "row",
                  gap: 8,
                  marginTop: 14,
                  maxWidth: 500,
                  paddingLeft: 32,
                  paddingRight: 32,
                  paddingTop: 21,
                  paddingBottom: 24,
                }
          }
        >
          <TextInput
            label={"Email address"}
            onChange={setEmail}
            color={
              checkRegexEmail(email)
                ? InputColorTokens.SUCCESS
                : InputColorTokens.ERROR
            }
            // helperText={checkRegexEmail(email) ? '' : 'Please enter a valid email address'}
          />
          <ButtonComponent
            label={"Subscribe"}
            type={
              !checkRegexEmail(email)
                ? ButtonTypeTokens.DISABLED_LARGE
                : ButtonTypeTokens.PRIMARY_LARGE
            }
            width={
              _isMobile
                ? ButtonWidthTypeTokens.FULL
                : ButtonWidthTypeTokens.CONTENT
            }
            onClick={() => handleSubscribe()}
            loading={loading}
          />
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={successToastState}
            onClose={handleClose}
            key={vertical + horizontal}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Subscribed successfully
            </Alert>
          </Snackbar>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={failureToastState}
            onClose={handleClose}
            key={vertical + horizontal}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Something went wrong
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}
