import React from "react";

import { Typography } from "@mui/material";
import Title from "../Title/Title";
function Advocacy() {
    return (
        <>
            <div className="col-lg-7">
                <Title title={"Advocacy"} />
                <Typography
                    sx={{
                        textAlign: "left",
                        fontWeight: "300",
                    }}
                >
                    When there’s a concern with an internet service provider,
                    fixing the issue can be tedious and overwhelming. You don’t
                    need to do it alone.
                    <br />
                    <br />
                    Greenhouse Systems has over 40 years combined experience
                    with all Australian ISPs, giving us an expert level
                    knowledge of their operations, the rights of the customer,
                    and how to advocate on behalf of a customer who needs to
                    contend with their ISP. Industry knowledge and experience
                    helps us achieve the best outcome for our customers with our
                    <b> IT advocacy services</b>.
                    <br />
                    <br />
                    If you need to achieve a release from agreement, navigate
                    terms and conditions, or otherwise resolve ongoing matters,
                    Greenhouse Systems will be on your side. Contact us today to
                    find out how our <b>expert IT advocacy services</b> can
                    support you to stay connected while getting the most out of
                    your processes.
                    <br />
                </Typography>
                <br />
                <br />
            </div>
            <div className="col-lg-5 align-self-center">
                <img src="/img/Advocacy.jpeg" alt="" width={"100%"} />
            </div>
        </>
    );
}

export default Advocacy;
