import { Routes, Route, Navigate } from "react-router-dom";
import VerticalNavbar from "./components/VerticalNavbar";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import Employee from './components/Employees';
import Signup from "./components/Singup";
import './stylesheets/home.css'
import { useState, useEffect } from "react";
import Login from "./components/Login";
import jwtDecode from "jwt-decode";
import axios from "axios";

import getData from './getInfo/getUserInfo'
import Main from "./components/Main";
// const getData = async (data) => {
//     try {
//         const response = await axios.post('http://localhost:3600/user', data);
//         const responseData = response.data;
//         console.log(responseData);
//         return responseData;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };

function App() {
	const user = localStorage.getItem("token");

	// useEffect(()=>{
	// 	console.log(data)
	// }, [data])

	if (!user) {
		// window.location ='signup'
		// navigate('/signup')
		return (
			<Routes>
				<Route path="/" element={<Navigate replace to="/signup" />} />
				<Route exact path = "/signup" element={<Signup />} />
				<Route exact path = "/login" element={<Login />} />
			</Routes>
		)
	}

	return (
		<div>
			<Main />
		</div>
	);
}

export default App;
