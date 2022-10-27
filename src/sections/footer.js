import React from 'react';
import {FacebookRounded, Instagram, LinkedIn, YouTube} from "@mui/icons-material";
import logo from '../assets/logo.png';
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

function Footer(props) {
    return (
        <Box
        component="footer"
        sx={{
          py: 10,
          px: 2,
          mt: 'auto',
        }}
      >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <Box
                    sx={{
                        marginLeft: "1rem",
                        display: "flex",
                        width: "25%",
                        justifyContent: "space-between",
                        alignSelf: "center",
                        marginRight: "5rem"
                    }}
                >
                    <Typography component="a" href={"https://www.facebook.com"}>
                        <FacebookRounded fontSize={"large"} sx={{ color : 'bisque' }} />
                    </Typography>
                    <Typography component="a" href={"https://www.instagram.com"}>
                        <Instagram fontSize={"large"} sx={{ color : 'bisque' }} />
                    </Typography>
                    <Typography component="a" href={"https://www.youtube.com"}>
                        <YouTube fontSize={"large"} sx={{ color : 'bisque' }} />
                    </Typography>
                    <Typography component="a" href={"https://www.linkedin.com"}>
                        <LinkedIn fontSize={"large"} sx={{ color : 'bisque' }} />
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginRight: "5rem"
                    }}
                >
                    <ul style={{
                        listStyleType: "none"
                    }}>
                        <li>
                            <Link className={"RouterLink"} to={`/about`} >About</Link>
                        </li>
                        <li>
                            <Link className={"RouterLink"} to={"/storyform"}>Submit a Story</Link>
                        </li>
                        <li>
                            <Link className={"RouterLink"} to={"/"}>Contact</Link>
                        </li>
                    </ul>
                    <ul style={{
                        listStyleType: "none"
                    }}>
                        <li>
                            <Link className={"RouterLink"} to={"/"}>Become a Contributor</Link>
                        </li>
                        <li>
                            <Link className={"RouterLink"} to={"/"}>Terms of Use</Link>
                        </li>
                        <li>
                            <Link className={"RouterLink"} to={"/"}>Privacy Policy</Link>
                        </li>
                    </ul>
                    <ul style={{
                        listStyleType: "none"
                    }}>
                        <li>
                            <Link className={"RouterLink"} to={"/"}>Cookie Policy</Link>
                        </li>
                        <li>
                            <Link className={"RouterLink"} to={"/signin"}>Sign In</Link>
                        </li>
                        <li>
                            <Link className={"RouterLink"} to={"/signup"}>Create Account</Link>
                        </li>
                    </ul>
                </Box>
            </Box>
            <Container maxWidth="sm"><Toolbar align="center">
                <Link className={"RouterLink"} to={"/"}>
                    <img src={logo} alt={"logo"} width={"150px"} height={"150px"}/>
                </Link>
                <Typography component="p" sx={{ color : 'bisque', textAlign : 'center'}} >© 2022 REA4C-20-Final <br /> Mukhtar Harris | Sesdika Sansani </Typography>
            </Toolbar></Container>
        </Box>
    );
}

export default Footer;