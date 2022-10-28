import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Enquiry.css";
import { Typography } from "@mui/material";
function Enquiry() {
    return (
        <>
            <section
                className="Enquiry"
                style={{
                    marginBottom: "100px",
                }}
            >
                <div className="container">
                    {" "}
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
                        Online Enquiry
                    </Typography>
                    <div
                        className="row"
                        style={{ maxWidth: "900px", margin: "0 auto" }}
                    >
                        <div className="col-md-6">
                            {" "}
                            <TextField
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                color="success"
                                size="small"
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
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                color="success"
                                size="small"
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
                                id="outlined-basic"
                                label="Phone"
                                variant="outlined"
                                color="success"
                                size="small"
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
                                marginLeft: "10px",
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

export default Enquiry;
