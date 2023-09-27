import React, {useEffect, useState} from "react";
import PreLoader from "../../components/PreLoader";
import NavBar from "../../components/NavBar";


const CategoryPage = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    return (
        <div>
            {
                isLoading ? (
                    <PreLoader/>
                ) : (
                    <div className="category__page">
                        <NavBar/>
                        <h1>Category Page</h1>
                    </div>
                )
            }
        </div>
    )
}

export default CategoryPage