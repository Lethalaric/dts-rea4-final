import React from 'react';
import {Container, Typography} from "@mui/material";
import {useGetByUuidQuery} from "../stores/Features/api/apiSlice";
import {useParams} from "react-router-dom";

import Box from '@mui/material/Box';

function NewsHeader(props) {
    const params = useParams();
    const {
        data: news,
        // isLoading,
        isSuccess,
        // isError,
        // error
    } = useGetByUuidQuery(params.id)
    if (isSuccess) {
        return (
            <Container
                maxWidth={false}
                sx={{
                    display: "flex",
                    height: "517px",
                    alignItems: "flex-start",
                    backgroundImage: `url(${news.image_url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <Box
                    sx={{
                        width: 3/4,
                        backgroundColor : 'rgba(0, 0, 0, 0.8)',
                        p : '20px',
                    }}
                >
                    <Typography variant="h2">{news.title}</Typography>
                    <Box sx={{ display : "flex" }}>
                        {news.categories.map(value => {
                            return (
                                <Typography
                                    variant="caption"
                                    sx={{
                                        textTransform: "uppercase",
                                        marginRight: "0.5rem",
                                        color : '#e2e8f0'
                                    }}
                                >
                                    {value}
                                </Typography>
                            )
                        })}
                    </Box>
                </Box>
            </Container>
        );
    }
}

export default NewsHeader;