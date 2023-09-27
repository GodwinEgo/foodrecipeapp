import React from "react";
import '../themify-icons/css/themify-icons.css'
import {Link} from "react-router-dom";
import './ComponentStyling.css'

const NavBar = () => {
    return (
        <div className="navbar">

            <ul className="navbar__links">
                <li>Home</li>
                <li>Category</li>
                <li>Recipes</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Shop</li>
                <li>Contact</li>
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
