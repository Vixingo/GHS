import React from "react";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Enquiry from "../components/Enquiry/Enquiry";
import { Box } from "@mui/material";

function Contact() {
    return (
        <>
            <Box
                className="Contact"
                sx={{
                    backgroundColor: "#fff",
                    borderBottom: " 8px solid #309133",
                    "@media (min-width: 992px)": {
                        backgroundImage:
                            "linear-gradient(270deg, #F2F4FB 30%, #FFFFFF 30%)",
                    },
                }}
            >
                <div className="container-lg p-0">
                    <div className="row ">
                        <div className="col-lg-6 p-0">
                            <GetInTouch />
                        </div>
                        <div className="col-lg-6">
                            <Enquiry />
                        </div>
                    </div>
                </div>
            </Box>
        </>
    );
}

export default Contact;
