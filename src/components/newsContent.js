import React from 'react';
import {useParams} from "react-router-dom";
import {useGetByUuidQuery} from "../stores/Features/apiSlice";
import {Link} from "@mui/material";

function NewsContent(props) {
    const params = useParams();
    console.log('content : ',params)
    const {
        data: news,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetByUuidQuery(params.id)
    console.log('data from content', news)
    if (isSuccess) {
        return (
            <div>
                <p>
                    {news.description}
                </p>
                <div>
                    <p>
                        Learn more at <a href={news.url}>{news.url}</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default NewsContent;