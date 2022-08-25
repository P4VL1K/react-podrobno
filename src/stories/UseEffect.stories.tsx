import React, {useEffect, useState} from 'react'


export default {
    title: 'useEffect demo'
}


export const SetIntervalExample = () =>{
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(()=>{

        const intId = setInterval(()=>{
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intId)
        }

    }, [])



    return <>
    Hello, counter: {counter}
    </>
}

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(0)

    console.log('component rendered ' + counter)

    useEffect(() => {
        console.log('useEffect ' + counter)

        return () => {
            console.log('resetEffect ' + counter)
        }
    }, [counter])

    const onClickHandler = () => {
        setCounter(counter + 1)
    }

    return <>
        {counter}<button onClick={onClickHandler}>+</button>
    </>

}


export const KeysTrackerExample = () => {

    const [text, setText] = useState('')

    console.log(text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])


    return <div>
        {text}
    </div>
}


export const SetTimeoutExample = () => {

    console.log('component rendered')

    const [text, setText] = useState('')

    useEffect(() => {
        const toID = setTimeout(() => {
            console.log('my name is timeout')
            setText('Hello')
        }, 3000)

        return () => {
            clearInterval(toID)
        }
    }, [text])

    return <div>{text}</div>
}