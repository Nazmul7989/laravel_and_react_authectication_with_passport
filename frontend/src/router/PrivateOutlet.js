import React from 'react';
import {Navigate,Outlet} from "react-router-dom";

const PrivateOutlet = () => {
    const access_token = localStorage.getItem('access_token');

    return access_token ? <Outlet/> : <Navigate to="/login"/>;
};

export default PrivateOutlet;