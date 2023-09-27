import React, {useEffect, useState} from "react";
import "../../index.css";
import PreLoader from "../../components/PreLoader";
import NavBar from "../../components/NavBar";

const HomePage = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    return (<div>
        {isLoading ? (
            <PreLoader/>
        ) : (
            <div className="Home__Page">
                <NavBar/>
                <h1>Home Page</h1>
            </div>
        )}
    </div>);
};

export default HomePage;
