import React from "react";
import ControlledOnOff from "./ControlledOnOff";
import {action} from "@storybook/addon-actions";

const callback = action('value')

export default {
    title: 'ControlledOnOff stories',
    component: ControlledOnOff,
}

export const OnMode = () => <ControlledOnOff on={true} setOn={callback}/>
export const OffMode = () => <ControlledOnOff on={false} setOn={callback}/>
