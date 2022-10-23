import React from "react";
import {Search} from "@mui/icons-material";
import {InputBase, TextField} from "@mui/material";

function SearchBar(props) {
    return (
        <div
            style={{
                marginLeft: 0,
                width: "100%",
            }}
        >
            <div
                style={{
                    height: "100%",
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Search />
            </div>
            <InputBase
                placeholder={"search"}
                color={"inherit"}
            />
        </div>
    );
}

export default SearchBar;