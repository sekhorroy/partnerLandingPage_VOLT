export type StepperBenefitData = {
    title?: string,
    subTitle?: string
}

export type StepperBenefitProps = {
    activeId: number,
    data: StepperBenefitData[],
    setActive?: (cb:any) => void;
}