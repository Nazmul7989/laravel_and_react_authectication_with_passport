import React, {Fragment} from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Master = (props) => {
    return (
        <Fragment>

        <Header/>

        { props.children}

        <Footer/>

        </Fragment>
    );
};

export default Master;