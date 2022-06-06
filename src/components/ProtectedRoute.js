import React from 'react'
import { Navigate } from 'react-router-dom'


function ProtectedRoute({ children }) {
    const { user, loading } = useAuth()

    if (!user) return <Navigate to='./login' />

    if(!user) return <Navigate to='./login' />
    return (
        <>
        {children}
        </>
    )
}

export default ProtectedRoute