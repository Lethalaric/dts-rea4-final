import { useState } from 'react';
import { Container } from '@mui/material';
import {DehazeRounded, SearchRounded} from "@mui/icons-material";
import logo from '../../assets/logo.png';
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import navbar from "./navbar.css";
// import RightDrawer from "./RightDrawer";

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function Navbar(props) {
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
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ color: 'bisque' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
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
                    <NavLink to={"about"}>About us</NavLink>
                    <NavLink to={"channels"}>Channel</NavLink>
                    <Button onClick={toggleDrawer(true)}>Drawer</Button>
                </div>
                <div id={"navbar-section-right"}>
                    <Button onClick={toggleDrawer(true)} sx={{ color: 'bisque' }} ><SearchRounded/></Button>
                    <Button onClick={toggleDrawer(true)} sx={{ color: 'bisque' }} ><DehazeRounded/></Button>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
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