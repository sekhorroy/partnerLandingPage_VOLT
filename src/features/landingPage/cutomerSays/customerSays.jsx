import './customerSays.css'
import CustomerSaysCarasoul from "./CustomerSaysCarasoul";
import rightArrowBlack from './assets/rightBlack.svg';
import leftArrowGrey from './assets/leftGrey.svg';
import rightArrowGrey from './assets/rightGrey.svg';
import leftArrowBlack from './assets/leftBlack.svg';
import {useRef, useState} from "react";

const customerSaysData = [
    {
        image: './assets/customer1.png',
        name: 'Karthik Munuswamy',
        testimony: 'It’s a really good app to get a personal loan, especially in times of emergencies.',
        place: 'Chennai'
    },
    {
        image: './assets/customer1.png',
        name: 'Karthik Munuswamy 1',
        testimony: 'It’s a really good app to get a personal loan, especially in times of emergencies.',
        place: 'Chennai'
    },
    {
        image: './assets/customer1.png',
        name: 'Karthik Munuswamy 2',
        testimony: 'It’s a really good app to get a personal loan, especially in times of emergencies.',
        place: 'Chennai'
    },
    {
        image: './assets/customer1.png',
        name: 'Karthik Munuswamy 3',
        testimony: 'It’s a really good app to get a personal loan, especially in times of emergencies.',
        place: 'Chennai'
    }
]

function CustomerSays() {
    var scrl = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);


    const slide = (shift) => {
        if(scrl && scrl.current ) {
            scrl.current.scrollLeft += shift;
            setscrollX(scrollX + shift);

            if (
                Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
                scrl.current.offsetWidth
            ) {
                setscrolEnd(true);
            } else {
                setscrolEnd(false);
            }
        }
    };

    return(
        <div className="CustomerSaysContainer">
            <div>
                <div className="CustomerSaysTitle">
                    Why people love volt money
                </div>
                <div className="CustomerSaysSubTitleContainer">
                    <h2 className="CustomerSaysSubTitle">
                        What our customers say
                    </h2>
                    <div className="CustomerSaysButtonContainerWeb">
                        <div className="CustomerSaysImageContainer" onClick={()=>slide(-150)}>
                            <img style={{width: 20, height: 20}} src={(scrl && scrl.current && scrl.current.scrollLeft === 0)?leftArrowGrey:leftArrowBlack} alt=""/>
                        </div>
                        <div style={{width: '16px'}}></div>
                       <div  className="CustomerSaysImageContainer" onClick={()=>slide(150)}>
                           <img style={{width: 20, height: 20}}  src={scrolEnd?rightArrowGrey:rightArrowBlack} alt=""/>
                       </div>
                    </div>
                </div>

                <div className="CustomerSaysContainerMob">
                    <CustomerSaysCarasoul customerSaysData={customerSaysData}/>
                </div>

                <div className="CustomerSaysItemContainer" ref={scrl}>
                    {
                        customerSaysData && customerSaysData.map((customer, index) => {
                            return (
                                <>
                                    <div key={index} className="CustomerSaysItem">
                                        <div className="CustomerSaysItemImageContainer">
                                            <img className="CustomerSaysItemImage" src={require(`${customer.image}`)} alt="customer_photo"/>
                                        </div>
                                        <div className="CustomerSaysItemTestimony">
                                            {customer.testimony}
                                        </div>
                                        <div className="CustomerSaysItemDivider"></div>
                                        <div className="CustomerSaysItemIdentity">
                                            <div className="CustomerSaysItemIdentityName">
                                                { customer.name }
                                            </div>
                                            <div className="CustomerSaysItemIdentityPlace">
                                                { customer.place }
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default CustomerSays;