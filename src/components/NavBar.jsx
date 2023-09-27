import React from "react";
import '../themify-icons/css/themify-icons.css'
import {Link} from "react-router-dom";
import './ComponentStyling.css'

const NavBar = () => {
    return (
        <div className="navbar">

            <ul className="navbar__links">
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/category">
                        Category
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Recipes
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Pages
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Contact
                    </Link>
                </li>
            </ul>

            <Link to='/' className="navbar__cart__link">
                <i className="ti-shopping-cart"></i>
                <p>$00</p>
            </Link>

            <ul className="navbar__buttons">
                <Link to="/" className="navbar__login__link">
                    <i className="ti-user"></i>
                    <p>Login</p>
                </Link>
                <Link to="/" className="navbar__submit__link">
                    <i className="ti-plus"></i>
                    <p>Submit</p>
                </Link>
            </ul>
        </div>
    );
};

export default NavBar;
