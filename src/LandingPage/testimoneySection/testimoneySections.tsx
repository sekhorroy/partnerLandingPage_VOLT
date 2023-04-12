import { isMobile } from "@/configs/utils";
import styles from "./testimoney.module.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/card";
import { CardProps, CardTypes } from "@/components/card/types";
import { Carousal, CarousalItem } from "@/components/carousal";
import { number } from "prop-types";
import Image from "next/image";
import axios from "axios";
import { Simulate } from "react-dom/test-utils";
import load = Simulate.load;
// import CarouselComponent, {CarouselItem} from "@/components/carousal/carousalComponent/carousal";

const customerData: CardProps[] = [
  {
    type: CardTypes.TESTIMONY,
    name: "Samir Desai 1",
    title:
      "Founder and CEO of Desai Investmenst AMFI Registered mutual fund distributor - Dahod, Gujrat",
    subTitle:
      "I am grateful for the exceptional service provided by Volt during a time of crisis. My client needed emergency funds for house renovation due to flooding and Volt responded promptly",
    leftIcon: {
      url: "/images/customerImage1.png",
      width: 56,
      height: 56,
      alt: "customer image 1",
    },
  },
  {
    type: CardTypes.TESTIMONY,
    name: "Samir DASD 2",
    title:
      "Founder and CEO of Desai Investmenst AMFI Registered mutual fund distributor - Dahod, Gujrat",
    subTitle:
      "I am grateful for the exceptional service provided by Volt during a time of crisis. My client needed emergency funds for house renovation due to flooding and Volt responded promptly",
    leftIcon: {
      url: "/images/customerImage1.png",
      width: 56,
      height: 56,
      alt: "customer image 1",
    },
  },
  {
    type: CardTypes.TESTIMONY,
    name: "Samir DSADAS 3",
    title:
      "Founder and CEO of Desai Investmenst AMFI Registered mutual fund distributor - Dahod, Gujrat",
    subTitle:
      "I am grateful for the exceptional service provided by Volt during a time of crisis.",
    leftIcon: {
      url: "/images/customerImage1.png",
      width: 56,
      height: 56,
      alt: "customer image 1",
    },
  },
  {
    type: CardTypes.TESTIMONY,
    name: "Samir SAD 4",
    title:
      "Founder and CEO of Desai Investmenst AMFI Registered mutual fund distributor - Dahod, Gujrat",
    subTitle:
      "I am grateful for the exceptional service provided by Volt during a time of crisis. My client needed emergency funds for house renovation due to flooding and Volt responded promptly",
    leftIcon: {
      url: "/images/customerImage1.png",
      width: 56,
      height: 56,
      alt: "customer image 1",
    },
  },
];

