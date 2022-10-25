import React from 'react';
import {Container, Typography} from "@mui/material";

function CategoryCard({title, image}) {
    return (
        <Container
            sx={{
                display: "flex",
                height: "300px",
                width: "300px",
                alignItems: "center",
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                marginBottom: "3rem",
                marginRight: "3rem"
            }}
        >
            <div
                style={{
                    backgroundColor: "black",
                    padding: "0.25rem"
                }}
            >
                <Typography variant={"h6"}>{title}</Typography>
            </div>
        </Container>
    );
}

export default CategoryCard;