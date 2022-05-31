import React from 'react'
import { useState } from 'react'

function Register() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const handleChange = ({ target: { name, value } }) => {
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <form action="">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id=""
                placeholder='youremail@company.com'
                value={user.email}
                onChange={handleChange}

            />
            <br />
            <label htmlFor="password"> Password</label>

            <input
                type="password"
                name="password"
                id=""
                placeholder='password'
                value={user.password}
                onChange={handleChange}
            />
            <br />
            <button>
                Register
            </button>
        </form>
    )
}

export default Register