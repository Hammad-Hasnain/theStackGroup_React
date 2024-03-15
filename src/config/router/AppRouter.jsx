import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AuthRoutes from '../privateRoutes/AuthRoutes'
import Home from '../../screens/homePage/Home'
import Login from '../../screens/login/Login'


const AppRouter = () => <Router>
    <Routes>
        <Route element={<AuthRoutes />}>
            <Route path='/' element={<Home />} />
        </Route>

        <Route path='/login' element={<Login />} />

    </Routes>
</Router>

export default AppRouter