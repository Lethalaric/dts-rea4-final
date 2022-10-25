import React from 'react';
import image from '../assets/BNNW_AmericanBuffalo--11.jpg';
import {useGetAllNewsByCategoriesQuery} from "../stores/Features/apiSlice";
import {CircularProgress, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function NewsCard({categories}) {
    const {
        data: allNewsByCategories,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetAllNewsByCategoriesQuery({categories: categories})

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
        <div
            style={{
                display: "flex",
                justifyContent: "space-between"
            }}
        >
            {content}
        </div>
    );
}

const contentNews = (news) => {
    return (
        <div
            style={{
                backgroundImage: `url(${news.image_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "400px",
                width: "600px",
                position: "relative",
                marginRight: "1rem"
            }}
        >
            <div
                style={{
                    backgroundColor: "black",
                    position: "absolute",
                    bottom: "10px",
                    paddingLeft: "1rem"
                }}
            >
                <Link to={`/news/${news.uuid}`}>
                    <Typography >{news.title}</Typography>
                </Link>
            </div>
        </div>
    )
}

export default NewsCard;