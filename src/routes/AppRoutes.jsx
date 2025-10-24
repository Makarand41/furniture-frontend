import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AdminRegister from "../pages/AdminRegister";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import AddFurniture from "../pages/AddFurniture";
import FurnitureList from "../pages/FurnitureList";
import ProductsWithSidebar from "../components/ProductsWithSidebar";
import Products from "../pages/Products";

import About from "../pages/About";
import ContactUs from "../components/ContactUs";
import Contact from "../pages/Contact";
import ViewFurniture from "../components/ViewFurniture";
import EditFurniture from "../pages/EditFurniture";
import DeleteFurniture from "../components/DeleteFurniture";
import AdminViewProduct from "../pages/AdminViewProduct";

const AppRoutes = () => (
  <Router>
    <Routes>
    {/* Users */}
    <Route path="/" element={<Home />} />
    <Route path="/furniture/Products" element={<Products />} />
    <Route path="/furniture/view/:id" element={<ViewFurniture />} />  {/* common for both admin and user*/}
    <Route path="/furniture/About" element={<About />} />
    <Route path="/furniture/Contact" element={<Contact/>} />

    {/* Admin */}
      
    <Route path="/admin/register" element={<AdminRegister />} />
    <Route path="/admin/login" element={<AdminLogin />} />
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
    <Route path="/admin/add-furniture" element={<AddFurniture />} />
    <Route path="/furniture/list" element={<FurnitureList />} />
    <Route path="/furniture/edit/:id" element={<EditFurniture />} />
    <Route path="/furniture/delete/:id" element={<DeleteFurniture />} />
    <Route path="/admin/view/:id" element={<AdminViewProduct />} />    {/*  admin to view furniture*/}
   


    </Routes>
  </Router>
);

export default AppRoutes;
