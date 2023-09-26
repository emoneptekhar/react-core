import { useEffect, useState } from "react"

export default function Users(){


    const [users, setUser] = useState([]);

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUser(data))
        
    },[]);


    function User({usersData}){

        console.log(usersData);

        const {name, email} = usersData;

        return(

            <div>
                <h2>Name: {name} </h2>
                <h3>Email: {email} </h3>
            </div>
        )
    }

    // users.map(userData => setUser(userData));

    return(

        <div>
            <h2>Total Users: {users.length} </h2>
            <h3>List of Users</h3>
            {
                users.map(usersData => <User  usersData= {usersData}></User>)
            }
        </div>
    )
}