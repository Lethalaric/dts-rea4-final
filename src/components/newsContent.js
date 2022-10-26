import React from 'react';
import { useParams } from "react-router-dom";
import { useGetByUuidQuery } from "../stores/Features/api/apiSlice";

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function NewsContent(props) {
    const params = useParams();
    // console.log('content : ',params)

    const {
        data: news,
        // isLoading,
        isSuccess,
        // isError,
        // error
    } = useGetByUuidQuery(params.id)
    // console.log('data from content', news)

    if (isSuccess) {
        return (
            <Typography variant="body1" sx={{ pt : 5 }}>
                {news.description}
                <br /><br />
                Learn more at <Link href={news.url}>{news.url}</Link>
            </Typography>
        );
    }
}

export default NewsContent;