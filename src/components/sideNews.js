import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useGetByUuidQuery, useGetSimilarNewsQuery} from "../stores/Features/api/apiSlice";
import Box from '@mui/material/Box';

function SideNews(props) {
    const params = useParams();

    const {
        data: allSimilarNews,
        // isLoading,
        isSuccess,
        // isError,
        // error
    } = useGetSimilarNewsQuery(params.id)

    if (isSuccess) {
        // console.log('similar news : ', allSimilarNews)

        const similarNews = allSimilarNews.data;
        return (
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                {similarNews.map(news => {
                    return (
                        <Link to={`/news/${news.uuid}`} >
                            <img width={"100px"} height={"100px"} src={news.image_url} alt={news.image_url}/>
                        </Link>
                    )
                })}
            </Box>
        );
    }
}

export default SideNews;