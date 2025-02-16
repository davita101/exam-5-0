import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoutes({ children }) {
    const navigate = useNavigate()
    useEffect(() => {
        const url = window.location.pathname
        console.log(url)
        if (url == "/login" || url == "/register") {
            if (url == "/login") {
                navigate("/login")
            }
            if (url == "/register") {
                navigate("/register")
            }
        }
    }, [])
    return (
        <div>
            {children}
        </div>
    )
}
