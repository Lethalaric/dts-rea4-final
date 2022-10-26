import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useGetByUuidQuery, useGetSimilarNewsQuery} from "../stores/Features/api/apiSlice";

function SideNews(props) {
    const params = useParams();

    const {
        data: allSimilarNews,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetSimilarNewsQuery(params.id)

    if (isSuccess) {

        console.log('similar news : ', allSimilarNews)

        const similarNews = allSimilarNews.data;
        return (
            <div
                style={{
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
            </div>
        );
    }
}

export default SideNews;