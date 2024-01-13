import { Outlet, Navigate } from 'react-router-dom'
import { useUser } from '../Context/UserContext'

const PrivateRoutes = () => {
    const { isAuthenticated } = useUser()
    return (
        !isAuthenticated ? <Navigate to="/login" /> : <Outlet />
    )
}

export default PrivateRoutes