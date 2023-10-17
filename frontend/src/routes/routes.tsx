import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Account } from '../pages/Account'
import { Home } from '../pages/Home'
import { Inventory } from '../pages/Inventory'
import { Login } from '../pages/Login'
import { Signin } from '../pages/Signin'
import { Pdfs } from '../pages/pdfs'

export const Router = () => (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='signin' element={<Signin />} />
                <Route path='login' element={<Login />} />
                <Route path='account' element={<Account />} />
                <Route path='pdfs' element={<Pdfs />} />
                <Route path='inventory' element={<Inventory />} />
            </Routes>
        </BrowserRouter>
)