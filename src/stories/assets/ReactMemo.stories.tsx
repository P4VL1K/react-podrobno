import React from "react";
import {useState} from "react";


export default {
    title: 'React.memo demo'
}


const NewMessageCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('users')
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {

    const addUser = () => {
        const newUsers = [...users, 'Kirill']
        setUsers(newUsers)
    }

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Vlados','Alexey','Dimas'])

    return <div>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </div>
}