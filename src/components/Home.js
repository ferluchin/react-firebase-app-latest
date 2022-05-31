// import React, { useContext } from 'react'
// import { context } from '../context/authContext'

import { useAuth } from "../context/authContext";

function Home() {

    const {user} =useAuth()
    //const authContext = useContext(context);
    console.log(user);

    return (
        <div>Home</div>
    )
}

export default Home