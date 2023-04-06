import { isMobile } from "@/configs/utils";
import styles from "./testimoney.module.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/card";
import { CardProps, CardTypes } from "@/components/card/types";
import { Carousal, CarousalItem } from "@/components/carousal";
import { number } from "prop-types";
import Image from "next/image";
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

  const handleClick = (direction: string) => {
      console.log("handle Click")
      if(direction === 'left') {
          slide(-150)
      }
      if (direction === 'right') {
          slide(150)
      }
  };

    //@ts-ignore
  const slide = (shift) => {
      //@ts-ignore
    if (scrollRef && scrollRef.current) {
        //@ts-ignore
      scrollRef.current.scrollLeft += shift;
      setscrollX(scrollX + shift);

      if (
          //@ts-ignore
        Math.floor(scrollRef.current.scrollWidth - scrollRef.current.scrollLeft) <=
          //@ts-ignore
          scrollRef.current.offsetWidth
      ) {
        setscrolEnd(true);
      } else {
        setscrolEnd(false);
      }
    }
  };

  const _child = useMemo(() => {
    return (
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
                    justifyContent: "center",
                  }
                : {
                    paddingLeft: 16,
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
            <div>What our partners say</div>
            {!_isMobile ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 24,
                }}
              >
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
                  onClick={() => handleClick('left')}
                >
                  <Image
                    src={"/images/leftGrey.svg"}
                    alt={"arrow"}
                    width={32}
                    height={32}
                  />
                </div>
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
                  onClick={() => handleClick('right')}
                >
                  <Image
                    src={"/images/rigthBlack.svg"}
                    alt={"right"}
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            style={{
              paddingTop: 24,
            }}
          >
            {_isMobile ? (
              <Carousal data={customerData}>
                {customerData.map((item, index) => (
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
                {customerData.map((item, index) => (
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
    );
  }, [_isMobile, _activeId]);

  return _child;
}
