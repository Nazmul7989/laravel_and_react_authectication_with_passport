import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const PublicOutlet = () => {

    const access_token = localStorage.getItem('access_token');

    return !access_token ? <Outlet/> : <Navigate to="/dashboard"/>;
};

export default PublicOutlet;