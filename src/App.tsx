import React, {useState} from "react";
import "./App.css";
import {Rating, RatingType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import ControlledOnOff from "./components/OnOff/ControlledOnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";



function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingType>(4)
    // let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false)

    return (
        <div className={"App"}>
            {/*<UncontrolledOnOff />*/}
            {/*<ControlledOnOff on={on} setOn={setOn}/>*/}
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            <UncontrolledAccordion titleValue={'Menu'}/>

            {/*<Accordion titleValue={"Menu"} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
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
