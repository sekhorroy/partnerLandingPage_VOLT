import { isMobile } from "@/configs/utils";
import { useMemo } from "react";
import { CardProps, CardTypes } from "@/components/card/types";
import { BenefitCard } from "@/components/card/card_Benefits/card_Benefits";
import { TestimonyCard } from "@/components/card/card_Testimony/card_Testimony";
import { name } from "next/dist/telemetry/ci-info";
import { ContactUsHeader } from "@/components/header/contactUsHeader";
import { ContactUsCard } from "@/components/card/card_ContactUs/cardContactUs";
import { TeamCard } from "@/components/card/team_Card/teamCard";
import { InvestorCard } from "@/components/card/investor_Card/investorCard";

export const Card: React.FunctionComponent<CardProps> = ({
  leftIcon = null,
  type = CardTypes.VOLT_BENEFIT,
  title,
  subTitle,
  name,
  cta,
  ctaLabel,
  imageUrl,
  onClickCta,
  linkedInUrl,
}) => {
  const _isMobile: boolean = isMobile();

  const _child = useMemo(() => {
    if (type === CardTypes.TESTIMONY) {
      return (
        <TestimonyCard
          type={CardTypes.TESTIMONY}
          title={title}
          subTitle={subTitle}
          leftIcon={leftIcon || undefined}
          name={name ? name : ""}
        />
      );
    } else if (type === CardTypes.CONTACT_US) {
      return (
        <ContactUsCard
          type={CardTypes.CONTACT_US}
          title={title}
          subTitle={subTitle}
          leftIcon={leftIcon || undefined}
          name={name ? name : ""}
          cta={cta}
          ctaLabel={ctaLabel}
          imageUrl={imageUrl}
          onClickCta={onClickCta}
        />
      );
    } else if (type === CardTypes.TEAM_CARD) {
      return (
        <TeamCard
          type={CardTypes.TEAM_CARD}
          title={title}
          subTitle={subTitle}
          imageUrl={imageUrl}
          onClickCta={onClickCta}
          name={name}
          linkedInUrl={linkedInUrl}
        />
      );
    } else if (type === CardTypes.INVESTOR_CARD) {
      return (
        <InvestorCard
          type={CardTypes.INVESTOR_CARD}
          title={title}
          subTitle={subTitle}
          imageUrl={imageUrl}
          onClickCta={onClickCta}
          linkedInUrl={linkedInUrl}
        />
      );
    } else {
      return (
        <BenefitCard
          type={CardTypes.VOLT_BENEFIT}
          title={title}
          subTitle={subTitle}
          leftIcon={leftIcon || undefined}
        />
      );
    }
  }, [type, subTitle, title, leftIcon, name, cta, ctaLabel, onClickCta]);

  return (
    <>
      <div>{_child}</div>
    </>
  );
};
