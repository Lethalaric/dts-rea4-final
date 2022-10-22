import React from 'react';
import {Button, Container, Toolbar} from '@mui/material';
import {DehazeRounded, Search, SearchRounded} from "@mui/icons-material";
import logo from '../../assets/logo.png';
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import navbar from "./navbar.css";
import Footer from "../footer";
import SearchBar from "../../components/searchBar";

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
                <Toolbar>
                    <Button variant={"outlined"}>
                        <Search />
                    </Button>
                    <Button variant={"outlined"}>
                        <DehazeRounded/>
                    </Button>
                </Toolbar>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Navbar;