import {Clock} from "./Clock";


export default {
    title: 'clock/Clock',
    component: Clock
}


export const BaseAnalogExample = () => {

    return <Clock mode={'digital'}/>
}

export const BaseDigitalExample = () => {

    return <Clock mode={'analog'}/>
}