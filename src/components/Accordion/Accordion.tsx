import React from "react";


export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
}


function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")

            return (<div>
                <AccordionTitle title={props.titleValue} setAccordionCollapsed={props.setAccordionCollapsed} collapsed={props.collapsed}/>
                { props.collapsed === false && <AccordionBody title={'Hello'}/> }
            </div>)

                // <AccordionBody title={'Hello'}/>
};


type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
    return <h3 onClick={ () => { props.setAccordionCollapsed(!props.collapsed)} }>{props.title}</h3>
};

type AccordionBodyPropsType = {
    title: string
}

function AccordionBody(props:AccordionBodyPropsType ) {
    console.log("AccordionBody rendered")
    return (
        <ul>
            <li>{props.title}</li>
            <li>{props.title}</li>
            <li>{props.title}</li>
        </ul>
    )
};

export default Accordion