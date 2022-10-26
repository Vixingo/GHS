import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import "./Header.css";
import { Button, TextField, Typography } from "@mui/material";
function Header() {
    return (
        <>
            <section className="Header">
                <div className="container-fluid container-md p-0">
                    <nav class="navbar navbar-expand-lg px-2 px-lg-0">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">
                                <img
                                    src="/img/logo.webp"
                                    width={"100%"}
                                    alt=""
                                />
                            </a>
                            <button
                                class="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <MenuRoundedIcon sx={{ fontsize: 40 }} />
                            </button>
                            <div
                                class="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                    <li class="nav-item">
                                        <a
                                            class="nav-link "
                                            aria-current="page"
                                            href="#"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Our Services
                                            <KeyboardArrowDownRoundedIcon
                                                sx={{ fontSize: "20px" }}
                                            />
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="get_in">
                        <Button
                            sx={{
                                width: "100%",
                                textTransform: "capitalize",
                            }}
                            className="m-0"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight"
                        >
                            Get In Touch&nbsp;<span> Now </span>
                        </Button>
                    </div>
                </div>
            </section>

            <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel"></h5>
                    <Button
                        sx={{ color: "#309133", fontSize: "25px" }}
                        data-bs-dismiss="offcanvas"
                        className="close_btn"
                        aria-label="Close"
                    >
                        <i className="fa-solid fa-close"></i>
                    </Button>
                </div>
                <div class="offcanvas-body">
                    <div className="container">
                        <div>
                            {" "}
                            <img src="/img/logo.png" width={"93px"} alt="" />
                        </div>
                        <h1>Hi there.</h1>
                        <h2>Want to get in touch?</h2>
                        <h3>Drop us a line</h3>
                        <TextField
                            id="standard-basic"
                            label="Name"
                            variant="standard"
                            color="success"
                            size="small"
                            sx={{
                                backgroundColor: "#f7f7f7",
                                width: "100%",
                                margin: "5px 0 ",
                            }}
                        />{" "}
                        <TextField
                            id="standard-basic"
                            label="Email"
                            variant="standard"
                            color="success"
                            size="small"
                            sx={{
                                backgroundColor: "#f7f7f7",
                                width: "100%",
                                margin: "5px 0",
                            }}
                        />{" "}
                        <TextField
                            id="standard-basic"
                            label="Phone"
                            variant="standard"
                            color="success"
                            size="small"
                            sx={{
                                backgroundColor: "#f7f7f7",
                                width: "100%",
                                margin: "5px 0",
                            }}
                        />
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
            </div>
        </>
    );
}

export default Header;
