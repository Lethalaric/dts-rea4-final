import React from 'react';
import {Container, Typography} from "@mui/material";
import businessImage from '../assets/20191127190639-shutterstock-431848417-crop.jpeg'
import politicsImage from '../assets/BPAC_Main.png'
import scienceImage from '../assets/colourful-science-work-concept_23-2148539571.webp'
import techImage from '../assets/cybersecurity-month-2022-1000x400-1.webp'
import travelImage from '../assets/flat-travel-background_23-2148050086.webp'
import healthImage from '../assets/health-topics-2.jpg'
import entertainmentImage from '../assets/media_entertainment.png'
import foodImage from '../assets/Variety-fruits-vegetables.webp'
import sportImage from '../assets/Shutterstock_Lisa_Kolbasa.png'
import CategoryCard from "../components/categoryCard";
import {Link} from "react-router-dom";

function ChannelsPage(props) {
    const categories = [
        {
            title: 'SCIENCE',
            image: scienceImage
        },
        {
            title: 'TRAVEL',
            image: travelImage
        },
        {
            title: 'FOOD',
            image: foodImage
        },
        {
            title: 'POLITICS',
            image: politicsImage
        },
        {
            title: 'TECH',
            image: techImage
        },
        {
            title: 'ENTERTAINMENT',
            image: entertainmentImage
        },
        {
            title: 'HEALTH',
            image: healthImage
        },
        {
            title: 'BUSINESS',
            image: businessImage
        },
        {
            title: 'SPORTS',
            image: sportImage
        },
    ]
    return (
        <Container>
            <Typography variant={"h3"}>Beautiful News Channels</Typography>
            <Container
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                }}
            >
                {categories.map(value => {
                    return (
                        <Link to={`/channel/${value.title.toLowerCase()}`}>
                            <CategoryCard title={value.title} image={value.image} />
                        </Link>
                    )
                })}
            </Container>
        </Container>
    );
}

export default ChannelsPage;