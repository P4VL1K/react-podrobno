import React from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion2} from "./2UncontrolledAccordion";



export default {
    title: 'UncontrolledAccordion2 stories',
    component: UncontrolledAccordion2
}

const callback = action('accordion')

export const ModeChanging = () => {
    return  <UncontrolledAccordion2 titleValue={'List'}/>
}
