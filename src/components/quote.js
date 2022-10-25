import React from 'react';
import {Box, Card, CardContent, Typography} from "@mui/material";

function Quote({quote, name}) {
    return (
        <Box
            sx={{
                minWidth: "300px",
                maxWidth: "450px",
            }}
        >
            <Card
                variant={"outlined"}
                sx={{
                    minHeight: "150px",
                    maxHeight: "250px",
                    backgroundColor: "black"
                }}
            >
                <CardContent>
                    <Typography variant={"h5"} color={"white"}>
                        {quote}
                    </Typography>
                    <Typography variant={"caption"} color={"white"}>--{name}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Quote;