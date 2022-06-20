import React from "react";



export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
    items: Array<ItemsType>
    onClick: (value: any) => void
}


function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")

            return (<div>
                <AccordionTitle title={props.titleValue} setAccordionCollapsed={props.setAccordionCollapsed} collapsed={props.collapsed}/>
                { props.collapsed === false && <AccordionBody items={props.items} onClick={props.onClick}/> }
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


type ItemsType = {
    title: string
    value: any
}

type AccordionBodyPropsType = {
    items: Array<ItemsType>
    onClick: (value: any) => void
}

function AccordionBody(props:AccordionBodyPropsType ) {
    console.log("AccordionBody rendered")
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>)}
        </ul>
    )
};

export default Accordion