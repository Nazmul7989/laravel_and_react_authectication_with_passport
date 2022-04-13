import React, {Fragment} from 'react';
import Master from "../components/layouts/Master";
import About from "../components/About";


const AboutPage = () => {
    return (
        <Fragment>
            <Master>
                <About/>
            </Master>
        </Fragment>
    );
};

export default AboutPage;