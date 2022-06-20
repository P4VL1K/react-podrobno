import React, {useState} from "react";
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion stories',
    component: Accordion
}

const callback = action('accordion')
const onclickCallback = action('some item was clicked')
//const onclickCallback = (...args: any[]) => {}

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'}
                                                  collapsed={true}
                                                  setAccordionCollapsed={callback}
                                                  onClick={onclickCallback}
                                                  items={[]}/>
export const UsersCollapsedMode = () => <Accordion titleValue={'Users'}
                                                   collapsed={false}
                                                   setAccordionCollapsed={callback}
                                                   onClick={onclickCallback}
                                                   items={
                                                       [{title: 'Pasha', value: 1},
                                                           {title: 'Dasha', value: 2},
                                                           {title: 'Alesya', value: 3},
                                                           {title: 'Tolya', value: 4},
                                                           {title: 'Lena', value: 5}]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      setAccordionCollapsed={() => setValue(!value)}
                      onClick={onclickCallback}
                      items={
                          [{title: 'Pasha', value: 1},
                              {title: 'Dasha', value: 2},
                              {title: 'Alesya', value: 3},
                              {title: 'Tolya', value: 4},
                              {title: 'Lena', value: 5}]}/>
}
