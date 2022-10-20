import React from 'react';
import { Container } from '@mui/material';
import {DehazeRounded, SearchRounded} from "@mui/icons-material";
import logo from '../../assets/logo.png';
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import navbar from "./navbar.css";

function Navbar(props) {
    return (
        <div>
            <nav>
                <div id={"navbar-section-left"}>
                    <div id={"navbar-section-left-logo"}>
                        <NavLink to={"/"}>
                            <img
                                src={logo}
                                alt={"logo"}
                            />
                        </NavLink>
                    </div>
                    <NavLink to={"about"}>About us</NavLink>
                    <NavLink to={"channels"}>Channel</NavLink>
                </div>
                <div id={"navbar-section-right"}>
                    <SearchRounded/>
                    <DehazeRounded/>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Navbar;