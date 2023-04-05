import { isMobile } from "@/configs/utils";
import styles from "./HowItWorks.module.css";
import { useMemo } from "react";
import {StepperBenefit} from "@/components/stepperBenefit";
import {StepperBenefitData} from "@/components/stepperBenefit/type";

export default function HowItWorks() {
    const _isMobile: boolean = isMobile();

    const stepperData: StepperBenefitData[] = [{
        title: 'Join our family of 1000+ partners',
        subTitle: 'Empanel in less than 2 minutes and get instant access to our partner dashboard'
    }, {
        title: 'Create and share link',
        subTitle: 'Get your customized referral link and share it with your clients or MFDs'
    }, {
        title: 'Client signed up on Volt Money.',
        subTitle: 'Receive instant rewards when your clients or MFDs sign up through your referral link.'
    }, {
        title: 'Track client’s status',
        subTitle: 'Track your clients activities and earnings on our user-friendly dashboard.'
    }]

    const _child = useMemo(() => {
        return (
            <>
                <div className={styles.howItWorksContainer} style={{paddingTop: 48, paddingLeft: 16, paddingRight: 16}}>
                    <div className={styles.howItWorksContainer1}>
                        <div className={styles.howItWorksContainerT1}>
                           HOW IT WORKS
                        </div>
                        <div className={styles.howItWorksContainerT2}>
                            <h2 >
                                How does the Volt partner program work?
                            </h2>
                        </div>
                        <div>
                            <StepperBenefit activeId={0} data={stepperData} />
                        </div>
                    </div>
                </div>
            </>
        );
    }, [_isMobile]);

    return _child;
}
