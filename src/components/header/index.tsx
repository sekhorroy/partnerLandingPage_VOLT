import { isMobile } from "@/configs/utils";
import { useMemo } from "react";
import { CardProps, CardTypes } from "@/components/card/types";
import { ContactUsHeader } from "@/components/header/contactUsHeader";
import { PartnerHeader } from "@/components/header/partnerHeader";
import { HeaderProps, HeaderType } from "@/components/header/type";
import {AboutHeader} from "@/components/header/aboutHeader";
import {InvestorHeader} from "@/components/header/investorHeader";

export const Header: React.FunctionComponent<HeaderProps> = ({ type, ref }) => {

  const _child = useMemo(() => {
    if (type === HeaderType.CONTACT_US) {
      return <ContactUsHeader type={HeaderType.CONTACT_US} />;
    } else if (type === HeaderType.ABOUT) {
      return <AboutHeader type={HeaderType.ABOUT} />;
    } else if (type === HeaderType.INVESTOR) {
      return <InvestorHeader type={HeaderType.INVESTOR} />;
    } else {
      return <PartnerHeader type={type} />;
    }
  }, [type]);

  return (
    <>
      <div style={{
        width: '100%',
        boxSizing: 'border-box'
      }}>{_child}</div>
    </>
  );
};
