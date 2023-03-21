import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home'
import Cars from '../pages/Cars'
import CarDetail from '../pages/CarDetail'
import Introduce from '../pages/Introduce'
import Motorcycle from '../pages/Motorcycle'
import Pin from '../pages/Pin'
import Service from "../pages/Service";

const Routers = () => {
    return <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cardetail" element={<CarDetail />} />
        <Route path="/motorcycle" element={<Motorcycle />} />
        <Route path="/service" element={<Service />} />
        <Route path="/pin" element={<Pin />} />
    </Routes>

}

export default Routers