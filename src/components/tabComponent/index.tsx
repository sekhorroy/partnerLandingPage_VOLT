import { isMobile } from "@/configs/utils";
import { TabComponentProps } from "@/components/tabComponent/type";
import {useCallback, useMemo, useState} from "react";
import styles from "./tabComponent.module.css";

export const TabComponent: React.FunctionComponent<TabComponentProps> = ({
  activeId = 0,
  reactChildren,
  tabOptions = [],
}) => {
  const _isMobile: boolean = isMobile();
  const [_activeId, setActiveId] = useState(activeId);

  const handleChangeTab = async (activeId: number) => {
      console.log(activeId);
      await setActiveId(activeId);
  }

  const _child = useMemo(() => {
    return (
      <>
        <div className={styles.tabHeader}>
          {tabOptions && tabOptions.length > 0 ? (
            <>
              {
                  tabOptions.map((item, index) => {
                return (
                      <div key={`${item.label}`} className={styles.tabHeader1} onClick={()=>handleChangeTab(item.value)}>
                          <div
                              className={
                                  _activeId === index
                                      ? _isMobile ? styles.tabHeaderT1_active : styles.tabHeaderT1_active_Web
                                      : _isMobile ? styles.tabHeaderT1 : styles.tabHeaderT1Web
                              }
                              style={_isMobile ? {paddingBottom: 16}:{paddingBottom: 12}}
                          >
                              <h4>{item?.label}</h4>
                          </div>
                          <div
                              className={
                                  _activeId === index
                                      ? styles.tabDivider_active
                                      : styles.tabDivider
                              }
                          ></div>
                      </div>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
        <div className={styles.tabBody}>
          {
            // safe check
            _activeId < reactChildren.length ? (
              <>{reactChildren[_activeId]}</>
            ) : (
              <></>
            )
          }
        </div>
      </>
    );
  }, [_activeId, reactChildren, _isMobile]);

  return (
    <>
      <div>{_child}</div>
    </>
  );
};
