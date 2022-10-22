import React from 'react';
import Quote from "../components/quote";

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
        <div
            style={{
                display: "flex",
                justifyContent: "space-between"
            }}
        >
            {data.map(value => <Quote name={value.name} quote={value.quote}/>)}
        </div>
    );
}

export default Quotes;