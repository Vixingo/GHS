import React from "react";
import { Typography } from "@mui/material";
import Title from "../Title/Title";
function Automation() {
    return (
        <>
            <div className="col-lg-7">
                <Title title={"Automation & Development"} />
                <Typography
                    sx={{
                        textAlign: "left",
                        fontWeight: "300",
                    }}
                >
                    Inefficient and ineffective manual processes may be
                    hindering your company’s output and performance. We
                    specialise in helping companies move towards more advanced
                    technologies, saving you wasted time and money on
                    complicated processes.
                    <br />
                    <br />
                    Gain the advantage of a fully functional IT system that is
                    operationally reliable and efficient. Our automation
                    integrators will refine these processes by pulling relevant
                    data from your business systems and redesigning them to
                    improve performance. Our automations integrate directly into
                    your other software and hardware to support seamless
                    organisation-wide automation.
                    <br />
                    <br />
                </Typography>
                <br />
                <br />
            </div>
            <div className="col-lg-5 mt-2">
                <img src="/img/Automation.jpeg" alt="" width={"100%"} />
            </div>
        </>
    );
}

export default Automation;
