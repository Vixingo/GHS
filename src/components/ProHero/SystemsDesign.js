import React from "react";
import { Typography } from "@mui/material";
import Title from "../Title/Title";
import { Height } from "@mui/icons-material";
function SystemsDesign() {
    return (
        <>
            <div className="col-lg-7">
                <Title title={"Systems Design and Integration"} />
                <Typography
                    sx={{
                        textAlign: "left",
                        fontWeight: "300",
                    }}
                >
                    At Greenhouse Systems, we pride ourselves on being
                    best-in-class Integration Specialists in the industry. Our
                    engineers design, develop and integrate systems and
                    applications to successfully solve the challenges within
                    your business with the focus of optimising your operations.
                    <br />
                    <br />
                    Systems Integration is a necessity for any organisation’s
                    long-term productivity and profitability, but each business
                    is different and has its own unique requirements. As a
                    result, we do not believe in a one-size-fits-all solution
                    nor do we provide generic advice. We take the time to
                    understand your business to ensure that you get the most out
                    of your systems.
                    <br />
                    <br />
                    Our services range from systems consultation through to
                    installation and support, offering complex systems
                    integration for building and access control systems. We
                    provide custom solutions for{" "}
                    <b>expert IT systems integration</b>, drawing from our
                    extensive knowledge of hardware and software options and how
                    they fit into real-time business operations.
                    <br />
                    <br />
                    Greenhouse Systems is certified across Enterprise and
                    Service Provider Technical Segments meaning that we can
                    provide extensive consultancy support to customers on their
                    SCADA, LAN, WAN and or carrier-based networks.
                    <br />
                    <br />
                    We back that up with expert installation, SaaS offerings for
                    network and systems monitoring, and 24/7 support that has
                    you covered at no additional cost.
                    <br />
                    <br />
                    Greenhouse Systems will work with you to meet your business’
                    unique needs, with the right advice and the highest quality
                    service. Contact us today to find out how our{" "}
                    <b>expert IT systems integration team</b> can support you in
                    transforming your business.
                    <br />
                    <br />
                    <h6>We Deliver:</h6>
                    <ul>
                        <li>Strategic Systems Consulting</li>
                        <li>Seamless Processes</li>
                        <li>Connected Workflows</li>
                        <li>Greater Intelligence</li>
                        <li>Increased IT Performance</li>
                        <li>Improved Customer Experience</li>
                    </ul>
                    <br />
                    <h6>Our Guarantees:</h6>
                    <ul>
                        <li>NO vendor favouritism</li>
                        <li>24/7 coverage and technical support</li>
                        <li>
                            Aggressive SLA’s, down to a 15 minute response time
                        </li>
                        <li>
                            We’re extensively audited (SLA management, trouble
                            ticketing &amp; case management, escalation, and
                            parts replacement).
                        </li>
                    </ul>
                </Typography>
            </div>
            <div className="col-lg-5 align-self-center overflow-hidden">
                <img
                    src="/img/Systems.jpeg"
                    alt=""
                    height={"700px"}
                    style={{ transform: "translateX(-25%)" }}
                />
            </div>
        </>
    );
}

export default SystemsDesign;
