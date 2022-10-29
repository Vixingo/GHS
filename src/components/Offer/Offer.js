import { Typography } from "@mui/material";
import React from "react";
import IconBox from "../IconBox/IconBox";
import "./Offer.css";
function Offer() {
    return (
        <>
            <div className="Offer">
                <Typography
                    sx={{
                        fontFamily: "Roboto Slab",
                        fontSize: "24px",
                        paddingTop: "30px",
                        color: "#FFF",
                        fontWeight: "300",
                        marginBottom: "30px",
                        "@media (min-width: 992px)": { fontSize: "2rem" },
                    }}
                >
                    What We Offer at{" "}
                    <span
                        style={{ fontFamily: "Roboto Slab", fontWeight: "600" }}
                    >
                        Greenhouse Systems
                    </span>
                </Typography>
                <div className="offer_bg">
                    {" "}
                    <div className="container ">
                        <div className="row text-center ">
                            <div className="col-md-6">
                                <IconBox
                                    iconclass="fa-solid fa-people-carry-box"
                                    color="#000"
                                    tittle="Technical Team Augmentation"
                                />
                                <IconBox
                                    iconclass="far fa-edit"
                                    color="#000"
                                    tittle=" Systems Design and Integration"
                                />
                            </div>
                            <div className="col-md-6">
                                {" "}
                                <IconBox
                                    iconclass="fa-solid fa-chalkboard-user"
                                    color="#000"
                                    tittle="Automation and Development"
                                />
                                <IconBox
                                    iconclass="fa-regular fa-handshake"
                                    color="#000"
                                    tittle="Advocacy "
                                />
                            </div>
                            <div className="col-md-12">
                                {" "}
                                <IconBox
                                    iconclass=" far fa-plus-square"
                                    color="#000"
                                    tittle="Additional Offerings "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Offer;
