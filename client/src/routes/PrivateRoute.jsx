import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        <div>
            {
                user ? children : <Navigate to='/login' />
            }
        </div>
    )
}
