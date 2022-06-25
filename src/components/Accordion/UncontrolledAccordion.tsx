import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

export type AccordionPropsType = {
    titleValue: string,
}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (<div>
        {/*<AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>*/}
        <AccordionTitle title={props.titleValue} setCollapsed={() => {dispatch({type: TOGGLE_COLLAPSED})}}/>
        { !state.collapsed && <AccordionBody title={'Hello'}/> }
    </div>)
    // <AccordionBody title={'Hello'}/>
};






type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.setCollapsed}>{props.title}</h3>
};

type AccordionBodyPropsType = {
    title: string
}

function AccordionBody(props:AccordionBodyPropsType ) {
    return (
        <ul>
            <li>{props.title}</li>
            <li>{props.title}</li>
            <li>{props.title}</li>
        </ul>
    )
};

export default UncontrolledAccordion