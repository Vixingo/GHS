import { Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
function Footer() {
    return (
        <>
            <section className="Footer">
                <div className="container">
                    <div className="row">
                        {" "}
                        <div className="col-lg-2 col-md-6 text-sm-center text-lg-start  align-self-center">
                            <img
                                src="/img/footer.webp"
                                alt=""
                                width={"100px"}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 text-sm-center">
                            <h4>Our Services</h4>
                            <a href="#">Technical Team Augmentation</a>{" "}
                            <a href="#">System Design & Integration</a>{" "}
                            <a href="#">Automation & Development</a>{" "}
                            <a href="#">Advocacy</a>
                            <a href="#">Additional Offerings</a>
                        </div>
                        <div className="col-lg-2 col-md-6 text-sm-center">
                            <h4>Information</h4>
                            <a href="#">Contact Us</a>
                        </div>
                        <div className="col-lg-4 col-md-6 text-sm-center">
                            <h4>Let’s Connect</h4>
                            <a href="#">
                                {" "}
                                <i class="fa-solid fa-phone"></i>{" "}
                                +61-7-3153-7513 (Australia)
                            </a>
                            <a href="#">
                                {" "}
                                <i class="fa-solid fa-phone"></i>{" "}
                                +1-289-274-5884 (US/Canada)
                            </a>
                            <a href="#">
                                {" "}
                                <i class="fa-regular fa-envelope"></i>{" "}
                                support@ghs.systems
                            </a>
                        </div>
                    </div>
                    <div className="social">
                        <a href="#">
                            <i class="fab fa-linkedin icons"></i>
                        </a>

                        <a href="#">
                            <i class="fab fa-twitter icons"></i>
                        </a>
                    </div>
                    <div>
                        <Typography
                            sx={{
                                color: "#000",
                                textAlign: "center",
                                fontSize: "14px",
                                fontWeight: "400",
                                marginTop: "10px",
                            }}
                        >
                            Copyright © 2022{" "}
                            <a
                                href="#"
                                style={{
                                    display: "inline",
                                    fontSize: "12px",
                                    fontWeight: "300",
                                }}
                            >
                                Greenhouse Systems
                            </a>
                        </Typography>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
