import { isMobile } from "@/configs/utils";
import { useMemo } from "react";
import { CardProps, CardTypes } from "@/components/card/types";
import { ContactUsHeader } from "@/components/header/contactUsHeader";
import { PartnerHeader } from "@/components/header/partnerHeader";
import { HeaderProps, HeaderType } from "@/components/header/type";

export const Header: React.FunctionComponent<HeaderProps> = ({ type, ref }) => {

  const _child = useMemo(() => {
    if (type === HeaderType.CONTACT_US) {
      return <ContactUsHeader type={HeaderType.CONTACT_US} />;
    } else {
      return <PartnerHeader type={HeaderType.DEFAULT} />;
    }
  }, [type]);

  return (
    <>
      <div>{_child}</div>
    </>
  );
};
