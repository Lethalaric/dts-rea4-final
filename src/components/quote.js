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
            <Card variant={"outlined"}>
                <CardContent>
                    <Typography variant={"h5"}>
                        {quote}
                    </Typography>
                    <Typography variant={"caption"}>--{name}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Quote;