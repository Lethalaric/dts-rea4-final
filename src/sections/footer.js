import React from 'react';
import {FacebookRounded, Instagram, LinkedIn, YouTube} from "@mui/icons-material";

function Footer(props) {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <div
                    style={{
                        marginLeft: "1rem",
                        display: "flex",
                        width: "25%",
                        justifyContent: "space-between",
                        alignSelf: "center"
                    }}
                >
                    <FacebookRounded fontSize={"large"} />
                    <Instagram fontSize={"large"} />
                    <YouTube fontSize={"large"} />
                    <LinkedIn fontSize={"large"} />
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginRight: "5rem"
                    }}
                >
                    <ul>
                        <li>About</li>
                        <li>Submit a Story</li>
                        <li>Contact</li>
                    </ul>
                    <ul>
                        <li>Become a Contributor</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <ul>
                        <li>Cookie Policy</li>
                        <li>Sign In</li>
                        <li>Create Account</li>
                    </ul>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <div>
                    <p>Logo</p>
                    <p>© 2016-2020 Ginkgo Agency (Pty) Ltd.</p>
                </div>
                <div
                    style={{
                        display: "flex",
                    }}
                >
                    <p>google assistant</p>
                    <p>app store</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;