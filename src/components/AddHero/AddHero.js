import { Typography } from "@mui/material";
import React from "react";
import Title from "../Title/Title";
import "./AddHero.css";
function AddHero() {
    return (
        <>
            <section
                className="AddHero"
                style={{ padding: "50px 20px 50px 20px" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <Title title={"Voice & Data Solutions"} />
                            <Typography
                                sx={{
                                    textAlign: "left",
                                    fontWeight: "300",
                                }}
                            >
                                No matter what voice and data solutions your
                                business requires, Greenhouse Systems will
                                advise, install and support you throughout the
                                process.
                                <br />
                                <br />
                                Dedicated to providing the highest quality
                                internet and telephone services support to
                                businesses, our expert voice and data solutions
                                focus on enhancing business growth. We
                                understand the importance of an effective
                                business voice and data system which is why we
                                guarantee high uptime with carrier grade
                                infrastructure that is reliable all year around.
                                Our solutions comes with built-in security
                                encryption which protects all data between
                                endpoints.
                                <br />
                                <br />
                                Greenhouse Systems combines extensive knowledge
                                and experience with tailored solutions that are
                                customised to fit the unique requirements of
                                your business. We hold the highest level of
                                technical and commercial engagement with every
                                major network equipment vendor, staying informed
                                on the latest developments and systems to ensure
                                you get the best possible solutions and support
                                at the best price.
                                <br />
                                <br />
                                <ul>
                                    <li>
                                        Managed services for Microsoft Office
                                        365, Azure, AWS, Cloud or On-Premises
                                    </li>
                                    <li>
                                        SaaS offerings for network and systems
                                        monitoring
                                    </li>
                                    <li>
                                        The highest level of support for leaders
                                        in numerous industries, including
                                        Energy, Resources, ISP and Carrier
                                        sectors
                                    </li>
                                    <li>
                                        End-to-end solutions from design to
                                        implementation
                                    </li>
                                    <li>Post-implementation support</li>
                                </ul>
                            </Typography>
                            <br />
                            <br />
                        </div>
                        <div className="col-lg-5 align-self-center">
                            <img src="/img/add1.webp" alt="" width={"100%"} />
                        </div>
                    </div>

                    <hr style={{ margin: "50px" }} />
                    <div className="row">
                        <div className="col-lg-7">
                            <br />

                            <Title title={"Security & IT Support Solutions"} />
                            <Typography
                                sx={{
                                    textAlign: "left",
                                    fontWeight: "300",
                                }}
                            >
                                Your business does not sleep and neither do we.
                                Your IT infrastructure is an invaluable asset of
                                your business, and it’s a security risk you
                                cannot afford. Protecting your business against
                                downtime and data breaches, and maintaining IT
                                systems that run reliably and cost-effectively,
                                is vital to the success of any company.
                                <br />
                                <br />
                                Our fully managed cybersecurity plans are
                                designed to help your business control risks,
                                meet compliance mandates and focus on growth. We
                                ensure that you have an active back up plan and
                                eliminate the burden of ineffective
                                vulnerability management.
                                <br />
                                <br />
                                <ul>
                                    <li>
                                        Managed services for Microsoft Office
                                        365, Azure and AWS
                                    </li>
                                    <li>
                                        On-site and remote IT security services,
                                        such as attack surface area scans
                                    </li>
                                    <li>24/7 support</li>
                                    <li>
                                        Personal attention from senior
                                        technicians
                                    </li>
                                </ul>
                            </Typography>
                            <br />
                            <br />
                        </div>
                        <div className="col-lg-5 align-self-center">
                            <img src="/img/add2.webp" alt="" width={"100%"} />
                        </div>
                    </div>
                    <br />
                </div>
            </section>
        </>
    );
}

export default AddHero;
