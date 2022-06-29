import React, {ChangeEvent, useCallback, useMemo, useState} from "react";


export default {
    title: 'useMemo'
}


export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(20)
    const [b, setB] = useState<number>(4)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        debugger
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => {
            setA(+e.currentTarget.value)
        }}/>
        <input value={b} onChange={(e) => {
            setB(+e.currentTarget.value)
        }}/>
        <hr/>
        <div>result A : {resultA}</div>
        <div>result B : {resultB}</div>
    </>
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users secret')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Vlados', 'Alexey', 'Dimas'])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        console.log('add user')
        const newUsers = [...users, 'Vadim ' + new Date().getTime()]
        setUsers(newUsers)
    }


    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </div>
}



/////////////////////////////////////////////////////////////////

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])



    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log('add user')
            const newBooks = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
            console.log('add user')
            const newBooks = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newBooks)
        }
    , [books])

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </div>
}


type BookSecretPropsType = {
    addBook: ()=>void
}

const BooksSecret = (props: BookSecretPropsType) => {
    console.log('users secret')
    return <div>
        <button onClick={props.addBook}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)