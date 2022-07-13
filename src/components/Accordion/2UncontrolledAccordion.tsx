import React, {useReducer} from "react";

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export type AccordionPropsType = {
    titleValue: string,
}

type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const acordReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed}
        default:
            return state
    }

}

export function UncontrolledAccordion2(props: AccordionPropsType) {

    const [state, dispatch] = useReducer(acordReducer, {collapsed: false})

    return (<div>
        <AccordionTitle title={props.titleValue} setCollapsed={() => {
            dispatch(ActionCreator())
        }}/>
        {!state.collapsed && <AccordionBody title={'brrr'}/>}
    </div>)
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

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            <li>{props.title}</li>
            <li>{props.title}</li>
            <li>{props.title}</li>
        </ul>
    )
};


const ActionCreator = () => ({type: TOGGLE_COLLAPSED})
