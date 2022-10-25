import React from 'react';
import {Container, Typography} from "@mui/material";
import aboutImage from '../assets/about.jpg';

function AboutPage(props) {
    return (
        <Container>
            <Container
                maxWidth={false}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "750px",
                    alignItems: "center",
                    backgroundImage: `url(${aboutImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >
                <Typography variant={"h3"} >About Beautiful News</Typography>
            </Container>
            <Typography>
                Beautiful News is a content platform that publishes one positive story every day of the year. We are dedicated to unearthing inspiring, uplifting, and authentic voices that reflect the good in humanity, as well as the beauty of destinations and our natural world.<br></br><br></br>Beautiful News launched in South Africa on 1 November 2016. Since inception, we’ve shared positive micro-documentary content at 4:14pm, in recognition of the moment that Nelson Mandela was released from prison. In honour of his legacy, we are reframing our world for the betterment of nature and humankind. <br></br><br></br>We gather our stories by keeping a pulse on individuals and organisations that are making a positive impact through their ideas, actions, initiatives and contributions. This diverse set of inspirational narratives collectively showcases humanity’s inherent goodness.<br></br><br></br>Beautiful News offers a platform to amplify their message because we believe that together, we are stronger. It’s these stories that will unite us as we create a community committed to positive action and change. <br></br><br></br>Beautiful News is created by REA4C Tim 20.
            </Typography>
        </Container>
    );
}

export default AboutPage;