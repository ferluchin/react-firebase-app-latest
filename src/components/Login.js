import React, { useState } from 'react'


function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    return (
        <div>
            <form action="">
                <input type="email" name="email" id="email" />

                <input type="password" name="password" id="password" />
            </form>
        </div>
    )
}

export default Login