import VerticalNavbar from "./VerticalNavbar"
import Navbar from "./Navbar"
import { Routes, Route } from "react-router-dom/dist"
import HeroSection from "../pages/HeroSection"
import Employees from "./Employees"
import { useState, useEffect } from "react"

import getData from '../getInfo/getUserInfo'


import jwtDecode from "jwt-decode"

const Main = () => {
    const [page, setPage] = useState(0)
    const [data, setData] = useState()


    useEffect(() => {
        const token = localStorage.getItem('token')
        const decode = jwtDecode(token);
        const userId = decode._id;

        // console.log(userId)

        async function fetchdata(userId) {
            const newData = await getData({ _id: userId });
            setData(newData);
        }

        fetchdata(userId);
    }, []);

    if(!data) {
        return (
            <h2>Loading...</h2>
        )
    }


    return (
        <main>
            <VerticalNavbar page={page} setPage={setPage} />
            <div className="main-content">
                <Navbar data={data} />
                <Routes>
                    <Route exact path="/" element={<HeroSection data={data} />} />
                    <Route exact path="/employees" element={<Employees data={data} />} />
                </Routes>
            </div>
        </main>
    )
}

export default Main