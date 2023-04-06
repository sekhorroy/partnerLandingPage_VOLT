import React, { ReactNode, useEffect, useMemo, useState } from "react";
import styles from "./carousal.module.css";
import { useSwipeable } from "react-swipeable";

//@ts-ignore
export const CarousalItem = ({ children, width }) => {
  return (
    <div className={styles.carousalItem} style={{ width: width }}>
      {children}
    </div>
  );
};

//@ts-ignore
export const Carousal = ({ children, data, showIndicator = true }) => {
  const [_activeId, setActiveId] = useState(0);

  const updateActiveId = (index: number, direction?: string) => {
    if (direction) {
      if (direction && direction === "right") {
        if (_activeId < data.length - 1) {
          setActiveId(index);
        } else if (_activeId === data.length - 1) {
              setActiveId(0);
          }
      } else if (direction && direction === "left") {
        if (_activeId > 0) {
          setActiveId(index);
        } else if (_activeId === 0) {
              setActiveId(data.length-1);
          }
      }
    } else {
      setActiveId(index);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateActiveId(_activeId + 1, "right"),
    onSwipedRight: () => updateActiveId(_activeId - 1, "left"),
  });

  return (
    <div className={styles.carousal} {...handlers}>
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${_activeId * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div
        className={styles.carousalC1}
        style={{
          paddingTop: 16,
        }}
      >
        {
          //@ts-ignore
          showIndicator &&
            data &&
            //@ts-ignore
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    _activeId === index
                      ? styles.carousalC1IndicatorActive
                      : styles.carousalC1Indicator
                  }
                  onClick={() => updateActiveId(index)}
                />
              );
            })
        }
      </div>
    </div>
  );
};
