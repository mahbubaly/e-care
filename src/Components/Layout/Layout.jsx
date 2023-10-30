import React from 'react';
import Navbar from '../SharedPage/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPage/Footer';

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />

        </>
    );
};

export default Layout;