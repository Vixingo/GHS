import { Typography } from "@mui/material";
import React from "react";

function IconBox({ iconclass, color, tittle, detail }) {
    return (
        <>
            <div className="IconBox">
                <i
                    class={iconclass}
                    style={{
                        color: color,
                        fontSize: "50px",
                        marginBottom: "20px",
                        marginTop: "20px",
                    }}
                ></i>
                <Typography
                    sx={{
                        color: { color },
                        fontFamily: "Roboto Slab",
                        fontWeight: "600",

                        fontSize: "20px",
                        marginTop: "10px",
                        marginBottom: "10px",
                    }}
                >
                    {tittle}
                </Typography>
                <Typography
                    sx={{
                        color: { color },
                        padding: "0 20px",
                        fontWeight: "300",
                        paddingBottom: "20px",
                    }}
                >
                    {detail}
                </Typography>
            </div>
        </>
    );
}

export default IconBox;
