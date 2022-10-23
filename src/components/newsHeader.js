import React from 'react';
import {Container, Link, Typography} from "@mui/material";
import {useGetAllNewsQuery, useGetByUuidQuery} from "../stores/Features/apiSlice";
import {useParams} from "react-router-dom";

function NewsHeader(props) {
    const params = useParams();
    console.log(params)
    const {
        data: news,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetByUuidQuery(params.id)
    if (isSuccess) {
        return (
            <Container
                maxWidth={false}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "750px",
                    alignItems: "center",
                    backgroundImage: `url(${news.image_url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >
                <div
                    style={{
                        maxWidth: "1000px"
                    }}
                >
                    <Typography variant={"h2"}>{news.title}</Typography>
                    <div
                        style={{
                            display: "flex"
                        }}
                    >
                        {news.categories.map(value => {
                            console.log(value)
                            return (
                                <Typography
                                    sx={{
                                        textTransform: "uppercase",
                                        marginRight: "0.5rem"
                                    }}
                                >
                                    {value}
                                </Typography>
                            )
                        })}
                    </div>
                    <button>Play Button</button>
                </div>
            </Container>
        );
    }
}

export default NewsHeader;