import React from 'react';
import {Container, Typography} from "@mui/material";
import image from '../assets/BNNW_AmericanBuffalo--11.jpg';

function HomepageHeader(props) {
    return (
        <Container
            maxWidth={false}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                height: "1000px",
                alignItems: "center",
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div
                style={{
                    maxWidth: "1000px"
                }}
            >
                <Typography>TODAY's BEUTIFUL NEWS</Typography>
                <Typography variant={"h2"}>How a sacred tie with Native Americans is restoring bison to indigenous lands</Typography>
                <div>
                    <Typography>Natural World</Typography>
                    <Typography>USA</Typography>
                </div>
                <button>Play Button</button>
            </div>
            <div
                style={{
                    alignSelf: "end"
                }}
            >
                <button>submit your story</button>
            </div>
        </Container>
    );
}

export default HomepageHeader;