export default function TestimoneySection() {
  const _isMobile: boolean = isMobile();
  const [_activeId, setActiveId] = useState(0);
  const scrollRef = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  const [scrollLeftEnd, setScrollLeftEnd] = useState(true);
  const [_data, setData] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(false);

  const handleClick = (direction: string) => {
    console.log("handle Click");
    if (direction === "left") {
      slide(-250);
    }
    if (direction === "right") {
      slide(250);
    }
  };

  //@ts-ignore
  const slide = (shift) => {
    //@ts-ignore
    if (scrollRef && scrollRef.current) {
      //@ts-ignore
      scrollRef.current.scrollLeft += shift;

      setscrollX(scrollX + shift);

      //@ts-ignore
      if (scrollRef.current.scrollLeft === 0) {
        setScrollLeftEnd(true);
      } else {
        setScrollLeftEnd(false);
      }

      // console.log("scrollRef.current.scrollWidth: ", scrollRef.current.scrollWidth - scrollRef.current.scrollLeft);
      // console.log("scrollRef.current.offsetWidth: ", scrollRef.current.offsetWidth);
      if (
        //@ts-ignore
        Math.floor(
          //@ts-ignore
          scrollRef.current.scrollWidth - scrollRef.current.scrollLeft
        ) <=
        //@ts-ignore
        scrollRef.current.offsetWidth
      ) {
        setscrolEnd(true);
        console.log("setscrolEnd: ", scrolEnd);
      } else {
        setscrolEnd(false);
        console.log("setscrolEnd: ", scrolEnd);
      }
    }
  };

  const getData = async () => {
    await setLoading(true);
    const response = await axios.get(
      // "https://v1.nocodeapi.com/voltmoney/google_sheets/IwjmEWFMjLgGfPdV?tabId=Sheet1"
      "https://v1.nocodeapi.com/admin8volt/google_sheets/HfvGfmNemhksFKOg?tabId=partner_testimonials"
    );
    const Data = response.data.data;
    console.log("response: ", Data);
    let dataTransform: CardProps[] = [];
    //@ts-ignore
    Data.map((item, index) => {
      dataTransform.push({
        type: CardTypes.TESTIMONY,
        name: item?.name,
        title: item?.bio,
        subTitle: item?.message,
        leftIcon: {
          url: item?.image,
          width: 56,
          height: 56,
          alt: "Volt money partners",
        },
      });
    });

    await setData(dataTransform);
    await setLoading(false);
  };

  useEffect(() => {
    console.log("get data : ", getData());
  }, []);

  const _scrollButton = useMemo(() => {
    return (
      <>
        {!_isMobile ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 24,
            }}
          >
            {scrollLeftEnd ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 56,
                  height: 56,
                }}
                className={styles.buttonNotActive}
              >
                <Image
                  src={"/images/leftGrey.svg"}
                  alt={"arrow"}
                  width={32}
                  height={32}
                />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 56,
                  height: 56,
                }}
                className={styles.buttonActive}
                onClick={() => handleClick("left")}
              >
                <Image
                  src={"/images/leftBlack.svg"}
                  alt={"arrow"}
                  width={32}
                  height={32}
                />
              </div>
            )}

            {scrolEnd ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 56,
                  height: 56,
                }}
                className={styles.buttonNotActive}
              >
                <Image
                  src={"/images/rightGrey.svg"}
                  alt={"right"}
                  width={32}
                  height={32}
                />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 56,
                  height: 56,
                }}
                className={styles.buttonActive}
                onClick={() => handleClick("right")}
              >
                <Image
                  src={"/images/rigthBlack.svg"}
                  alt={"right"}
                  width={32}
                  height={32}
                />
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }, [scrollRef, scrollLeftEnd, scrolEnd, _isMobile]);

  const _child = useMemo(() => {
    return !loading ? (
      <div
        className={styles.testimoneyContainer}
        style={{
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: 48,
        }}
      >
        <div
          className={styles.testimoneyContainer1}
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
            className={styles.testimoneyContainerT1}
            style={
              _isMobile
                ? {
                    display: "flex",
                    flexDirection: "row",
                    fontFamily: "Inter",
                    fontWeight: "400",
                    fontStyle: "normal",
                    fontSize: 14,
                  }
                : {
                    paddingLeft: 16,
                    fontFamily: "Inter",
                    fontWeight: "500",
                    fontStyle: "normal",
                    fontSize: 16,
                  }
            }
          >
            Why people love volt money
          </div>
          <div
            className={styles.testimoneyContainerT2}
            style={
              _isMobile
                ? {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    paddingTop: 8,
                  }
                : {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingLeft: 16,
                  }
            }
          >
            <div
              style={
                _isMobile
                  ? {
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: 24,
                    }
                  : {
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: 32,
                    }
              }
            >
              What our partners say
            </div>
            {_scrollButton}
          </div>
          <div
            style={{
              paddingTop: 24,
            }}
          >
            {_isMobile ? (
              <Carousal data={customerData}>
                {_data.map((item, index) => (
                  <CarousalItem key={index} width={"100%"}>
                    <div
                      style={{
                        minWidth: 323,
                      }}
                    >
                      <Card
                        type={CardTypes.TESTIMONY}
                        leftIcon={item.leftIcon}
                        subTitle={item.subTitle}
                        title={item.title}
                        name={item.name}
                      />
                    </div>
                  </CarousalItem>
                ))}
              </Carousal>
            ) : (
              <div
                ref={scrollRef}
                className={styles.testimoneyContainerWebContainer1}
              >
                {_data.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      maxWidth: 500,
                      minWidth: 500,
                    }}
                  >
                    <Card
                      type={CardTypes.TESTIMONY}
                      leftIcon={item.leftIcon}
                      subTitle={item.subTitle}
                      title={item.title}
                      name={item.name}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    ) : (
      <></>
    );
  }, [_isMobile, _activeId, loading, scrollLeftEnd, scrolEnd]);

  return !loading ? _child : <></>;
}
