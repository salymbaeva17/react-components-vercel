import React, {useEffect, useState} from "react";
import axios from "axios";


const Users = () => {
    const [users, setUsers] = useState({})
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users/')
            .then(({data}) => setUsers(data))
    }, [])
    return (
        <div>
            {
                users.map(user => {
                    return (<div key={user.id}>
                        <p className="text-start m-0 ms-2 pt-2">{user.name}</p>
                        <p className="text-end m-0 me-2 pb-2">{user.email}</p>
                    </div>)
                })
            }
        </div>
    )
}
export default Users