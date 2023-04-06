import React, {useEffect, useMemo, useState} from "react";
import styles from "./carousal.module.css";
import { CarousalProps } from "@/components/carousal/type";
import CarouselComponent, {CarouselItem} from './carousalComponent/carousal';

export const Carousal: React.FunctionComponent<CarousalProps> = ({
  reactChildren,
    setActive,
}) => {
  const [_activeId, setActiveId] = useState(0);
  const [refreshView , setRefresh] = useState(1)
  const handleClick =  (index: number) => {
      setActiveId(index);
      setActive && setActive(index);
  };

  useEffect(()=>{
      setActiveId(_activeId)
      setRefresh(refreshView + 1)
  }, [_activeId]);


  const getReactChildToRender = () => {
      return reactChildren.map((child, index) => (
          <>
              { child }
          </>
      ));
  }

  // const _child = useMemo(() => {
  //   return (
  //     <div className={styles.carousalContainer}>
  //       <div className={styles.carousalContainerC1}>
  //           {
  //               getReactChildToRender()
  //           }
  //       </div>
  //       <div
  //         className={styles.carousalContainerC2}
  //         style={{
  //           paddingTop: 16,
  //         }}
  //       >
  //         {reactChildren.map((item, index) => {
  //           return (
  //             <>
  //               <div
  //                 className={
  //                   _activeId === index
  //                     ? styles.carousalDotActive
  //                     : styles.carousalDot
  //                 }
  //                 onClick={()=>handleClick(index)}
  //               />
  //             </>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
  // }, [_activeId]);

    //carousalContainerC1 = .carousel


      return (
        <div className={styles.carousalContainer}>
            <div className={styles.carousalContainerC1}>
                <CarouselComponent >
                    {
                         reactChildren.map((item, index) => (
                            <CarouselItem key={index} width={`100%`}>
                                {
                                    item
                                }
                            </CarouselItem>
                        ))
                    }
                </CarouselComponent>
            </div>
            <div
                className={styles.carousalContainerC2}
                style={{
                    paddingTop: 16,
                }}
            >
                {reactChildren.map((item, index) => {
                    return (
                        <>
                            <div
                                className={
                                    _activeId === index
                                        ? styles.carousalDotActive
                                        : styles.carousalDot
                                }
                                onClick={()=>handleClick(index)}
                            />
                        </>
                    );
                })}
            </div>
        </div>
    )

/*    const _child = useMemo(() => {
        console.log("Child re-rerenderd" ,reactChildren[_activeId])
        return refreshView ? (
            <div className={styles.carousalContainer}>
                <div className={styles.carousalContainerC1}>
                     {refreshView &&
                          reactChildren[_activeId]
                    }
                </div>
                <div
                    className={styles.carousalContainerC2}
                    style={{
                        paddingTop: 16,
                    }}
                >
                    {reactChildren.map((item, index) => {
                        return (
                            <>
                                <div
                                    className={
                                        _activeId === index
                                            ? styles.carousalDotActive
                                            : styles.carousalDot
                                    }
                                    onClick={()=>handleClick(index)}
                                />
                            </>
                        );
                    })}
                </div>
            </div>
        ) : null;
    }, [_activeId]);*/


};
