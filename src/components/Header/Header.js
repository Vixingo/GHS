import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import "./Header.css";
import { Button, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dial, setDial] = useState(false);
  const icon_change = () => {
    dial == false ? setDial(true) : setDial(false);
  };
  return (
    <>
      <section className="Header">
        <div className="container-fluid container-lg p-0">
          <nav class="navbar navbar-expand-lg px-2 px-lg-0">
            <div class="container-fluid">
              <Link class="navbar-brand" to="/">
                <img src="/img/logo.webp" width={"100%"} alt="" />
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                onClick={icon_change}
              >
                {dial == false ? (
                  <MenuRoundedIcon sx={{ fontsize: 40 }} />
                ) : (
                  <CloseIcon sx={{ fontsize: 40 }} />
                )}
              </button>
              <div class="menu_big">
                <ul class=" navbar-nav ms-auto mb-2 mb-lg-0 ">
                  <li variants={item} class="nav-item">
                    <Link class="nav-link " aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item sub_menu_holder">
                    <Link class="nav-link">
                      Our Services
                      <KeyboardArrowDownRoundedIcon sx={{ fontSize: "20px" }} />
                      <ul className="sub_menu">
                        <Link to="/products-services/#TechnicalTeam">
                          {" "}
                          <li
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <div className="icon_wrapper1">
                              <i className="fa-solid fa-people-carry-box"></i>{" "}
                            </div>
                            <p>
                              {" "}
                              Technical Team Augmentation{" "}
                              <span>We support IT Team</span>
                            </p>
                          </li>
                        </Link>
                        <Link to="/products-services/#SystemsDesign">
                          {" "}
                          <li
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {" "}
                            <div className="icon_wrapper2">
                              <i className="far fa-edit"></i>{" "}
                            </div>
                            <p>
                              {" "}
                              Systems Design and Integration
                              <span>
                                {" "}
                                Best-in-class Integration Specialists{" "}
                              </span>
                            </p>
                          </li>
                        </Link>
                        <Link to="/products-services/#Automation">
                          {" "}
                          <li
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {" "}
                            <div className="icon_wrapper3">
                              <i className="fa-solid fa-chalkboard-user"></i>{" "}
                            </div>
                            <p>
                              {" "}
                              Automation & Development
                              <span>
                                {" "}
                                Seamless organisation-wide automation{" "}
                              </span>
                            </p>
                          </li>
                        </Link>
                        <Link to="/products-services/#Advocacy">
                          {" "}
                          <li
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {" "}
                            <div className="icon_wrapper4">
                              <i className="fa-regular fa-handshake"></i>{" "}
                            </div>
                            <p>
                              {" "}
                              Advocacy{" "}
                              <span> Let us advocate on your behalf </span>
                            </p>
                          </li>
                        </Link>
                        <Link to="/additional-offerings">
                          {" "}
                          <li
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {" "}
                            <div className="icon_wrapper5">
                              <i className="far fa-plus-square"></i>
                            </div>
                            <p>
                              Additional Offerings{" "}
                              <span>
                                {" "}
                                Voice & Data Solutions | Security & IT Support{" "}
                              </span>
                            </p>
                          </li>
                        </Link>
                      </ul>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              {dial == true ? (
                <div class="menu">
                  <ul class=" navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li class="nav-item">
                      <Link
                        class="nav-link navLinks"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li class="nav-item">
                      <a
                        data-bs-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                        class="nav-link navLinks"
                      >
                        Our Services
                        <KeyboardArrowDownRoundedIcon
                          sx={{ fontSize: "20px" }}
                        />
                      </a>
                      <div class="collapse" id="collapseExample">
                        <ul className="sub_menu">
                          <Link
                            to="/products-services/#TechnicalTeam"
                            className="subnavLinks"
                          >
                            {" "}
                            <li>
                              <i className="fa-solid fa-people-carry-box"></i>{" "}
                              Technical Team Augmentation{" "}
                            </li>
                          </Link>
                          <Link
                            to="/products-services/#SystemsDesign"
                            className="subnavLinks"
                          >
                            {" "}
                            <li>
                              {" "}
                              <i className="far fa-edit"></i> Systems Design and
                              Integration
                            </li>
                          </Link>
                          <Link
                            to="/products-services/#Automation"
                            className="subnavLinks"
                          >
                            {" "}
                            <li>
                              {" "}
                              <i className="fa-solid fa-chalkboard-user"></i>{" "}
                              Automation & Development
                            </li>
                          </Link>
                          <Link
                            to="/products-services/#Advocacy"
                            className="subnavLinks"
                          >
                            {" "}
                            <li>
                              {" "}
                              <i className="fa-regular fa-handshake"></i>{" "}
                              Advocacy
                            </li>
                          </Link>
                          <Link
                            to="/additional-offerings"
                            className="subnavLinks"
                          >
                            {" "}
                            <li>
                              {" "}
                              <i className="far fa-plus-square"></i> Additional
                              Offerings{" "}
                            </li>
                          </Link>
                        </ul>
                      </div>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link navLinks" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
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
