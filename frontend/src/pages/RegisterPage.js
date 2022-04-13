import React, {Fragment} from 'react';
import Master from "../components/layouts/Master";
import Register from "../components/Register";

const RegisterPage = () => {
    return (
        <Fragment>
            <Master>
                <Register/>
            </Master>
        </Fragment>
    );
};

export default RegisterPage;