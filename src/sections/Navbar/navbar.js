import "./navbar.css";

import { useState } from 'react';
import { DehazeRounded } from "@mui/icons-material";
import logo from '../../assets/logo.png';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "../footer";
import SearchBar from "../../components/searchBar";
// import RightDrawer from "./RightDrawer";

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import Link from '@mui/material/Link';

function Navbar(props) {
    const navigate = useNavigate();
    const authenticated = localStorage.getItem("access_token");
    const [search, setSearch] = useState('dika');
    const [stateOpen, setStateOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        // setState({ ...state, [anchor]: open });
        setStateOpen(open);
    };

    const logout = () => {
        localStorage.removeItem("access_token");
        navigate("/");
    };

    const list = () => (
        <Box
          sx={{ width: '50vw' }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
            <Toolbar>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton sx={{mt: 1, color: 'bisque'}} size="large">
                        <CloseIcon onClick={toggleDrawer(false)} />
                    </IconButton>
                </Box>
            </Toolbar>
            <Divider />
          <List>
            {['ABOUT', 'SUBMIT A STORY'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} sx={{ color: 'bisque' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Contact', 'Channel'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Toolbar>
            { authenticated ? 
                <Button 
                    variant='outlined' 
                    onClick={logout} 
                    sx={{ mx : '10px', color: '#282C34', backgroundColor: 'bisque', borderColor: 'bisque' }}
                >Logout</Button>
                :
                <><Button 
                    variant='outlined' 
                    onClick={toggleDrawer(true)} 
                    sx={{ color: 'white', backgroundColor: '#282C34', borderColor: 'bisque' }}
                    href={'/signin'}
                >Sign in</Button>
                <Button 
                    variant='outlined' 
                    onClick={toggleDrawer(true)} 
                    sx={{ mx : '10px', color: '#282C34', backgroundColor: 'bisque', borderColor: 'bisque' }}
                    href={'/signup'}
                >Create account</Button></>
            }
          </Toolbar>
        </Box>
      );

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
            <footer>
                <Footer />
            </footer>
            <SwipeableDrawer
                anchor='right'
                open={stateOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                hideBackdrop='true'
                PaperProps={{
                    sx: {
                        color: "rgb(255, 228, 196)",
                        backgroundColor: "rgb(40,44,52)",
                        elevation: 0,
                    }
                }}
            >
                {list()}
            </SwipeableDrawer>
        </div>
    );
}

export default Navbar;