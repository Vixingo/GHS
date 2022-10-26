import { Typography } from "@mui/material";
import React from "react";
import IconBox from "../IconBox/IconBox";
import "./Greenhouse.css";

function Greenhouse() {
    return (
        <>
            <section className="Greenhouse">
                <div className="container">
                    <Typography
                        sx={{
                            padding: "50px 20px 50px 20px",
                            fontFamily: "Roboto Slab",
                            color: "#fff",
                            fontWeight: "400",
                            lineHeight: "1",
                            fontSize: "24px",
                            textAlign: "center",
                            "@media (min-width: 992px)": {
                                fontSize: "2rem",
                            },
                        }}
                    >
                        Why Choose
                        <Typography
                            sx={{
                                display: "inline",
                                paddingTop: "50px",
                                fontFamily: "Roboto Slab",
                                color: "#fff",
                                fontWeight: "700",
                                lineHeight: "1",
                                fontSize: "24px",
                                "@media (min-width: 992px)": {
                                    fontSize: "2rem",
                                },
                            }}
                        >
                            {" "}
                            Greenhouse Systems?
                        </Typography>
                    </Typography>
                    <div className="row text-center">
                        <div className="col-md-6 col-xl-3">
                            {" "}
                            <IconBox
                                iconclass={"fa-solid fa-brain"}
                                color="#fff"
                                tittle={"Specialist Knowledge"}
                                detail={
                                    "Every project is overseen by a qualified engineer with at least 10 years experience, and the company directors are involved with every account and almost every engagement. Our services are based on proven methodologies, and delivered by field experts. "
                                }
                            />
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <IconBox
                                iconclass={"fas fa-puzzle-piece"}
                                color="#fff"
                                tittle={"Bespoke Solutions"}
                                detail={
                                    "We understand that no two businesses are the same, so we don’t offer generic advice. We take the time to understand what you need, and customise an approach tailored to your business. With a high priority focus on business efficiency, our systems drive seamless integration and operation to free up your IT resources and make IT work for you."
                                }
                            />
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <IconBox
                                iconclass={"fa-regular fa-lightbulb"}
                                color="#fff"
                                tittle={"Proactive Support"}
                                detail={
                                    "We include around-the-clock care as a standard feature of our support services and stay ahead of any network issues that may arise. Our support team are highly skilled in troubleshooting errors and come with a strong assurance of diligence and care when fixing the problem."
                                }
                            />
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <IconBox
                                iconclass={"fa-solid fa-chess"}
                                color="#fff"
                                tittle={"Strategy & Governance"}
                                detail={
                                    "We save you the time, money, and stress, by preventing downtime and service interruptions. Our methodology focuses on improving your business operations with tactical problem-solving. We provide forward-thinking technology strategies that aim to increase the value of your business.  "
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Greenhouse;
