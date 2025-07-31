import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import { useState } from "react";

const Header = () => {

    const [BtnName, setBtnName] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <h5>{BtnName === "Login" ? "Active" : "offline"}</h5>
            <div className="navItems">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/About">About Us</Link>
                    <Link to="/Contact">Contact Us</Link>
                    <li>Cart</li>
                    <button onClick={() => {
                        BtnName === "Login" ? setBtnName("Logut") : setBtnName("Login")
                    }} >{BtnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;