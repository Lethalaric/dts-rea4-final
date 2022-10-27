import React from 'react';
import { useNavigate, Link } from "react-router-dom";

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
                <Link className={"RouterLink"} to={`/about`}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='ABOUT US' sx={{ color: 'bisque' }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link className={"RouterLink"} to={`/channels`}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='CHANNEL' sx={{ color: 'bisque' }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                { authenticated &&
                    <Link className={"RouterLink"} to={`/storyform`}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary='SUBMIT STORY' sx={{ color: 'bisque' }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                }
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
                    <>
                        <Link to={`/signin`}>
                            <Button 
                                variant='outlined' 
                                sx={{ color: 'white', backgroundColor: '#282C34', borderColor: 'bisque' }}
                            >Sign in</Button>
                        </Link>
                        <Link to={`/signup`}>
                            <Button 
                                variant='outlined' 
                                sx={{ mx : '10px', color: '#282C34', backgroundColor: 'bisque', borderColor: 'bisque' }}
                            >Create account</Button>
                        </Link>
                    </>
                }
              </Toolbar>
            </Box>
        </SwipeableDrawer>
    );
}

export default RightDrawer;