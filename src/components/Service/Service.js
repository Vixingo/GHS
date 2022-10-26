import { Typography } from "@mui/material";
import React from "react";
import IconBox from "../IconBox/IconBox";
import "./Service.css";
function Service() {
    return (
        <>
            <section className="Service">
                <div className="container " style={{ padding: "  50px 40px" }}>
                    <Typography
                        sx={{
                            fontFamily: "Roboto Slab, Sans-serif",
                            color: "#fff",
                            fontSize: "24px",
                            fontWeight: "600",
                            marginBottom: "10px",
                            "@media (min-width: 768px)": {
                                fontSize: "2rem",
                            },
                        }}
                    >
                        Our Services
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Roboto , Sans-serif",
                            color: "#fff",
                            fontWeight: "300",
                        }}
                    >
                        As leading System Integrators, we solve the IT problems
                        in your company or enterprise that you can’t.
                        <br />
                        <br />
                        Doing so allows you to focus on the problems you can.
                    </Typography>
                </div>
            </section>
            <div className="Service_back">
                <div className="Service_list">
                    <div className="row">
                        <div className="col-md-6">
                            <IconBox
                                iconclass="fa-solid fa-people-carry-box"
                                color="#000"
                                tittle="Technical Team Augmentation"
                                detail="Hire our skilled tech resources to augment your existing team and provide enhanced tech solutions. "
                            />
                            <IconBox
                                iconclass="far fa-edit"
                                color="#000"
                                tittle=" Systems Design and Integration"
                                detail="Benefit from a unique systems design and integration made to improve your business efficiency and operation. "
                            />
                        </div>
                        <div className="col-md-6">
                            {" "}
                            <IconBox
                                iconclass="fa-solid fa-chalkboard-user"
                                color="#000"
                                tittle="Automation and Development"
                                detail="Automate tedious IT processes and improve work efficiency that will help your business meet KPI's."
                            />
                            <IconBox
                                iconclass="fa-regular fa-handshake"
                                color="#000"
                                tittle="Advocacy "
                                detail="Maximise your IT potential by having our team represent your business in advocating with IT networks and system providers. "
                            />
                        </div>
                        <div className="col-md-12">
                            {" "}
                            <IconBox
                                iconclass=" far fa-plus-square"
                                color="#000"
                                tittle="Additional Offerings "
                                detail="We find practical solutions for your IT issues, from security to voice & data."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
