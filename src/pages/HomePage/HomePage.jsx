import React from "react";
import "../../index.css";
import NavBar from "../../components/NavBar";
import {Link} from "react-router-dom";

const HomePage = () => {

    return (<div className="home-page">

        <div className="Home__Page">
            <NavBar/>
            <Link to="/category">Category</Link>
        </div>

    </div>);
};

export default HomePage;
