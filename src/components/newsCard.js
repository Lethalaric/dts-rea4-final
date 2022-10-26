import React from 'react';
import { useGetAllNewsByCategoriesQuery } from "../stores/Features/api/apiSlice";
import { CircularProgress } from "@mui/material";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

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
        <Link href={`/news/${news.uuid}`} underline="hover" color="bisque">
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
                       {news.title}
                </Box>
            </Box>
        </Link>
    )
}

export default NewsCard;