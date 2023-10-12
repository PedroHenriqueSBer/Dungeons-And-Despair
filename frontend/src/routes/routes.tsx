import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Signin } from '../pages/Signin'
import { Login } from '../pages/Login'
import { Account } from '../pages/Account'

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='signin' element={<Signin />} />
            <Route path='login' element={<Login />} />
            <Route path='account' element={<Account />} />
        </Routes>
    </BrowserRouter>
)