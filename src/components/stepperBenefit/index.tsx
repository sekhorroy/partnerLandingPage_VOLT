import { isMobile } from "@/configs/utils";
import { TabComponentProps } from "@/components/tabComponent/type";
import { useCallback, useMemo, useState } from "react";
import styles from "./stepperBenefit.module.css";
import { StepperBenefitProps } from "@/components/stepperBenefit/type";

export const StepperBenefit: React.FunctionComponent<StepperBenefitProps> = ({
  activeId = 0,
  data,
    setActive,
}) => {
  const _isMobile: boolean = isMobile();
  const [_activeId, setActiveId] = useState(activeId);

  const handleClick =  async (index: number) => {
    setActive && await setActive(index);
    await setActiveId(index);
  };

  const _child = useMemo(() => {
    return (
      <>
        <div className={styles.stepperBenefitContainer} style={_isMobile ? {maxWidth: 400} : {}}>
          {data &&
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    _activeId === index
                      ? styles.stepperBenefitC1Selected
                      : styles.stepperBenefitC1
                  }
                  style={{
                    paddingLeft: 16,
                    paddingRight: 16
                  }}
                  onClick={() => handleClick(index)}
                >
                  <>
                    {index !== data.length - 1 ? (
                      <div
                        className={styles.verticalLine}
                        style={
                        _isMobile && _activeId === index
                            ? {
                                height: 20,
                                position: "relative",
                                top: 90,
                                left: 22,
                              }
                            : _isMobile && _activeId !== index ? {
                                height: 50,
                                position: "relative",
                                top: 50,
                                left: 22,
                              } : _activeId === index ? {
                              height: 22,
                              position: "relative",
                              top: 95,
                              left: 22,
                            } : {
                              height: 55,
                              position: "relative",
                              top: 50,
                              left: 22,
                            }
                        }
                      ></div>
                    ) : (
                      <></>
                    )}
                    <div
                      className={styles.stepperBenefitChildC1}
                      style={{
                        marginRight: 12,
                      }}
                    >
                      {index + 1}
                    </div>
                    <div className={styles.stepperBenefitChildC2}>
                      <div className={_isMobile ? styles.stepperBenefitChildC2T1 : styles.stepperBenefitChildC2T1Web}>
                        {item.title}
                      </div>
                      <div className={_isMobile ? styles.stepperBenefitChildC2T2 : styles.stepperBenefitChildC2T2Web}>
                        {item.subTitle}
                      </div>
                    </div>
                  </>
                </div>
              );
            })}
        </div>
      </>
    );
  }, [_activeId, _isMobile]);

  return (
    <>
      <div>{_child}</div>
    </>
  );
};
