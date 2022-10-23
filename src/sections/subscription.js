import React from 'react';
import {Button, TextField} from "@mui/material";

function Subscription(props) {
    return (
        <div
            style={{
                alignSelf: "center",
                width: "1000px",
                backgroundColor: "#FF4669"
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <p><strong>REFRAME</strong> YOUR INBOX</p>
                <p>Subscribe to our newsletter <br/>and never miss a story
                </p>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <TextField variant={"standard"} label={"First Name"}></TextField>
                <TextField variant={"standard"} label={"Last Name"}></TextField>
                <TextField variant={"standard"} label={"Enter Your Email"}></TextField>
                <Button>Sign Up</Button>
            </div>
        </div>
    );
}

export default Subscription;