import React, {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'UncontrolledInput'
}

export const UncontrolledInput = () => {
    const [value, setValue] = useState("")

    return <><input onChange={(event) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }}/>---{value}---</>
}

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
