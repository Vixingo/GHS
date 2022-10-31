import { Typography } from "@mui/material";
import React from "react";

import "./Choose.css";

function Choose() {
    return (
        <>
            <section className="Choose" id="Choose">
                <div className="container ">
                    <Typography
                        sx={{
                            fontSize: "24px",
                            fontFamily: "Roboto Slab",
                            color: "#000",
                            fontWeight: "400",
                            lineHeight: "1",
                            marginBottom: "20px",
                            "@media (min-width: 992px)": {
                                fontSize: "2rem",
                            },
                        }}
                    >
                        Choose{" "}
                        <Typography
                            sx={{
                                display: "inline",
                                fontSize: "24px",
                                fontFamily: "Roboto Slab",
                                color: "#000",
                                fontWeight: "bold",
                                lineHeight: "1",
                                "@media (min-width: 992px)": {
                                    fontSize: "2rem",
                                },
                            }}
                        >
                            System Integration Services
                        </Typography>{" "}
                        that work for you.
                    </Typography>
                    <Typography
                        sx={{
                            color: "#43434a",
                            fontFamily: "Roboto",
                        }}
                    >
                        Greenhouse Systems makes the impossible possible. For
                        our engineers, impossible just means you have yet to
                        find a solution. Our powerful and useable IT solutions
                        are designed to get your business operating efficiently.
                        From making systems interact where previously they
                        wouldn’t, to bolstering your IT team to deliver
                        initiatives quicker, a working solution is at your
                        fingertips with our dedicated tech team.
                    </Typography>
                </div>
            </section>
        </>
    );
}

export default Choose;
