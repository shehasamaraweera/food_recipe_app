import React from 'react'
import Footer from "../components/Footer";
import Nevbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainNavbar() {
  return (
    <>
      <Nevbar />
      <Outlet />
      <Footer />
    </>
  );
}
