import {string} from "prop-types";
import {ReactComponentElement} from "react";

export type TabComponentOptions = {
    label: string;
    value: number;
}

export type TabComponentProps = {
    activeId: number;
    reactChildren: JSX.Element[];
    tabOptions: TabComponentOptions[];
}