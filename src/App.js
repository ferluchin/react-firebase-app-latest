import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import { AuthProvider } from './context/authContext'
import { ProtectedRoute } from './components/ProtectedRoute'


function App() {
    return (
        <div className="bg-slate-300 h-screen  flex">
            <AuthProvider>

                <Routes>

                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                </Routes>

            </AuthProvider >
        </div >

    )
}

export default App

/*
crear archivo 
.env.local 

BROWSER = None
    
*/