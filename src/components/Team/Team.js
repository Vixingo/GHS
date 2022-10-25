import { Typography } from "@mui/material";
import React from "react";
import "./Team.css";

function Team() {
    return (
        <section className="Team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <Typography
                            sx={{
                                marginTop: "60px",
                                fontFamily: "Roboto Slab",
                                color: "#fff",
                                fontWeight: "400",
                                lineHeight: "1",
                                fontSize: "32px",
                                textAlign: "center",
                                padding: "10px",
                                marginBottom: "20px",
                                "@media (min-width: 992px)": {
                                    textAlign: "left",
                                    paddingRight: "50px",
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    display: "inline",
                                    paddingTop: "50px",
                                    fontFamily: "Roboto Slab",
                                    color: "#fff",
                                    fontWeight: "700",
                                    lineHeight: "1",
                                    fontSize: "32px",
                                    textAlign: "center",
                                }}
                            >
                                {" "}
                                Whether the requirement
                            </Typography>{" "}
                            is augmenting your existing team, or ongoing
                            support, you can trust us to deliver:
                        </Typography>
                        <ul style={{ color: "#fff", fontWeight: "300" }}>
                            <li>Experienced and highly specialised talent</li>
                            <li>
                                Improved efficiencies and economies of scale
                            </li>
                            <li>
                                End-to-end solutions, from design and
                                implementation to ongoing support
                            </li>
                            <li>24/7 Advanced Technical Assistance Centre</li>
                            <li>
                                Knowledge and application of emerging technology
                            </li>
                            <li>
                                Understanding of future trends in multiple areas
                                of expertise
                            </li>
                            <li>
                                Cost-effective solutions that optimise resources
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-5 align-self-center">
                        <div
                            className="team_img"
                            style={{
                                marginBottom: "50px",
                                padding: "10px",
                            }}
                        >
                            <img src="/img/Team1.webp" width={"100%"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
