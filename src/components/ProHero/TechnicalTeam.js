import React from "react";
import { Typography } from "@mui/material";
import Title from "../Title/Title";
function TechnicalTeam() {
    return (
        <>
            <div className="col-lg-7">
                <Title title={"Technical Team Augmentation"} />
                <h5>
                    We have the right professionals to manage your IT
                    infrastructure whatever your requirements:
                </h5>

                <Typography
                    sx={{
                        textAlign: "left",
                        fontWeight: "300",
                    }}
                >
                    <br />
                    <ul>
                        <li>
                            You’re a business needing to augment your existing
                            team
                        </li>
                        <li>
                            You’re a business needing professionals to deliver
                            an end-to-end solution
                        </li>
                        <li>
                            You’re a business needing an experienced help desk
                            managing your internal IT issues
                        </li>
                    </ul>
                    We understand that you need a partner that knows your
                    business framework and environment, and can act as an
                    extension of your existing team to provide advanced
                    technical solutions. From troubleshooting IT errors to
                    removing IT bottlenecks, our primary purpose is to allow for
                    faster, more efficient business operations.
                    <br />
                    <br />
                    Our mission is build lasting relationships with our clients
                    by providing them security, stability and peace of mind,
                    with strategic and innovative IT solutions that keep their
                    businesses running smoothly. Our certified team works
                    strategically with clients to transform their business with
                    modern IT solutions, delivered with swift and friendly
                    service.
                    <br />
                    <br />
                    Greenhouse Systems holds the highest level of technical and
                    commercial engagement with every major network equipment
                    vendor. This means that you have the best possible support
                    from a partner that has been extensively audited across SLA
                    Management, Trouble Ticketing & Case Management, Escalation
                    and Parts replacement.
                    <br />
                    <br />
                    Greenhouse Systems is certified across Enterprise and
                    Service Provider Technical Segments meaning that we can
                    provide extensive consultancy support to customers on their
                    SCADA, LAN, WAN and/or Carrier Based Networks.
                </Typography>
                <br />
                <br />
            </div>
            <div className="col-lg-5 align-self-center">
                <img src="/img/Team.jpeg" alt="" width={"100%"} />
            </div>
        </>
    );
}

export default TechnicalTeam;
