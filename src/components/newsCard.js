import React from 'react';
import { useGetAllNewsByCategoriesQuery } from "../stores/Features/api/apiSlice";
import { CircularProgress } from "@mui/material";

import Box from '@mui/material/Box';
import {Link} from "react-router-dom";

function NewsCard({categories, page, search}) {
    const {
        data: allNewsByCategories,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetAllNewsByCategoriesQuery({categories: categories, page: page, search: search})

    let content

    if (isLoading) {
        content = <CircularProgress text="Loading..." />
    } else if (isSuccess) {
        content = allNewsByCategories.data.map(news => {
            return contentNews(news)
        })
    } else if (isError) {
        content = <div>{error.toString()}</div>
    }

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                pt : 3
            }}
        >
            {content}
        </Box>
    );
}

const contentNews = (news) => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${news.image_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "400px",
                width: "600px",
                position: "relative",
                marginRight: "1rem"
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    p : '10px',
                    position: "absolute",
                    bottom: 0
                }}
            >
                <Link className={"RouterLink"} to={`/news/${news.uuid}`}>
                   {news.title}
                </Link>
            </Box>
        </Box>
    )
}

export default NewsCard;