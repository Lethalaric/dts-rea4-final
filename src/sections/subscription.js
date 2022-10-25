import React from 'react';
import {Button, Container, TextField, Typography} from "@mui/material";

function Subscription(props) {
    return (
        <Container
            sx={{
                marginTop: "1rem",
                marginBottom: "1rem",
                alignSelf: "center",
                minWidth: "1000px",
                minHeight: "150px",
                backgroundColor: "#FF4669"
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <Typography
                    variant={"h6"}
                    sx={{
                        marginRight: "5rem"
                    }}
                >
                    <strong>REFRAME</strong> YOUR INBOX
                </Typography>
                <Typography>Subscribe to our newsletter <br/>and never miss a story
                </Typography>
            </div>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: "1rem"
                }}
            >
                <TextField variant={"standard"} label={"First Name"}></TextField>
                <TextField variant={"standard"} label={"Last Name"}></TextField>
                <TextField variant={"standard"} label={"Enter Your Email"}></TextField>
                <Button>Sign Up</Button>
            </Container>
        </Container>
    );
}

export default Subscription;