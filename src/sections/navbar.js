import React from 'react';
import { Button } from '@mui/material';
import {DehazeRounded, SearchRounded} from "@mui/icons-material";
import {Link, Outlet, useNavigate} from "react-router-dom";

function Navbar(props) {
    const navigate = useNavigate();
    const logo = "/assets/logo.png";
    return (
        <div>
            <div>
                <img src={logo} alt={"logo"} onClick={navigate("/")} />
                <Link to={"about"}>About us</Link>
                <Link to={"channels"}>About us</Link>
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