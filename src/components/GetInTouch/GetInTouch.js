import { Typography } from "@mui/material";
import React from "react";
import "./GetInTouch.css";
function GetInTouch() {
    return (
        <>
            <div className="GetInTouch" style={{ backgroundColor: "#fff" }}>
                <div className="container">
                    <Typography
                        sx={{
                            fontFamily: "Roboto Slab",
                            fontSize: "24px",
                            color: "#1937a9",
                            fontWeight: "600",
                            marginBottom: "20px",
                            "@media (min-width: 992px)": { fontSize: "2rem" },
                        }}
                    >
                        Get In Touch
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: "300",
                        }}
                    >
                        We’re world-class Systems Integrators, with the skills
                        and experience to support your business growth.
                        <br />
                        <br />
                        If you’re in Australia, Canada or the USA, contact
                        Greenhouse Systems to find out how our expert services
                        can help you grow.
                    </Typography>
                    <br />
                    <br />

                    <a href="#">
                        {" "}
                        <i class="fa-solid fa-phone"></i>{" "}
                        <span style={{ paddingLeft: "5px" }}>
                            +61-7-3153-7513 (Australia)
                        </span>{" "}
                    </a>
                    <br />
                    <a href="#">
                        {" "}
                        <i class="fa-solid fa-phone"></i>{" "}
                        <span style={{ paddingLeft: "5px" }}>
                            +1-289-274-5884 (US/Canada)
                        </span>{" "}
                    </a>
                    <br />
                    <a href="#">
                        {" "}
                        <i class="fa-regular fa-envelope"></i>{" "}
                        <span style={{ paddingLeft: "5px" }}>
                            support@ghs.systems
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default GetInTouch;
