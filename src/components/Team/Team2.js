import { Typography } from "@mui/material";
import React from "react";

function Team2() {
    return (
        <section className="Team2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 align-self-center">
                        <div className="team_img" style={{ padding: "10px" }}>
                            <img src="/img/Team2.webp" width={"100%"} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <Typography
                            sx={{
                                margin: "10px auto",
                                fontFamily: "Roboto Slab",
                                fontWeight: "400",
                                lineHeight: "1",
                                color: "#43434a",
                                fontSize: "2rem",
                                textAlign: "center",
                                padding: "10px",
                                marginBottom: "20px",
                                "@media (min-width: 992px)": {
                                    textAlign: "left",
                                    paddingTop: "50px",
                                },
                            }}
                        >
                            THE TEAM
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: "300",
                                color: "#43434a",
                                fontFamily: "Roboto",
                                padding: "5px",

                                "@media (min-width: 992px)": {
                                    textAlign: "left",
                                },
                            }}
                        >
                            Greenhouse Systems is a highly experienced converged
                            networking and solutions integration company that
                            provides advanced support, solutions, and security
                            to companies and enterprises across a range of
                            industries. From Energy and Resources to ISP and
                            Carrier Services, to Capital Markets, we leverage
                            our team’s specialised skills and talent to
                            implement effective solutions with flexible
                            engagement and agility. We work according to your
                            requirements, whether you need us for a one-off
                            project to free up internal IT resources, or for
                            ongoing professional IT support.
                            <br /> <br />
                            With a combined 40 years of experience in Corporate,
                            Enterprise and Carrier networks, our engineers
                            provide custom solutions, along with personalised
                            service, and 24/7 support backed by the highest
                            industry standards and the highest level of
                            expertise.
                        </Typography>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team2;
