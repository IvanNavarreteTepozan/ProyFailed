import React from "react";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";

import Login from "../Pages/Login.jsx";
import Apartados from "../Pages/Apartados.jsx";
import Historial from "../Pages/Historial.jsx";
import NuevaVenta from "../Pages/NuevaVenta.jsx";
import Inventario from "../Pages/Inventario.jsx";

const Rutas= () => (

<BrowserRouter>
    {/*LAYOUT*/}
    {/*Contenido central y rutas*/}
    <section id="content" className="content">
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Apartados" element={<Apartados/>}/>
                <Route path="/Historial" element={<Historial/>}/>
                <Route path="/Inventario" element={<Inventario/>}/>
                <Route path="/NuevaVenta" element={<NuevaVenta/>}/>


            </Routes>
    </section>
</BrowserRouter>
);

export default Rutas;