import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Otp from './pages/OTP/Otp';
import AdminDashboard from './Dashboards/AdminDashboard/AdminDashboard';
import StudentDashboard from './Dashboards/StudentDashboard/StudentDashboard';
import TrainerDashboard from './Dashboards/TrainerDashboard/TrainerDashboard';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Material from './components/Material';
import CourseProfile from './pages/Course/CourseProfile';
import CardState from './components/context/cards/CardState';
const App = () => {
  return (
   <>
<CardState>

<BrowserRouter>

<Routes>
<Route path='/' element = {<Register/>}/>
<Route path='/Otp' element = {<Otp/>}/>


<Route path='/AdminDashboard' element = {<AdminDashboard/>}/>
<Route path='/StudentDashboard' element = {<StudentDashboard/>}/>
<Route path='/TrainerDashboard' element = {<TrainerDashboard/>}/>
<Route path='/CourseProfile' element = {<CourseProfile/>}/>

</Routes>

</BrowserRouter>


</CardState>

   </>
  );
}

export default App;
