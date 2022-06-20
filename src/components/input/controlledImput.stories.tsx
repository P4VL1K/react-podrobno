import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'ControlledInput'
}

export const ControlledInputFirst = () => <input value={"controlled input"}/>

export const GetValueOfUncInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const val = inputRef.current as HTMLInputElement
        setValue(val.value)
    }
    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        value - {value}</>
}



export const ControlledInput = () => {
    const [value,setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let res = e.currentTarget.value
        setValue(res)
    }
    return <input value={value} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const [checked,setChecked] = useState(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    return <input type="checkbox" checked={checked} onChange={action('I want to change')}/>
}

export const ControlledSelect= () => {
    const [value,setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return <select value={value} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'Alexey'}>Alexey</option>
        <option value={'Vlados'}>Vlados</option>
        <option value={'Dimas'}>Dimas</option>
    </select>
}