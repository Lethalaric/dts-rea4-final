import React from 'react';
import {FacebookRounded, Instagram, LinkedIn, YouTube} from "@mui/icons-material";
import logo from '../assets/logo.png';
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <div
                    style={{
                        marginLeft: "1rem",
                        display: "flex",
                        width: "25%",
                        justifyContent: "space-between",
                        alignSelf: "center",
                        marginRight: "5rem"
                    }}
                >
                    <a href={"https://www.facebook.com"}>
                        <FacebookRounded fontSize={"large"} />
                    </a>
                    <a href={"https://www.instagram.com"}>
                        <Instagram fontSize={"large"} />
                    </a>
                    <a href={"https://www.youtube.com"}>
                        <YouTube fontSize={"large"} />
                    </a>
                    <a href={"https://www.linkedin.com"}>
                        <LinkedIn fontSize={"large"} />
                    </a>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginRight: "5rem"
                    }}
                >
                    <ul style={{
                        listStyleType: "none"
                    }}>
                        <li>
                            <Link to={`/about`} >About</Link>
                        </li>
                        <li>
                            <Link to={"/submit-story"}>Submit a Story</Link>
                        </li>
                        <li>
                            <Link to={"/contact"} >Contact</Link>
                        </li>
                    </ul>
                    <ul style={{
                        listStyleType: "none"
                    }}>
                        <li>
                            <Link to={"/become-contributor"}>Become a Contributor</Link>
                        </li>
                        <li>
                            <Link to={"/term-of-use"}>Terms of Use</Link>
                        </li>
                        <li>
                            <Link to={"/privacy-policy"}>Privacy Policy</Link>
                        </li>
                    </ul>
                    <ul style={{
                        listStyleType: "none"
                    }}>
                        <li>
                            <Link to={"/cookie-policy"}>Cookie Policy</Link>
                        </li>
                        <li>
                            <Link to={"/signin"}>Sign In</Link>
                        </li>
                        <li>
                            <Link to={"/signup"}>Create Account</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Link to={"/"}>
                    <img src={logo} alt={"logo"} width={"150px"} height={"150px"}/>
                </Link>
                <p>© 2016-2020 Ginkgo Agency (Pty) Ltd.</p>
            </div>
        </div>
    );
}

export default Footer;