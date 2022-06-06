import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import { Navigate, useNavigate } from 'react-router-dom'

function Login() {
    
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { login, loginWithGoogle } = useAuth()

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleChange = ({ target: { name, value } }) => {
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        try {
            await login(user.email, user.password)
            navigate('/')

        } catch (error) {
            setError(error.message)
        }
    }

    const handleGoogleSignin = async() => {
        await loginWithGoogle()
        navigate('/')

    }
    
    return (
        <div>
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"

                    placeholder='youremail@company.com'
                    value={user.email}
                    onChange={handleChange}

                />
                <br />
                <label htmlFor="password"> Password</label>

                <input
                    type="password"
                    name="password"

                    placeholder='password'
                    value={user.password}
                    onChange={handleChange}
                />
                <br />
                <button>
                    Login
                </button>

            </form>

            <button onClick={handleGoogleSignin}>
                google Login
            </button>
        </div>
    )
}

export default Login