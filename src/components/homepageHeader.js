import React from 'react';
import {CircularProgress, Container, Typography} from "@mui/material";
import image from '../assets/BNNW_AmericanBuffalo--11.jpg';
import {Link} from 'react-router-dom'
import {useGetAllNewsByCategoriesQuery} from "../stores/Features/apiSlice";
import Carousel from "react-material-ui-carousel";

function HomepageHeader(props) {
    const {
        data: allNewsByCategories,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetAllNewsByCategoriesQuery({categories: "general, tech"})

    let content

    if (isLoading) {
        content = <CircularProgress text="Loading..." />
    } else if (isSuccess) {
        content = allNewsByCategories.data.map(news => {
            return container(news)
        })
    } else if (isError) {
        content = <div>{error.toString()}</div>
    }

    return (
        <Carousel autoPlay={true}>
            {content}
        </Carousel>
    );
}

const container = (news) => {
    return <Container
        maxWidth={false}
        sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "900px",
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
            <Typography>TODAY's TOP NEWS</Typography>
            <Link to={`/news/${news.uuid}`}>
                <Typography variant={"h2"}>{news.title}</Typography>
            </Link>
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
                {/*<Typography*/}
                {/*    sx={{*/}
                {/*        textTransform: "uppercase"*/}
                {/*    }}*/}
                {/*>*/}
                {/*    {news.categories[0]}*/}
                {/*</Typography>*/}
            </div>
            <button>Play Button</button>
        </div>
        <div
            style={{
                alignSelf: "end"
            }}
        >
            <button>submit your story</button>
        </div>
    </Container>
}

export default HomepageHeader;