import React, {Fragment} from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
// import PrivateRoute from "./PrivateRoute";
// import PublicRoute from "./PublicRoute";
import PrivateOutlet from "./PrivateOutlet";
import PublicOutlet from "./PublicOutlet";


const AppRoutes = () => {
    return (
        <Fragment>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />

                {/*<Route path="/login" element={<PublicRoute><LoginPage/></PublicRoute>} />*/}
                {/*<Route path="/register" element={<PublicRoute><RegisterPage/></PublicRoute>} />*/}
                {/*<Route path="/dashboard" element={<PrivateRoute><DashboardPage/></PrivateRoute>} />*/}


                {/*public route*/}
                <Route path="/*" element={<PublicOutlet/>}>
                    <Route path="login" element={<LoginPage/>} />
                    <Route path="register" element={<RegisterPage/>} />
                </Route>

                {/*private route*/}
                <Route path="/*" element={<PrivateOutlet/>}>
                    <Route path="dashboard" element={<DashboardPage/>} />
                </Route>

            </Routes>

        </Fragment>
    );
};

export default AppRoutes;