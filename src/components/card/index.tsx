import { isMobile } from "@/configs/utils";
import { useMemo } from "react";
import { CardProps, CardTypes } from "@/components/card/types";
import { BenefitCard } from "@/components/card/card_Benefits/card_Benefits";
import { TestimonyCard } from "@/components/card/card_Testimony/card_Testimony";
import {name} from "next/dist/telemetry/ci-info";

export const Card: React.FunctionComponent<CardProps> = ({
  leftIcon = null,
  type = CardTypes.VOLT_BENEFIT,
  title,
  subTitle,
    name
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
          name={name ? name : ''}
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
  }, [type, subTitle, title, leftIcon, name]);

  return (
    <>
      <div>{_child}</div>
    </>
  );
};
