import React, {useState} from "react";

export default {
    title: 'React.memo demo2'
}

const CounterSecret = (props: {counter: number}) => {

    console.log('counter rendering')

    return <div>
        {props.counter}
    </div>
}

const Counter = React.memo(CounterSecret)

const UsersSecret = (props: {users: Array<string>}) => {

    console.log('users rendering')

    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Pasha','Dasha','Alesya'])

    const addUser = () => {
        const newUser = 'Nadya'
        setUsers([newUser, ...users])
    }

    return <>
        <button onClick={()=>{setCounter(counter + 1)}}>+</button>
        <button onClick={addUser}>add user</button>
        <Counter counter={counter}/>
        <Users users={users}/>
    </>
}