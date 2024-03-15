import { Outlet, Navigate } from 'react-router-dom'




const auth = {
    // isAuth: false,
    isAuth: true,
}

const AuthRoutes = () => {




    return (
        auth.isAuth ? <Outlet /> : <Navigate to={'/login'} />
    )
}

export default AuthRoutes