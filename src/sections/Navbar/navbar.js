import "./navbar.css";

import { useState } from 'react';
import { DehazeRounded } from "@mui/icons-material";
import logo from '../../assets/logo.png';
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../footer";
import SearchBar from "../../components/searchBar";
import RightDrawer from "../../components/RightDrawer";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

function Navbar(props) {
    const [search, setSearch] = useState('dika');
    const [stateOpen, setStateOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        // console.log("toggleDrawer",open)
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setStateOpen(open);
    };

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
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            typography: 'h2',
                            '& > :not(style) + :not(style)': {
                                ml: 2,
                            },
                        }}
                    >
                        <NavLink className={"RouterLink"} to={"about"}>About us</NavLink>
                        <NavLink className={"RouterLink"} to={"channels"}>Channel</NavLink>
                        <NavLink className={"RouterLink"} to={"storypage"}>Story</NavLink>
                    </Box>
                </div>
                <div id={"navbar-section-right"}>
                    <Toolbar>
                        <SearchBar search={search} setSearch={setSearch} />
                        <Button onClick={toggleDrawer(true)} sx={{ color: 'bisque' }} ><DehazeRounded/></Button>
                    </Toolbar>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
                <Footer />
            <RightDrawer stateOpen={stateOpen} toggleDrawer={toggleDrawer} />
        </div>
    );
}

export default Navbar;