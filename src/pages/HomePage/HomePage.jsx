import React, {useEffect, useState} from "react";
import "./HomePage.css";
import PreLoader from "../../components/PreLoader";

const HomePage = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [])

    return (<div className="home-page">
        {isLoading ? (
            <PreLoader/>
        ) : (
            <div>
                <h1>Welcome to My Recipe App</h1>
            </div>
        )}
    </div>);
};

export default HomePage;
