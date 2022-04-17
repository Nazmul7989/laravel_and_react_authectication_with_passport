import React from 'react';
import {Navigate} from 'react-router-dom'


const PublicRoute = ({children}) => {

    const access_token = localStorage.getItem('access_token');

    return !access_token ? children : <Navigate to="/dashboard"/>;


};

export default PublicRoute;