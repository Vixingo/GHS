import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import "./Header.css";
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
                        <a href="#">
                            <h6 className="m-0">
                                Get In Touch <span>Now</span>
                            </h6>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;
