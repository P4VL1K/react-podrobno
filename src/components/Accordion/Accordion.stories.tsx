import React, {useState} from "react";
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Accordion stories',
    component: Accordion
}

const callback = action('accordion')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} setAccordionCollapsed={callback}/>
export const UsersCollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} setAccordionCollapsed={callback}/>

export const ModeChanging = () => {
    const [value,setValue] = useState<boolean>(true)
    return  <Accordion titleValue={'Users'} collapsed={value} setAccordionCollapsed={()=>setValue(!value)}/>
}
