import { Box, Typography } from "@mui/material";
import "./Hero.css";
import React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { motion } from "framer-motion";
function Hero() {
    return (
        <>
            <section className="Hero ">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {" "}
                        <Typography
                            variant="h1"
                            sx={{
                                color: "#fff",
                                fontWeight: "600",
                                fontSize: "28px",
                                fontFamily: "Roboto Slab",
                                maxWidth: "780px",
                                margin: "0 auto",
                                textAlign: "center",
                                lineHeight: "62px",
                                marginBottom: "20px",
                                "@media(min-width:768px)": {
                                    fontSize: "50px",
                                },
                            }}
                        >
                            Greenhouse Systems provides Expert Systems
                            Integration Services in Australia, Canada, and USA
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, padding: 50 }}
                        animate={{ opacity: 1, padding: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <Typography
                            sx={{
                                textAlign: "center",
                                color: "#FFFFFFD6",
                                fontSize: "16px",
                                fontWeight: "400",
                                fontFamily: "Roboto",
                                maxWidth: "780px",
                                margin: "0 auto",
                                "@media(min-width:768px)": {
                                    fontSize: "23px",
                                },
                            }}
                        >
                            Greenhouse Systems ??? supporting growth through
                            connections.{" "}
                        </Typography>
                    </motion.div>
                    <motion.div
                        className=" icon_box row "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Box className="col-md-3 col-6">
                            <i class="fa-solid fa-brain"></i>
                            <p>
                                {" "}
                                Specialist <br /> Knowledge
                            </p>
                        </Box>
                        <Box className="col-md-3 col-6">
                            <i class="fas fa-puzzle-piece"></i>
                            <p>
                                {" "}
                                Bespoke <br /> Solutions
                            </p>
                        </Box>
                        <Box className="col-md-3 col-6">
                            <i class="fa-regular fa-lightbulb"></i>
                            <p>
                                {" "}
                                Proactive <br /> Support
                            </p>
                        </Box>
                        <Box className="col-md-3 col-6">
                            <i class="fa-solid fa-chess"></i>
                            <p>
                                Strategy &<br /> Governance
                            </p>
                        </Box>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3 }}
                    >
                        <a href="#Choose" className="learn_more">
                            <Box
                                sx={{
                                    textAlign: "center",
                                    "@media (min-width:1400px)": {
                                        marginTop: "100px",
                                    },
                                }}
                            >
                                <KeyboardArrowDownRoundedIcon
                                    sx={{
                                        fontSize: "50px",
                                        color: "#fff",
                                        marginBottom: "-10px",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: "#fff",
                                        fontFamily: "Roboto Slab",
                                        fontWeight: "600",
                                        fontSize: "18px",
                                        paddingBottom: "20px",
                                    }}
                                >
                                    Learn More
                                </Typography>
                            </Box>
                        </a>
                    </motion.div>{" "}
                </div>
            </section>
        </>
    );
}

export default Hero;
