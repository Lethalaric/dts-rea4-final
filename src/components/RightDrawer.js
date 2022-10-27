import React from 'react';
import { useNavigate } from "react-router-dom";

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

function RightDrawer(props) {
    const navigate = useNavigate();
    const { stateOpen, toggleDrawer } = props;
    const authenticated = localStorage.getItem("access_token");

    const logout = () => {
        localStorage.removeItem("access_token");
        navigate("/");
    };

    return (
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
            <Box
                sx={{ width: '50vw' }}
                role="presentation"
                onClick={toggleDrawer(false)}
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
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/about">
                        <ListItemText primary='ABOUT US' sx={{ color: 'bisque' }} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/channels">
                        <ListItemText primary='CHANNEL' sx={{ color: 'bisque' }} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="/storypage">
                        <ListItemText primary='STORY' sx={{ color: 'bisque' }} />
                    </ListItemButton>
                </ListItem>
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
                        sx={{ color: 'white', backgroundColor: '#282C34', borderColor: 'bisque' }}
                        href={'/signin'}
                    >Sign in</Button>
                    <Button 
                        variant='outlined' 
                        sx={{ mx : '10px', color: '#282C34', backgroundColor: 'bisque', borderColor: 'bisque' }}
                        href={'/signup'}
                    >Create account</Button></>
                }
              </Toolbar>
            </Box>
        </SwipeableDrawer>
    );
}

export default RightDrawer;