import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Otp from './pages/OTP/Otp';
import AdminDashboard from './Dashboards/AdminDashboard/AdminDashboard';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';

const App = () => {
  return (
   <>

<BrowserRouter>

<Routes>
<Route path='/' element = {<Register/>}/>
<Route path='/Otp' element = {<Otp/>}/>
<Route path='/AdminDashboard' element = {<AdminDashboard/>}/>

</Routes>

</BrowserRouter>

{/* <AdminDashboard/> */}



   </>
  );
}

export default App;
