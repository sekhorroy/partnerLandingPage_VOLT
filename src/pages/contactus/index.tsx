import {getScreenX} from "@/configs/utils";
import {Header} from "@/components/header";
import {HeaderType} from "@/components/header/type";

export default function Contactus() {
    const width = getScreenX();
    console.log(width);
    return (
        <div style={{width: width}}>
            <Header type={HeaderType.CONTACT_US} />
        </div>
    );
}