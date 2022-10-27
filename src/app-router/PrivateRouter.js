import React, { useContext } from 'react'
import { AuthContextProv } from '../contexts/AuthContext'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRouter = () => {
    const { currentUser } = useContext(AuthContextProv)

    return currentUser ? <Outlet /> : <Navigate to={"/login"} replace />
}

export default PrivateRouter