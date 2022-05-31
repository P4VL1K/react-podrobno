import React, {useState} from "react";


export type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean
}


function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return (<div>
        <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
        { !collapsed && <AccordionBody title={'Hello'}/> }
    </div>)

    // <AccordionBody title={'Hello'}/>
};


type AccordionTitlePropsType = {
    title: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={ () => { props.setCollapsed(!props.collapsed) }} >{props.title}</h3>
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