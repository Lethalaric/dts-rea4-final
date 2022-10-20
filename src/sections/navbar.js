import React from 'react';
import { Button } from '@mui/material';
import {DehazeRounded, SearchRounded} from "@mui/icons-material";
import logo from '../assets/logo.png';
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";

function Navbar(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <NavLink to={"/"}>
                    <img src={logo} alt={"logo"} />
                </NavLink>
                <Link to={"about"}>About us</Link>
                <Link to={"channels"}>Channel</Link>
            </div>
            <div>
                <SearchRounded></SearchRounded>
                <DehazeRounded></DehazeRounded>
            </div>
            <Outlet />
        </div>
    );
}

export default Navbar;