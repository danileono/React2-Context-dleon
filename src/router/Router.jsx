import { Routes, Route, useLocation } from "react-router-dom"
import '../App.css'
import Navbar from "../components/Navbar"

import Home from "../views/Home"
import Favorites from "../views/Favorites"
import NotFound from '../views/NotFound'



const Router = ()=> {
        const location = useLocation()

        const renderNavbar = ()=> {
                const pathname = location.pathname
                if(pathname === '/contacto' || pathname === '/NotFound ') {
                        return false
                }

                return true
        }

        return (
        <>
        { renderNavbar() && <Navbar />}

        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favoritos" element={<Favorites />}/>
                <Route path="*" element={ <NotFound /> } />
        </Routes>
        </>
        )
}

export default Router