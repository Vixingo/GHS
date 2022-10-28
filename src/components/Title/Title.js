import { Typography } from "@mui/material";
import React from "react";

function Title({ title }) {
    return (
        <>
            <Typography
                sx={{
                    fontFamily: "Roboto Slab",
                    fontSize: "24px",
                    color: "#1937a9",
                    fontWeight: "600",
                    marginBottom: "20px",
                    textAlign: "center",
                    "@media (min-width: 992px)": {
                        fontSize: "32px",
                        textAlign: "left",
                    },
                }}
            >
                {title}
            </Typography>
        </>
    );
}

export default Title;
