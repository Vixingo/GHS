import { Typography } from "@mui/material";
import React from "react";

function Hero() {
    return (
        <>
            <section className="Hero">
                <div className="container">
                    <Typography
                        variant="h1"
                        sx={{
                            color: "#fff",
                            fontWeight: "600",
                            fontSize: "50px",
                            fontFamily: "Roboto Slab",
                            maxWidth: "780px",
                            margin: "0 auto",
                            textAlign: "center",
                            lineHeight: "62px",
                            marginBottom: "20px",
                        }}
                    >
                        Greenhouse Systems provides Expert Systems Integration
                        Services in Australia, Canada, and USA
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "#FFFFFFD6",
                            fontSize: "23px",
                            fontWeight: "400",
                            fontFamily: "Roboto",
                            maxWidth: "780px",
                            margin: "0 auto",
                        }}
                    >
                        Greenhouse Systems – supporting growth through
                        connections.
                    </Typography>
                </div>
            </section>
        </>
    );
}

export default Hero;
