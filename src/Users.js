import React, {useState} from "react";
import axios from "axios";


const Users = () => {
    const [userId, setUserId] = useState("")
    const [user, setUser] = useState({})
    const handleInput = (e) => {
        setUserId(e.target.value)
    }
    const handleClick = () => {
        axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(({data}) => setUser(data))
    }
    return (
        <div className="col-3">
            <div className="d-flex mb-3">
                <input className="form-control" onChange={handleInput} type="text" value={userId}/>
                <button className="btn btn-success" onClick={handleClick}>Get</button>
            </div>
            <div className="d-block border border-2 border-success rounded-2">
                <p className="text-start m-0 ms-2 pt-2" >{user.name}</p>
                <p className="text-end m-0 me-2 pb-2">{user.email}</p>
            </div>
        </div>
    )
}
export default Users