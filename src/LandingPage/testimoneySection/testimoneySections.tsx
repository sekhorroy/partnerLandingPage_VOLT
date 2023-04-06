import {isMobile} from "@/configs/utils";
import styles from "./testimoney.module.css";
import {useEffect, useMemo, useState} from "react";
import {Card} from "@/components/card";
import {CardProps, CardTypes} from "@/components/card/types";
import {Carousal} from "@/components/carousal";
import {number} from "prop-types";
import CarouselComponent, {CarouselItem} from "@/components/carousal/carousalComponent/carousal";

const customerData:CardProps[] = [{
    type: CardTypes.TESTIMONY,
    name: 'Samir Desai 1',
    title: 'Founder and CEO of Desai Investmenst AMFI Registered mutual fund distributor - Dahod, Gujrat',
    subTitle: 'I am grateful for the exceptional service provided by Volt during a time of crisis. My client needed emergency funds for house renovation due to flooding and Volt responded promptly',
    leftIcon: {
        url: '/images/customerImage1.png',
        width: 56,
        height: 56,
        alt: 'customer image 1'
    }
}, {
    type: CardTypes.TESTIMONY,
    name: 'Samir DASD 2',
    title: 'Founder and CEO of Desai Investmenst AMFI Registered mutual fund distributor - Dahod, Gujrat',
    subTitle: 'I am grateful for the exceptional service provided by Volt during a time of crisis. My client needed emergency funds for house renovation due to flooding and Volt responded promptly',
    leftIcon: {
        url: '/images/customerImage1.png',
        width: 56,
        height: 56,
        alt: 'customer image 1'
    }
}, {
    type: CardTypes.TESTIMONY,
    name: 'Samir DSADAS 3',
    title: 'Founder and CEO of Desai Investmenst AMFI Registered mutual fund distributor - Dahod, Gujrat',
    subTitle: 'I am grateful for the exceptional service provided by Volt during a time of crisis. My client needed emergency funds for house renovation due to flooding and Volt responded promptly',
    leftIcon: {
        url: '/images/customerImage1.png',
        width: 56,
        height: 56,
        alt: 'customer image 1'
    }
}, {
    type: CardTypes.TESTIMONY,
    name: 'Samir SAD 4',
    title: 'Founder and CEO of Desai Investmenst AMFI Registered mutual fund distributor - Dahod, Gujrat',
    subTitle: 'I am grateful for the exceptional service provided by Volt during a time of crisis. My client needed emergency funds for house renovation due to flooding and Volt responded promptly',
    leftIcon: {
        url: '/images/customerImage1.png',
        width: 56,
        height: 56,
        alt: 'customer image 1'
    }
}]

export default function TestimoneySection() {
    const _isMobile: boolean = isMobile();
    const [_activeId, setActiveId] = useState(0);


    const renderCards = () => {
        return (
            <>
                <CarouselComponent>
                    {
                        customerData.map((item, index) => (
                            <>
                                <CarouselItem width={'100%'}>
                                    <Card type={CardTypes.TESTIMONY} leftIcon={item.leftIcon} subTitle={item.subTitle} title={item.title}
                                          name={item.name}/>
                                </CarouselItem>
                            </>
                        ))
                    }
                </CarouselComponent>
            </>
        )
    }

    const updateActiveId = (id : number) => {

        setActiveId(id)
    }

    useEffect(()=>{
        console.log(" Herqer 1212 ");
    }, [_activeId])

    const _child = useMemo(() => {
        return (
            <div
                className={styles.testimoneyContainer} style={{
                    paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 48
            }}
            >
                <div className={styles.testimoneyContainer1}>
                    <div className={styles.testimoneyContainerT1}>
                        Why people love volt money
                    </div>
                    <div className={styles.testimoneyContainerT2} style={{
                        paddingTop: 8
                    }}>
                        What our partners say
                    </div>
                    <div style={{
                        paddingTop: 24
                    }}>
                            {
                                customerData.map((item, index) => (
                                    <>
                                        <Card type={CardTypes.TESTIMONY} leftIcon={item.leftIcon} subTitle={item.subTitle} title={item.title}
                                              name={item.name}/>
                                    </>
                                ))
                            }
                    </div>
                </div>
            </div>
        )
    }, [_isMobile, _activeId]);

    return _child;
}
