import React, {Fragment} from 'react';
import Login from "../components/Login";
import Master from "../components/layouts/Master";

const LoginPage = () => {
    return (
        <Fragment>

        <Master>
            <Login/>
        </Master>

        </Fragment>
    );
};

export default LoginPage;