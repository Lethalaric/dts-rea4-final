import React from 'react';
import Quote from "../components/quote";
import {Container} from "@mui/material";

function Quotes(props) {
    const data = [
        {
            name: "FAAKHIR BESTMAN CAPE TOWN",
            quote: "Beautiful News empowers the generation of tomorrow for a brighter future and hope for every individual"
        },
        {
            name: "BONWA MBONTSI BALI",
            quote: "Brave! What a beautiful initiative"
        }
    ]
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "space-evenly"
            }}
        >
            {data.map(value => {
                return (
                    <Quote name={value.name} quote={value.quote}/>
                )
            })}
        </Container>
    );
}

export default Quotes;