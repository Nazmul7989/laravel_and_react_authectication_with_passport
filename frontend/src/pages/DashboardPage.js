import React, {Fragment} from 'react';
import Master from "../components/layouts/Master";
import Dashboard from "../components/Dashboard";

const DashboardPage = () => {
    return (
        <Fragment>

            <Master>
                <Dashboard/>

            </Master>

        </Fragment>
    );
};

export default DashboardPage;