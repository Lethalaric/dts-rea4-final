import React from 'react';
import {Link, useParams} from "react-router-dom";
import {Container, Typography} from "@mui/material";
import {useGetAllNewsByCategoriesQuery, useGetByUuidQuery} from "../stores/Features/api/apiSlice";
import NewsCard from "../components/newsCard";

function ChannelDetailPage(props) {
    const params = useParams();
    return (
        <Container>
            <Container
                sx={{
                    display: "flex",
                    marginBottom: "0.5rem"
                }}
            >
                <Link to={"/channels"} className={"RouterLink"} >
                    <Typography variant="h4">{`Channel`}</Typography>
                </Link>
                <Typography variant={"h4"} sx={{marginLeft: "0.5rem"}}> / {`${params.name.toUpperCase()}`}</Typography>
            </Container>
            <Container>
                <NewsCard categories={params.name}/>
            </Container>
            <Container>
                <NewsCard categories={params.name} page={2}/>
            </Container>
            <Container>
                <NewsCard categories={params.name} page={3}/>
            </Container>

        </Container>
    );
}

export default ChannelDetailPage;