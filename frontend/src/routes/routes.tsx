import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Signin } from '../pages/Signin'

export const Router = () => (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Signin' element={<Signin />} />
            </Routes>
        </BrowserRouter>
)