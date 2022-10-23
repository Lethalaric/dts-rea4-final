import React from 'react';
import {useParams} from "react-router-dom";
import {useGetByUuidQuery, useGetSimilarNewsQuery} from "../stores/Features/apiSlice";

function SideNews(props) {
    const params = useParams();

    const {
        data: news,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetSimilarNewsQuery(params.id)
    return (
        <div>
            related news
        </div>
    );
}

export default SideNews;