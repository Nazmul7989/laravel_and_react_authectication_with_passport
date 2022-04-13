import React, {Fragment} from 'react';
import Master from "../components/layouts/Master";
import Home from "../components/Home";

const HomePage = () => {
    return (
        <Fragment>
            <Master>
                <Home/>
            </Master>
        </Fragment>
    );
};

export default HomePage;