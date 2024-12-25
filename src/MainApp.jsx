import React from 'react'
import App from './App'
import { Route, Routes } from 'react-router-dom'
import Service from "./components/Servicesfull"
import Logic from './Appointment'


const MainApp = () => {
  return (
    <>
    
    <Routes>
<Route path="/" element={<App />}></Route>
<Route path="/appointment" element={<Logic />}></Route>
<Route path="/service" element={<Service />}></Route>
    </Routes>
    
    </>
  )
}

export default MainApp