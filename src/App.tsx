import React, {useState} from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import {Rating, Rating as R, RatingType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";



function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false)

    return (
        <div className={"App"}>
            <OnOff />
            <UncontrolledOnOff on={on} setOn={setOn}/>
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}


            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
};

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;