import { Typography } from "@mui/material";
import React from "react";
import "./News.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function News() {
    return (
        <>
            <section className="News">
                <div className="container">
                    <Typography
                        sx={{
                            color: "#fff",
                            fontSize: "24px",
                            fontFamily: "Roboto Slab",
                            marginBottom: "20px",
                            textAlign: "center",
                        }}
                    >
                        Find Out How We Can Help. Contact Us Today.
                    </Typography>
                    <Typography
                        sx={{
                            color: "#fff",
                            textAlign: "center",
                            marginBottom: ".9rem",
                            fontWeight: "300",
                        }}
                    >
                        Greenhouse Systems is a world-class{" "}
                        <span style={{ fontWeight: "700" }}>
                            {" "}
                            Systems Integration Provider
                        </span>
                        , with the skills and experience to fully support your
                        business.
                    </Typography>
                    <Typography
                        sx={{
                            color: "#fff",
                            textAlign: "center",
                            marginBottom: ".9rem",
                            fontWeight: "300",
                            padding: "10px",
                        }}
                    >
                        Contact Greenhouse Systems today to find out how our{" "}
                        <span style={{ fontWeight: "700" }}>
                            expert data solutions
                        </span>{" "}
                        can transform your business.
                    </Typography>
                    <div
                        className="row "
                        style={{ maxWidth: "900px", margin: "0 auto" }}
                    >
                        <div className="col-md-6">
                            {" "}
                            <TextField
                                id="filled-basic"
                                label="Name"
                                variant="filled"
                                color="success"
                                sx={{
                                    backgroundColor: "#fff",
                                    width: "100%",
                                    margin: "5px 0 ",
                                }}
                            />
                        </div>
                        <div className="col-md-6">
                            {" "}
                            <TextField
                                id="filled-basic"
                                label="Email"
                                variant="filled"
                                color="success"
                                sx={{
                                    backgroundColor: "#fff",
                                    width: "100%",
                                    margin: "5px 0",
                                }}
                            />
                        </div>
                        <div className="col-md-12">
                            {" "}
                            <TextField
                                id="filled-basic"
                                label="Phone"
                                variant="filled"
                                color="success"
                                sx={{
                                    backgroundColor: "#fff",
                                    width: "100%",
                                    margin: "5px 0",
                                }}
                            />
                        </div>{" "}
                        <Button
                            variant="contained"
                            sx={{
                                width: "147px",
                                height: "40",
                                backgroundColor: "#519a53",
                                color: "#fff",
                                margin: "20px auto",
                                borderRadius: "0",
                            }}
                        >
                            Send Messege
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default News;
